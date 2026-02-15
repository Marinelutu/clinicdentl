import { Suspense, useState, useEffect, lazy, useMemo } from 'react';
import { motion } from 'framer-motion';

// Lazy-load the heavy 3D canvas
const Canvas3D = lazy(() => import('./ToothCanvas'));

// ─── Performance Detection ───────────────────────────────────────────

function detectLowPerformance(): boolean {
    if (typeof window === 'undefined') return true;
    // Check for mobile with low memory
    const nav = navigator as Navigator & { deviceMemory?: number; hardwareConcurrency?: number };
    if (nav.deviceMemory && nav.deviceMemory < 4) return true;
    if (nav.hardwareConcurrency && nav.hardwareConcurrency < 4) return true;
    // Check WebGL support
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        if (!gl) return true;
    } catch {
        return true;
    }
    return false;
}

function isMobileDevice(): boolean {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// ─── Shimmer Placeholder ─────────────────────────────────────────────

function ShimmerPlaceholder() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="tooth-shimmer">
                <svg viewBox="0 0 120 180" className="w-32 h-48 md:w-48 md:h-64">
                    <defs>
                        <linearGradient id="shimmer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                            <animateTransform
                                attributeName="gradientTransform"
                                type="translate"
                                from="-1 0"
                                to="1 0"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                        </linearGradient>
                    </defs>
                    {/* Simplified tooth silhouette */}
                    <path
                        d="M60 10 C85 10 100 35 100 65 C100 85 95 100 90 110 C85 120 80 130 75 155 C73 165 67 170 60 170 C53 170 47 165 45 155 C40 130 35 120 30 110 C25 100 20 85 20 65 C20 35 35 10 60 10Z"
                        fill="url(#shimmer-gradient)"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                    />
                </svg>
            </div>
        </div>
    );
}

// ─── 2D Fallback for Low Performance ─────────────────────────────────

function ToothFallback2D() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full flex items-center justify-center"
        >
            {/* Stylized 2D tooth SVG */}
            <div className="relative">
                <svg viewBox="0 0 200 280" className="w-40 h-56 md:w-56 md:h-72 drop-shadow-2xl">
                    <defs>
                        <radialGradient id="enamel-grad" cx="40%" cy="30%" r="60%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="40%" stopColor="#f5f0e8" />
                            <stop offset="100%" stopColor="#e8ddd0" />
                        </radialGradient>
                        <radialGradient id="root-grad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#ddd5c4" />
                            <stop offset="100%" stopColor="#c4baa8" />
                        </radialGradient>
                        <filter id="tooth-glow">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feFlood floodColor="#4ab8d4" floodOpacity="0.15" />
                            <feComposite in2="blur" operator="in" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {/* Crown */}
                    <path
                        d="M100 15 C140 15 165 50 165 90 C165 115 155 130 145 140 L100 140 L55 140 C45 130 35 115 35 90 C35 50 60 15 100 15Z"
                        fill="url(#enamel-grad)"
                        filter="url(#tooth-glow)"
                    />
                    {/* Cusp details */}
                    <path
                        d="M60 18 C70 30 80 15 90 25 C100 15 110 30 120 18 C130 28 140 22 145 30"
                        fill="none"
                        stroke="rgba(200,195,185,0.3)"
                        strokeWidth="1.5"
                    />
                    {/* Root */}
                    <path
                        d="M55 140 C55 160 50 200 60 245 C63 258 68 265 72 265 C76 265 78 255 80 240 C82 225 85 190 90 170 L100 140Z"
                        fill="url(#root-grad)"
                    />
                    <path
                        d="M145 140 C145 160 150 200 140 245 C137 258 132 265 128 265 C124 265 122 255 120 240 C118 225 115 190 110 170 L100 140Z"
                        fill="url(#root-grad)"
                    />
                </svg>

                {/* Floating particles for 2D version */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: 3 + Math.random() * 3,
                            height: 3 + Math.random() * 3,
                            background: 'rgba(74, 184, 212, 0.4)',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}



// ─── Main Scene Component ────────────────────────────────────────────

export function ToothScene() {
    const [isLowPerf, setIsLowPerf] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const mobile = useMemo(() => isMobileDevice(), []);

    useEffect(() => {
        setIsLowPerf(detectLowPerformance());
        // Small delay before rendering to avoid blocking hero text animation
        const timer = setTimeout(() => setIsReady(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full h-full min-h-[350px] md:min-h-[500px]">
            {!isReady ? (
                <ShimmerPlaceholder />
            ) : isLowPerf ? (
                <ToothFallback2D />
            ) : (
                <Suspense fallback={<ShimmerPlaceholder />}>
                    <Canvas3D isMobile={mobile} />
                </Suspense>
            )}

            {/* Interaction hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-wider pointer-events-none"
            >
                {mobile ? 'APASĂ ȘI ROTEȘTE' : 'HOVER PENTRU A EXPLORA'}
            </motion.div>
        </div>
    );
}
