const YouTubeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Veja na Prática
            </h2>
            <p className="text-xl text-gray-300">
              Descubra como a IA pode transformar sua carreira
            </p>
          </div>

          <div className="glass rounded-xl overflow-hidden">
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