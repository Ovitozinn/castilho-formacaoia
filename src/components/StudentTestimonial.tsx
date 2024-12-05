import { Star } from "lucide-react";

const StudentTestimonial = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Ainda com dúvida?
          </h2>
          <p className="text-2xl text-gray-300">
            Olha o feedback de um dos meus primeiros alunos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-2xl relative overflow-hidden animate-fade-in">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-hover/10 pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-primary">
                  Resultados Impressionantes!
                </h3>
                
                <p className="text-lg text-gray-300">
                  Em menos de <span className="text-primary font-bold">20 dias de estudo</span>, 
                  consegui fechar <span className="text-primary font-bold">2 contratos</span> que 
                  somaram um total de:
                </p>
                
                <div className="text-4xl font-bold gradient-text animate-pulse">
                  R$ 4.800,00
                </div>
                
                <p className="text-gray-300 italic">
                  "A metodologia do Castilho é incrível! Em pouquíssimo tempo já estava 
                  aplicando os conhecimentos e fechando contratos!"
                </p>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-hover opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/8a778894-0186-48e6-a6d7-f78f25b74216.png"
                    alt="Feedback do aluno no WhatsApp" 
                    className="rounded-lg w-full shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonial;