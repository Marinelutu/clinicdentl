import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ─── Procedural Molar Tooth ───────────────────────────────────────────
// Generates a molar-like shape with crown cusps, neck, and roots

function createToothGeometry(): THREE.BufferGeometry {
    // Build a cross-section profile for lathe
    const points: THREE.Vector2[] = [];

    // Root (bottom) – tapered
    points.push(new THREE.Vector2(0.0, -1.8));
    points.push(new THREE.Vector2(0.08, -1.7));
    points.push(new THREE.Vector2(0.12, -1.4));
    points.push(new THREE.Vector2(0.15, -1.1));
    points.push(new THREE.Vector2(0.18, -0.8));

    // Neck / cementum junction
    points.push(new THREE.Vector2(0.22, -0.5));
    points.push(new THREE.Vector2(0.28, -0.3));

    // Crown widens
    points.push(new THREE.Vector2(0.42, -0.1));
    points.push(new THREE.Vector2(0.52, 0.1));
    points.push(new THREE.Vector2(0.58, 0.3));
    points.push(new THREE.Vector2(0.6, 0.5));

    // Cusp region – slight variations
    points.push(new THREE.Vector2(0.56, 0.7));
    points.push(new THREE.Vector2(0.52, 0.85));
    points.push(new THREE.Vector2(0.45, 0.95));
    points.push(new THREE.Vector2(0.35, 1.02));
    points.push(new THREE.Vector2(0.2, 1.05));
    points.push(new THREE.Vector2(0.0, 1.06));

    const lathe = new THREE.LatheGeometry(points, 32);

    // Add cusp bumps by displacing vertices near the top
    const pos = lathe.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        const x = pos.getX(i);
        const z = pos.getZ(i);

        if (y > 0.7) {
            // Create 4 cusps using sin pattern
            const angle = Math.atan2(z, x);
            const cuspHeight = Math.sin(angle * 4) * 0.06 * ((y - 0.7) / 0.36);
            pos.setY(i, y + cuspHeight);
        }

        // Subtle surface irregularity for realism
        if (y > -0.5 && y < 0.9) {
            const angle = Math.atan2(z, x);
            const noise = Math.sin(angle * 8 + y * 5) * 0.008;
            const r = Math.sqrt(x * x + z * z);
            const newR = r + noise;
            if (r > 0.001) {
                pos.setX(i, (x / r) * newR);
                pos.setZ(i, (z / r) * newR);
            }
        }
    }

    lathe.computeVertexNormals();
    return lathe;
}

// ─── Floating Particles ──────────────────────────────────────────────

interface ParticleSystemProps {
    count?: number;
}

function ParticleSystem({ count = 40 }: ParticleSystemProps) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particleData = useMemo(() => {
        return Array.from({ length: count }, () => ({
            position: new THREE.Vector3(
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4
            ),
            speed: 0.1 + Math.random() * 0.3,
            offset: Math.random() * Math.PI * 2,
            radius: 1.5 + Math.random() * 1.5,
        }));
    }, [count]);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;
        const t = clock.getElapsedTime();

        particleData.forEach((p, i) => {
            const x = Math.sin(t * p.speed + p.offset) * p.radius * 0.5;
            const y = Math.cos(t * p.speed * 0.7 + p.offset * 1.3) * p.radius * 0.5;
            const z = Math.sin(t * p.speed * 0.5 + p.offset * 0.7) * p.radius * 0.3;

            dummy.position.set(
                p.position.x + x,
                p.position.y + y,
                p.position.z + z
            );
            dummy.scale.setScalar(0.008 + Math.sin(t * 2 + p.offset) * 0.004);
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <sphereGeometry args={[1, 6, 6]} />
            <meshBasicMaterial
                color="#b8d4e3"
                transparent
                opacity={0.5}
            />
        </instancedMesh>
    );
}



// ─── Main Tooth Model ────────────────────────────────────────────────

interface ToothModelProps {
    isMobile: boolean;
}

