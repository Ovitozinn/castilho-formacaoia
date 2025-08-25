import { Star, TrendingUp, DollarSign } from "lucide-react";

const SpecificProofSection = () => {
  const proofs = [
    {
      name: "Daniel Ferreira",
      age: "29 anos",
      profession: "Empreendedor",
      result: "R$ 200.000+",
      time: "em 3 meses",
      story: "Começou esse ano saindo do zero. Em menos de 3 meses já faturou mais de 200K apenas com IA.",
      videoId: "d_OXc3J4VY0"
    },
    {
      name: "Thierry Gustavo", 
      age: "31 anos",
      profession: "Especialista em IA",
      result: "R$ 10.000+",
      time: "LTV do 1º contrato",
      story: "Fechou seu primeiro contrato com LTV (Lifetime Value) maior que 10K aplicando as estratégias da comunidade.",
      videoId: "Ys6uopUc67g"
    },
    {
      name: "Leonardo Peralta",
      age: "27 anos",
      profession: "Consultor de Automação",
      result: "R$ 10.000+",
      time: "em 2 meses",
      story: "Em menos de 2 meses de acompanhamento fechou 3 contratos - mais de 10K de faturamento.",
      videoId: "lON-WbHtcE4"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/5 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-green-400">127 pessoas</span> já faturam mais de R$ 15k/mês
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja 3 casos REAIS de quem saiu do zero e está faturando alto com IA (nomes e resultados verificados)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {proofs.map((proof, index) => (
            <div key={index} className="bg-black/40 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-800 border-2 border-green-400 rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${proof.videoId}?controls=0&modestbranding=1&rel=0&start=10`}
                    title={`Depoimento ${proof.name}`}
                    className="w-full h-full scale-150"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{proof.name}</h3>
                  <p className="text-green-400 text-sm">{proof.age} • {proof.profession}</p>
                </div>
              </div>
              
              <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  <span className="text-2xl font-bold text-green-400">{proof.result}</span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <p className="text-sm text-green-300">{proof.time}</p>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">{proof.story}</p>
              
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-green-600/10 border border-green-500/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-white font-semibold mb-2">
              🎯 Resultado médio dos nossos alunos nos primeiros 60 dias:
            </p>
            <p className="text-3xl font-bold text-green-400">R$ 28.750</p>
            <p className="text-sm text-gray-300 mt-2">*Baseado em pesquisa com 127 alunos ativos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificProofSection;