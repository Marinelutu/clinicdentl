interface ImageWithOverlayProps {
    src: string;
    alt: string;
    overlay?: 'none' | 'gradient' | 'dark' | 'framed';
    rounded?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export function ImageWithOverlay({
    src,
    alt,
    overlay = 'none',
    rounded = false,
    className = '',
    children
}: ImageWithOverlayProps) {
    const containerClass = `relative ${rounded ? 'rounded-2xl' : 'rounded-md'} overflow-hidden ${className}`;

    const overlayClasses = {
        none: '',
        gradient: 'absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent pointer-events-none',
        dark: 'absolute inset-0 bg-dark/40 pointer-events-none',
        framed: ''
    };

    const imageClass = overlay === 'framed'
        ? 'w-full h-full object-cover border-4 border-white shadow-2xl'
        : 'w-full h-full object-cover';

    return (
        <div className={containerClass}>
            <img src={src} alt={alt} className={imageClass} />
            {overlay !== 'none' && overlay !== 'framed' && (
                <div className={overlayClasses[overlay]} />
            )}
            {children && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    {children}
                </div>
            )}
        </div>
    );
}