export function ToothModel({ isMobile }: ToothModelProps) {
    const groupRef = useRef<THREE.Group>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [, setIdleTimer] = useState(0);
    const [demoRotation, setDemoRotation] = useState(false);
    const demoStartAngle = useRef(0);
    const velocity = useRef({ x: 0, y: 0 });
    const lastMouse = useRef({ x: 0, y: 0 });
    const targetRotation = useRef({ x: 0, y: 0 });

    const geometry = useMemo(() => createToothGeometry(), []);



    // Fade in animation
    useEffect(() => {
        let start: number | null = null;
        const duration = 1500;
        const animate = (ts: number) => {
            if (start === null) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            setOpacity(progress);
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, []);

    // Idle timer for demo rotation
    const resetIdleTimer = useCallback(() => {
        setIdleTimer(0);
        setDemoRotation(false);
    }, []);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // Update idle timer
        if (!isHovered && !isDragging && !demoRotation) {
            setIdleTimer((prev) => {
                const next = prev + delta;
                if (next >= 3) {
                    setDemoRotation(true);
                    demoStartAngle.current = groupRef.current!.rotation.y;
                    return 0;
                }
                return next;
            });
        }

        // Demo rotation (360° showcase)
        if (demoRotation) {
            const target = demoStartAngle.current + Math.PI * 2;
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                target,
                delta * 0.8
            );
            if (Math.abs(groupRef.current.rotation.y - target) < 0.01) {
                groupRef.current.rotation.y = target;
                setDemoRotation(false);
                demoStartAngle.current = target;
            }
            return;
        }

        if (isHovered && !isDragging) {
            // Mouse follow with easing
            const mouseX = state.pointer.x;
            const mouseY = state.pointer.y;
            targetRotation.current.y = mouseX * 0.5;
            targetRotation.current.x = mouseY * 0.3;

            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                targetRotation.current.y + Math.PI * 0.15,
                0.1
            );
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                targetRotation.current.x,
                0.1
            );
        } else if (isDragging) {
            // Apply velocity-based inertia
            groupRef.current.rotation.y += velocity.current.x;
            groupRef.current.rotation.x += velocity.current.y;
            velocity.current.x *= 0.95;
            velocity.current.y *= 0.95;
        } else {
            // Auto rotation (5 degrees per second = ~0.0873 rad/s)
            groupRef.current.rotation.y += 0.0873 * delta;
        }
    });

    const handlePointerDown = useCallback(
        (e: THREE.Event) => {
            if (isMobile) {
                setIsDragging(true);
                const event = e as unknown as { point: THREE.Vector3 };
                lastMouse.current = { x: event.point.x, y: event.point.y };
                resetIdleTimer();
            }
        },
        [isMobile, resetIdleTimer]
    );

    const handlePointerMove = useCallback(
        (e: THREE.Event) => {
            if (isDragging && isMobile) {
                const event = e as unknown as { point: THREE.Vector3 };
                velocity.current.x = (event.point.x - lastMouse.current.x) * 2;
                velocity.current.y = (event.point.y - lastMouse.current.y) * 2;
                lastMouse.current = { x: event.point.x, y: event.point.y };
            }
        },
        [isDragging, isMobile]
    );

    const handlePointerUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    return (
        <group
            ref={groupRef}
            rotation={[0.2, Math.PI * 0.15, 0]}
            onPointerOver={() => {
                setIsHovered(true);
                resetIdleTimer();
            }}
            onPointerOut={() => {
                setIsHovered(false);
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
        >
            {/* Main tooth body – crown */}
            <mesh geometry={geometry} position={[0, 0, 0]} castShadow={!isMobile} receiveShadow={!isMobile}>
                <meshPhysicalMaterial
                    color="#f5f0e8"
                    roughness={0.15}
                    metalness={0.02}
                    clearcoat={0.8}
                    clearcoatRoughness={0.1}
                    transmission={0.08}
                    thickness={0.3}
                    ior={1.5}
                    envMapIntensity={0.6}
                    sheen={0.3}
                    sheenColor="#e8ddd0"
                    transparent
                    opacity={opacity}
                />
            </mesh>

            {/* Root shading overlay – blend darker at the bottom */}
            <mesh position={[0, -1.2, 0]} scale={[1.01, 1, 1.01]}>
                <cylinderGeometry args={[0.19, 0.05, 1.2, 16]} />
                <meshPhysicalMaterial
                    color="#d4cbba"
                    roughness={0.5}
                    metalness={0.0}
                    clearcoat={0.15}
                    transparent
                    opacity={opacity * 0.4}
                />
            </mesh>

            {/* Gum line ring */}
            <mesh position={[0, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.26, 0.015, 8, 32]} />
                <meshPhysicalMaterial
                    color="#e8a0a0"
                    roughness={0.6}
                    metalness={0}
                    transparent
                    opacity={opacity * 0.5}
                />
            </mesh>
        </group>
    );
}

export { ParticleSystem };
