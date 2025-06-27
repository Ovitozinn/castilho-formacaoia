
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
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark opacity-90 animate-gradient-x" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text animate-fade-in">
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
              className="glass p-4 md:p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-sm md:text-base text-gray-400 mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm md:text-base text-gray-400 line-through">R$ {course.price}</span>
                <div className="flex items-center text-primary">
                  <Check className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  <span className="text-sm md:text-base font-medium">Incluso</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto glass p-6 md:p-8 rounded-2xl animate-fade-in">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="gradient-text">Formação Completa em IA</span>
            </h3>
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <span className="text-lg md:text-xl text-gray-400 line-through opacity-75">
                R$ {totalValue} (valor dos cursos separados)
              </span>
              <span className="text-3xl md:text-4xl font-bold text-white">
                R$ 297
              </span>
              <span className="text-lg md:text-xl font-semibold text-primary animate-pulse">
                Economia de R$ {totalValue - 297}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              "Acesso vitalício a todo conteúdo",
              "Bônus exclusivos",
              "Atualizações gratuitas",
              "Templates liberados",
              "Aulas do básico ao avançado",
              "Monetização (como ganhar dinheiro com isso)",
              "Módulo de prospecção e vendas",
              "Criando sua automação do zero"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 glass rounded-lg hover:scale-105 transition-all duration-300"
              >
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton 
              onClick={() => window.location.href = "https://pay.hub.la/ARX176QDkdSkVfgpXqIb"}
              className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full md:w-auto animate-bounce hover:scale-105 transition-transform duration-300"
            >
              Garantir Minha Vaga Agora
            </CTAButton>
            <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-400">
              🔒 Pagamento 100% seguro • Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
