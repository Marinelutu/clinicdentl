interface Photo {
  emoji: string;
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
          className="group relative aspect-square bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <div className="text-6xl mb-2 group-hover:scale-110 transition-transform">
              {photo.emoji}
            </div>
            <div className="text-xs text-center text-gray-600 font-medium">
              {photo.label}
            </div>
          </div>
          <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
      ))}
    </div>
  );
}
