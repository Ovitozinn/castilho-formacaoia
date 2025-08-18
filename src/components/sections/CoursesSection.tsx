
import { Check } from "lucide-react";
import CTAButton from "../CTAButton";

const courses = [
  {
    title: "n8n (automações e agentes IA)",
    price: 299,
    description: "Crie automações poderosas e agentes IA personalizados"
  },
  {
    title: "Engenharia de Prompt",
    price: 147,
    description: "Domine a arte de criar prompts eficientes para IA"
  },
  {
    title: "Prospecção e fechamento de contratos",
    price: 99,
    description: "Aprenda a vender soluções de IA e fechar contratos"
  },
  {
    title: "Criação de sistemas complexos com IA",
    price: 299,
    description: "Desenvolva sistemas avançados utilizando IA"
  },
];

const totalValue = courses.reduce((acc, course) => acc + course.price, 0);

const CoursesSection = () => {
  return (
    <section id="courses-section" className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-3">
        <div className="text-green-500/20 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
              {Math.random().toString(36).substring(7)} COURSE {Math.random().toString(36).substring(7)} FORMATION {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Terminal header */}
        <div className="bg-gray-900 border border-green-500/30 rounded-t-lg p-4 mb-0 max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-400 font-mono text-sm ml-4">formacao@completa:~$ LOADING_COURSES</span>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-black/90 border-x border-b border-green-500/30 rounded-b-lg p-8 md:p-12 backdrop-blur-sm max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-green-400 font-mono animate-fade-in">
              Formação Completa + Cursos Inclusos
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Tudo que você precisa para dominar IA e automação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-16">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border border-green-500/30 bg-gray-900/50 p-4 md:p-6 rounded-xl hover:border-green-400/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{course.title}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base text-gray-400 line-through">R$ {course.price}</span>
                  <div className="flex items-center text-green-400">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span className="text-sm md:text-base font-medium">Incluso</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto border border-green-500/30 bg-gray-900/50 p-6 md:p-8 rounded-2xl animate-fade-in">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-400 font-mono">
                Formação Completa em IA
              </h3>
              <div className="flex flex-col items-center gap-2 md:gap-4">
                <span className="text-lg md:text-xl text-gray-400 line-through opacity-75">
                  R$ {totalValue} (valor dos cursos separados)
                </span>
                <span className="text-3xl md:text-4xl font-bold text-white">
                  R$ 297
                </span>
                <span className="text-lg md:text-xl font-semibold text-green-400">
                  Economia de R$ {totalValue - 297}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {[
                "Acesso vitalício a todo conteúdo",
                "Bônus exclusivos",
                "Aulas do básico ao avançado",
                "Monetização (como ganhar dinheiro com isso)",
                "Criando sua automação do zero"
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 md:gap-3 p-3 md:p-4 border border-green-500/20 bg-gray-900/30 rounded-lg hover:border-green-400/50 transition-all duration-300"
                >
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-200">{benefit}</span>
                </div>
              ))}
              
              {/* Templates liberados como botão especial */}
              <div className="md:col-span-2">
                <button
                  onClick={() => document.getElementById('agent-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center gap-2 md:gap-3 p-4 md:p-6 border-2 border-green-400 bg-green-500/10 rounded-lg hover:bg-green-500/20 hover:border-green-300 transition-all duration-300 group cursor-pointer"
                >
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg text-green-300 font-semibold group-hover:text-green-200">
                    🎯 Templates liberados - Veja o que você pode criar!
                  </span>
                  <div className="ml-auto text-green-400 group-hover:translate-x-1 transition-transform">→</div>
                </button>
              </div>
            </div>
            <div className="text-center">
              <CTAButton 
                onClick={() => window.location.href = "https://pay.hub.la/ARX176QDkdSkVfgpXqIb"}
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full md:w-auto hover:scale-105 transition-transform duration-300"
              >
                Garantir Minha Vaga Agora
              </CTAButton>
              <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-400">
                🔒 Pagamento 100% seguro • Garantia de 7 dias
              </p>
            </div>
          </div>

          <div className="font-mono text-green-300 text-sm mt-6 text-center">
            {'>'} formacao_carregada_com_sucesso ✓
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
