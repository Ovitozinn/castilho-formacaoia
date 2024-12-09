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
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark opacity-90" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Formação Completa + Cursos Inclusos
          </h2>
          <p className="text-xl text-gray-300">
            Tudo que você precisa para dominar IA e automação
          </p>
        </div>

        {/* Cursos */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {courses.map((course, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-400 mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 line-through">R$ {course.price}</span>
                <div className="flex items-center text-primary">
                  <Check className="w-5 h-5 mr-2" />
                  <span className="font-medium">Incluso</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Formação Completa */}
        <div className="max-w-4xl mx-auto glass p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Formação Completa em IA</span>
            </h3>
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="text-gray-400 line-through text-xl">
                R$ {totalValue} (valor dos cursos separados)
              </span>
              <span className="text-4xl font-bold text-white">
                R$ 199
              </span>
            </div>
            <p className="text-primary font-semibold text-lg">
              Economia de R$ {totalValue - 199}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "Acesso vitalício a todo conteúdo",
              "Mentoria em grupo semanal",
              "Certificados individuais",
              "Bônus exclusivos de lançamento",
              "Atualizações gratuitas",
              "Comunidade exclusiva de alunos"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 glass rounded-lg"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton 
              onClick={() => window.location.href = "https://pay.kirvano.com/186d210d-4150-4fb3-9643-fc870759dda3"}
              className="text-lg px-8 py-4"
            >
              Garantir Minha Vaga Agora
            </CTAButton>
            <p className="mt-4 text-sm text-gray-400">
              🔒 Pagamento 100% seguro • Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;