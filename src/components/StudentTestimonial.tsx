
import { Heart } from "lucide-react";

const StudentTestimonial = () => {
  return (
    <section id="feedback" className="py-20 px-4 relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-3">
        <div className="text-green-500/20 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
              {Math.random().toString(36).substring(7)} TESTIMONIAL {Math.random().toString(36).substring(7)} SUCCESS {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl text-center space-y-8 relative z-10">
        {/* Terminal header */}
        <div className="bg-gray-900 border border-green-500/30 rounded-t-lg p-4 mb-0 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-400 font-mono text-sm ml-4">testimonials@success:~$ LOADING_RESULTS</span>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-black/90 border-x border-b border-green-500/30 rounded-b-lg p-8 md:p-12 backdrop-blur-sm max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <p className="text-pink-400 text-sm font-mono">
              Veja o que alunos que começaram do zero estão dizendo:
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-green-400 font-mono mb-8">
            Eles começaram do zero. Hoje vendem IA no automático:
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* CARD 1 */}
            <article className="border border-green-500/30 bg-gray-900/50 rounded-lg p-6 space-y-4 hover:border-green-400/50 transition-all duration-300">
              <img 
                src="/lovable-uploads/609d1b63-b530-49dc-9e92-d19f23c91279.png"
                alt="Feedback 1 – WhatsApp do Lucas"
                className="rounded-md w-full border border-green-500/20"
              />
              <p className="italic text-gray-300 leading-relaxed">
                "Implementei um agente que tria leads e marca reunião sozinho.
                Vendi por R$3.500 + R$500/mês. Poucas semanas depois fechei
                contrato de R$37.000. Com o que o Castilho ensina, vender isso
                virou fácil."
              </p>
              <p className="font-semibold text-green-400 font-mono">Nathan Almeida</p>
              <p className="text-xs text-gray-400">Ex-gestor de tráfego</p>
            </article>

            {/* CARD 2 */}
            <article className="border border-green-500/30 bg-gray-900/50 rounded-lg p-6 space-y-4 hover:border-green-400/50 transition-all duration-300">
              <img 
                src="/lovable-uploads/d3916db7-3cd1-492a-9a8e-f5e7c95fba7a.png"
                alt="Feedback 2 – WhatsApp do Michael"
                className="rounded-md w-full border border-green-500/20"
              />
              <p className="italic text-gray-300 leading-relaxed">
                "Do estoque pra IA em 30 dias. Apresentei meu primeiro pitch,
                fechei R$5.200 de implementação + R$1.000 por mês. Pedi as contas
                e nunca mais olhei pra trás."
              </p>
              <p className="font-semibold text-green-400 font-mono">João Marcos</p>
              <p className="text-xs text-gray-400">Ex-estoquista</p>
            </article>

            {/* CARD 3 */}
            <article className="border border-green-500/30 bg-gray-900/50 rounded-lg p-6 space-y-4 hover:border-green-400/50 transition-all duration-300">
              <img 
                src="/lovable-uploads/70cc523a-a30f-4ade-aa97-aafcde8a4d34.png"
                alt="Feedback 3 – WhatsApp do João"
                className="rounded-md w-full border border-green-500/20"
              />
              <p className="italic text-gray-300 leading-relaxed">
                "Fechei meu primeiro contrato de R$4.000 + R$1.000/mês.
                Apresentei a automação que aprendi na formação e o empresário
                ficou louco. Hoje aplico isso em todos os meus clientes."
              </p>
              <p className="font-semibold text-green-400 font-mono">Michael</p>
              <p className="text-xs text-gray-400">Gestor de tráfego</p>
            </article>
          </div>

          <p className="mt-12 text-gray-300">
            A diferença entre você e eles é que eles já começaram. Bora mudar isso?
          </p>

          <div className="font-mono text-green-300 text-sm mt-6">
            {'>'} testimonials_loaded_successfully ✓
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonial;
