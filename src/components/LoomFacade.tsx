import { useState } from "react";
import { Play } from "lucide-react";

interface LoomFacadeProps {
  loomId: string;
  title: string;
  className?: string;
  thumbnailUrl?: string;
}

const LoomFacade = ({ loomId, title, className = "", thumbnailUrl }: LoomFacadeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.loom.com/embed/${loomId}`}
        className={`w-full aspect-video rounded-lg shadow-xl ${className}`}
        aria-label={title}
        allowFullScreen
      />
    );
  }

  return (
    <div
      className={`relative w-full aspect-video cursor-pointer group ${className}`}
      onClick={loadVideo}
    >
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg" />
      )}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center rounded-lg">
        <div className="bg-green-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Play className="w-12 h-12 text-white fill-white" />
        </div>
      </div>
    </div>
  );
};

export default LoomFacade;
