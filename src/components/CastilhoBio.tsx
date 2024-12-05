import { Instagram, Linkedin, Youtube } from "lucide-react";

const CastilhoBio = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-dark to-dark-lighter">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Quem é o Castilho?
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <div className="glass p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <p className="mb-4">
                  Com formação em <span className="text-primary font-semibold">Análise e Desenvolvimento de Sistemas</span>, 
                  iniciei minha jornada no marketing. Porém, me encontrei na 
                  <span className="text-primary font-semibold"> Análise de Dados</span>, onde consegui meu primeiro emprego na área.
                </p>
                <p>
                  Evoluí para <span className="text-primary font-semibold">Analista de Inteligência de Mercado</span>, 
                  onde aprendi e aprimorei meus conhecimentos sobre Business e Dados.
                </p>
              </div>

              <div className="glass p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <p className="mb-4">
                  Logo me encontrei num platô - queria ganhar mais e trabalhar menos.
                  Tentei de tudo, literalmente! Abri loja de produtos naturais, 
                  lavei carros, fiz dropshipping, afiliado... E nada funcionou.
                </p>
              </div>

              <div className="glass p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <p className="mb-4">
                  Até que encontrei a <span className="gradient-text font-bold">Inteligência Artificial</span>, 
                  que tem uma curva de aprendizado muito rápida. Logo iniciei a montar 
                  agentes IA e automações.
                </p>
                <p>
                  Fechei meus primeiros contratos e hoje só fecho os contratos que 
                  <span className="text-primary font-bold"> EU QUERO!</span>
                </p>
              </div>

              <div className="glass p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <p className="text-xl font-semibold gradient-text">
                  E agora ensino diversas pessoas a transformarem sua vida em pouquíssimo 
                  tempo com IA.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="https://www.linkedin.com/notifications/?filter=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:scale-110 transition-transform hover:bg-primary/20"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/castilho.ia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:scale-110 transition-transform hover:bg-primary/20"
              >
                <Instagram className="w-6 h-6 text-primary" />
              </a>
              <a 
                href="https://www.youtube.com/@gruposenaai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:scale-110 transition-transform hover:bg-primary/20"
              >
                <Youtube className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-hover opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img 
                    src="/lovable-uploads/2b838388-adc5-44a9-9a07-87fa9c7a1c50.png"
                    alt="Castilho" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CastilhoBio;