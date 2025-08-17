import { Instagram, Linkedin, Youtube } from "lucide-react";

const CastilhoBio = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Matrix background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-3">
        <div className="text-green-500/20 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
              {Math.random().toString(36).substring(7)} CASTILHO {Math.random().toString(36).substring(7)} BIO {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            {/* Terminal header */}
            <div className="bg-gray-900 border border-green-500/30 rounded-t-lg p-4 mb-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 font-mono text-sm ml-4">castilho@bio:~$ cat profile.txt</span>
              </div>
            </div>

            {/* Main content */}
            <div className="bg-black/90 border-x border-b border-green-500/30 rounded-b-lg p-8 backdrop-blur-sm">
              <h2 className="text-4xl font-bold mb-6 text-green-400 font-mono">
                Quem é o Castilho?
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <div className="border border-green-500/20 bg-gray-900/30 p-6 rounded-lg hover:border-green-400/50 transition-all duration-300">
                  <p className="mb-4">
                    Com formação em <span className="text-green-400 font-semibold">Análise e Desenvolvimento de Sistemas</span>, 
                    iniciei minha jornada no marketing. Porém, me encontrei na 
                    <span className="text-green-400 font-semibold"> Análise de Dados</span>, onde consegui meu primeiro emprego na área.
                  </p>
                  <p>
                    Evoluí para <span className="text-green-400 font-semibold">Analista de Inteligência de Mercado</span>, 
                    onde aprendi e aprimorei meus conhecimentos sobre Business e Dados.
                  </p>
                </div>

                <div className="border border-yellow-500/20 bg-gray-900/30 p-6 rounded-lg hover:border-yellow-400/50 transition-all duration-300">
                  <p className="mb-4">
                    Logo me encontrei num platô - queria ganhar mais e trabalhar menos.
                    Tentei de tudo, literalmente! Abri loja de produtos naturais, 
                    lavei carros, fiz dropshipping, afiliado... E nada funcionou.
                  </p>
                </div>

                <div className="border border-green-500/20 bg-gray-900/30 p-6 rounded-lg hover:border-green-400/50 transition-all duration-300">
                  <p className="mb-4">
                    Até que encontrei a <span className="text-green-400 font-bold font-mono">Inteligência Artificial</span>, 
                    que tem uma curva de aprendizado muito rápida. Logo iniciei a montar 
                    agentes IA e automações.
                  </p>
                  <p>
                    Fechei meus primeiros contratos e hoje só fecho os contratos que 
                    <span className="text-green-400 font-bold"> EU QUERO!</span>
                  </p>
                </div>

                <div className="border border-green-600 bg-green-900/20 p-6 rounded-lg">
                  <p className="text-xl font-semibold text-green-400 font-mono">
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
                  className="p-3 border border-green-500/30 bg-gray-900/50 rounded-full hover:border-green-400/50 transition-all hover:bg-green-400/10"
                >
                  <Linkedin className="w-6 h-6 text-green-400" />
                </a>
                <a 
                  href="https://www.instagram.com/castilho.ia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-green-500/30 bg-gray-900/50 rounded-full hover:border-green-400/50 transition-all hover:bg-green-400/10"
                >
                  <Instagram className="w-6 h-6 text-green-400" />
                </a>
                <a 
                  href="https://www.youtube.com/@castilhoia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-green-500/30 bg-gray-900/50 rounded-full hover:border-green-400/50 transition-all hover:bg-green-400/10"
                >
                  <Youtube className="w-6 h-6 text-green-400" />
                </a>
              </div>

              <div className="font-mono text-green-300 text-sm mt-6">
                {'>'} profile_loaded_successfully ✓
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Matrix glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-300 opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-green-500/30">
                  <img 
                    src="/lovable-uploads/2b838388-adc5-44a9-9a07-87fa9c7a1c50.png"
                    alt="Castilho" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CastilhoBio;