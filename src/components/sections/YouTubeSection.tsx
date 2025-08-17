const YouTubeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-3">
        <div className="text-green-500/20 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
              {Math.random().toString(36).substring(7)} VIDEO {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-green-400 font-mono">
              Veja na Prática
            </h2>
            <p className="text-xl text-gray-300">
              Descubra como a IA pode transformar sua carreira
            </p>
          </div>

          <div className="border border-green-500/30 bg-gray-900/50 rounded-xl overflow-hidden">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/s6L5JVxGnUU?rel=0&modestbranding=1"
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;