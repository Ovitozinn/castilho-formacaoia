import { Check } from "lucide-react";

const courses = [
  {
    title: "n8n (automações e agentes IA)",
    price: "R$ 299",
  },
  {
    title: "Engenharia de Prompt",
    price: "R$ 147",
  },
  {
    title: "Prospecção e fechamento de contratos de IA",
    price: "R$ 99",
  },
  {
    title: "Criação de sistemas complexos com IA",
    price: "R$ 299",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-lighter opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Cursos Inclusos na Formação
          </h2>
          <p className="text-xl text-gray-300">
            Todo este conteúdo está incluso no seu acesso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 line-through">{course.price}</span>
                <div className="flex items-center text-primary">
                  <Check className="w-5 h-5 mr-2" />
                  <span className="font-medium">Incluso</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;