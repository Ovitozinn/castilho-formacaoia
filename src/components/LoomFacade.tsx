interface LoomFacadeProps {
  loomId: string;
  title: string;
  className?: string;
  thumbnailUrl?: string;
}

const LoomFacade = ({ loomId, title, className = "" }: LoomFacadeProps) => {
  return (
    <iframe
      src={`https://www.loom.com/embed/${loomId}`}
      className={`w-full aspect-video rounded-lg shadow-xl ${className}`}
      aria-label={title}
      allowFullScreen
    />
  );
};

export default LoomFacade;
