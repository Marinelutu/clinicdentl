import { LucideIcon } from 'lucide-react';

interface Photo {
  icon: LucideIcon;
  label: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="group relative aspect-square bg-gradient-to-br from-primary-light/5 to-secondary-light/10 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-neutral-100"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <div className="mb-2 group-hover:scale-110 transition-transform filter drop-shadow-sm">
              <photo.icon className="w-12 h-12 text-secondary group-hover:text-primary transition-colors" />
            </div>
            <div className="text-xs text-center text-neutral-600 font-medium group-hover:text-primary transition-colors">
              {photo.label}
            </div>
          </div>
          <div className="absolute inset-0 bg-secondary-light opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
      ))}
    </div>
  );
}
