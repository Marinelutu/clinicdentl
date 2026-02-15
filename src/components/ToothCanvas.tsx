import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { ToothModel, ParticleSystem } from './ToothModel';

interface ToothCanvasProps {
    isMobile: boolean;
}

export default function ToothCanvas({ isMobile }: ToothCanvasProps) {
    return (
        <Canvas
            camera={{ position: [-0.2, 0.3, 4], fov: 38 }}
            dpr={isMobile ? [1, 1.5] : [1, 2]}
            shadows={!isMobile}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance',
            }}
            style={{ background: 'transparent' }}
        >
            {/* Lighting Setup */}
            {/* Main directional light – cool white 6000K = slight blue tint */}
            <directionalLight
                position={[3, 4, 2]}
                intensity={1.2}
                color="#e8f0ff"
                castShadow={!isMobile}
                shadow-mapSize={isMobile ? 512 : 1024}
            />

            {/* Fill light – 40% intensity from opposite side */}
            <directionalLight
                position={[-3, 2, -1]}
                intensity={0.48}
                color="#fff5e6"
            />

            {/* Rim light – 20% intensity from behind */}
            <directionalLight
                position={[0, 1, -4]}
                intensity={0.24}
                color="#d4e8ff"
            />

            {/* Subtle ambient for complete visibility */}
            <ambientLight intensity={0.35} color="#f0f0ff" />

            {/* Environment map for reflections */}
            <Environment preset="studio" environmentIntensity={0.3} />

            {/* The tooth */}
            <ToothModel isMobile={isMobile} />

            {/* Microscopic particles */}
            <ParticleSystem count={isMobile ? 20 : 40} />
        </Canvas>
    );
}
