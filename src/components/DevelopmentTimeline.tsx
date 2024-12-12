import { CheckCircle2, Clock, Construction } from "lucide-react";
import TechCard from "./TechCard";

const DevelopmentTimeline = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
          Desenvolvimento em Andamento
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <TechCard>
            <div className="flex flex-col items-center text-center gap-4">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-semibold">Disponível Agora</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Módulos Fundamentais</li>
                <li>Comunidade Exclusiva</li>
                <li>Mentorias Semanais</li>
              </ul>
            </div>
          </TechCard>

          <TechCard>
            <div className="flex flex-col items-center text-center gap-4">
              <Construction className="w-8 h-8 text-primary animate-pulse" />
              <h3 className="text-xl font-semibold">Em Desenvolvimento</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Módulos Avançados</li>
                <li>Projetos Práticos</li>
                <li>Cases de Sucesso</li>
              </ul>
            </div>
          </TechCard>

          <TechCard>
            <div className="flex flex-col items-center text-center gap-4">
              <Clock className="w-8 h-8 text-cyber-blue" />
              <h3 className="text-xl font-semibold">Próximas Atualizações</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Workshops Especiais</li>
                <li>Recursos Adicionais</li>
                <li>Novos Bônus</li>
              </ul>
            </div>
          </TechCard>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Benefícios Exclusivos dos Fundadores
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Influência direta no desenvolvimento
              </li>
              <li className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Preço especial vitalício
              </li>
              <li className="flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Acesso antecipado a novos conteúdos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTimeline;