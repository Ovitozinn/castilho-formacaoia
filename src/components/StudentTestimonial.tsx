
import { Heart } from "lucide-react";

const StudentTestimonial = () => {
  return (
    <section id="feedback" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center space-y-8">
        
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
          <p className="text-pink-400 text-sm">
            Veja o que alunos que começaram do zero estão dizendo:
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Eles começaram do zero. Hoje vendem IA no automático:
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* CARD 1 */}
          <article className="glass rounded-lg p-6 space-y-4">
            <img 
              src="/lovable-uploads/609d1b63-b530-49dc-9e92-d19f23c91279.png"
              alt="Feedback 1 – WhatsApp do Lucas"
              className="rounded-md w-full"
            />
            <p className="italic text-gray-300 leading-relaxed">
              "Implementei um agente que tria leads e marca reunião sozinho.
              Vendi por R$3.500 + R$500/mês. Poucas semanas depois fechei
              contrato de R$37.000. Com o que o Castilho ensina, vender isso
              virou fácil."
            </p>
            <p className="font-semibold text-primary">Nathan Almeida</p>
            <p className="text-xs text-gray-400">Ex-gestor de tráfego</p>
          </article>

          {/* CARD 2 */}
          <article className="glass rounded-lg p-6 space-y-4">
            <img 
              src="/lovable-uploads/d3916db7-3cd1-492a-9a8e-f5e7c95fba7a.png"
              alt="Feedback 2 – WhatsApp do Michael"
              className="rounded-md w-full"
            />
            <p className="italic text-gray-300 leading-relaxed">
              "Do estoque pra IA em 30 dias. Apresentei meu primeiro pitch,
              fechei R$5.200 de implementação + R$1.000 por mês. Pedi as contas
              e nunca mais olhei pra trás."
            </p>
            <p className="font-semibold text-primary">João Marcos</p>
            <p className="text-xs text-gray-400">Ex-estoquista</p>
          </article>

          {/* CARD 3 */}
          <article className="glass rounded-lg p-6 space-y-4">
            <img 
              src="/lovable-uploads/70cc523a-a30f-4ade-aa97-aafcde8a4d34.png"
              alt="Feedback 3 – WhatsApp do João"
              className="rounded-md w-full"
            />
            <p className="italic text-gray-300 leading-relaxed">
              "Fechei meu primeiro contrato de R$4.000 + R$1.000/mês.
              Apresentei a automação que aprendi na formação e o empresário
              ficou louco. Hoje aplico isso em todos os meus clientes."
            </p>
            <p className="font-semibold text-primary">Michael</p>
            <p className="text-xs text-gray-400">Gestor de tráfego</p>
          </article>
        </div>

        <p className="mt-12 text-gray-300">
          A diferença entre você e eles é que eles já começaram. Bora mudar isso?
        </p>

      </div>
    </section>
  );
};

export default StudentTestimonial;
