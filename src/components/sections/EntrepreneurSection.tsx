import { Building2, Network, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const EntrepreneurSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="entrepreneur">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-dark-lighter opacity-90" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Precisa implementar algum projeto específico</span>
            <br />
            ou de alguma ajuda?
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="glass rounded-2xl p-2 animate-fade-in">
                <img
                  src="/lovable-uploads/22732725-0bc2-4ccd-b573-a92ce2948430.png"
                  alt="Castilho"
                  className="rounded-xl w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent rounded-xl" />
              </div>
            </div>
            
            {/* Content Column */}
            <div className="space-y-6 animate-fade-in delay-100">
              <p className="text-xl text-gray-300">
                Transforme sua empresa com soluções personalizadas em IA. 
                Consultoria especializada para gestores e empreendedores que 
                buscam inovação e eficiência.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="glass p-4 rounded-xl hover:scale-105 transition-transform">
                  <Building2 className="w-8 h-8 text-cyber-blue mb-2" />
                  <h3 className="font-semibold mb-1">Consultoria</h3>
                  <p className="text-gray-400 text-sm">
                    Análise personalizada das necessidades do seu negócio
                  </p>
                </div>
                
                <div className="glass p-4 rounded-xl hover:scale-105 transition-transform">
                  <Network className="w-8 h-8 text-cyber-purple mb-2" />
                  <h3 className="font-semibold mb-1">Implementação</h3>
                  <p className="text-gray-400 text-sm">
                    Desenvolvimento e integração de soluções em IA
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button
                  className="bg-cyber-blue hover:bg-cyber-blue/80 text-white px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
                  onClick={() => window.open('https://cal.com/ovitozin/reuniao-consultoria?date=2024-12-11&month=2024-12', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consultoria
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurSection;