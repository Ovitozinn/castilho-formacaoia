import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

const YouTubeFacade = ({ videoId, title, className = "" }: YouTubeFacadeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&autoplay=1`}
        title={title}
        className={`w-full h-full ${className}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div
      className={`relative w-full h-full cursor-pointer group ${className}`}
      onClick={loadVideo}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Play className="w-12 h-12 text-white fill-white" />
        </div>
      </div>
    </div>
  );
};

export default YouTubeFacade;
