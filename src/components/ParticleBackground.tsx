interface ParticleBackgroundProps {
    particleCount?: number;
}

export function ParticleBackground({ particleCount = 30 }: ParticleBackgroundProps) {
    // Generate random positions and animation delays for particles
    const particles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 20,
        animationDuration: 15 + Math.random() * 10,
        size: 2 + Math.random() * 3,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-white opacity-10 animate-float"
                    style={{
                        left: `${particle.left}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDelay: `${particle.animationDelay}s`,
                        animationDuration: `${particle.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
}
