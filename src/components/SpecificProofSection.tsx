import { Star, TrendingUp, DollarSign } from "lucide-react";

const SpecificProofSection = () => {
  const proofs = [
    {
      name: "Marcus Silva",
      age: "28 anos",
      profession: "Ex-vendedor",
      result: "R$ 47.300",
      time: "em 90 dias",
      story: "Estava desempregado há 6 meses. Hoje tenho 8 clientes fixos pagando R$ 5.900/mês cada um por automações.",
      image: "/lovable-uploads/22732725-0bc2-4ccd-b573-a92ce2948430.png"
    },
    {
      name: "Ana Carolina",
      age: "35 anos", 
      profession: "Mãe e Empreendedora",
      result: "R$ 23.800",
      time: "no 1º mês",
      story: "Começou do zero, sem conhecimento técnico. Criou 3 automações para restaurantes da cidade.",
      image: "/lovable-uploads/2b838388-adc5-44a9-9a07-87fa9c7a1c50.png"
    },
    {
      name: "Roberto Mendes",
      age: "42 anos",
      profession: "Contador aposentado",
      result: "R$ 85.600",
      time: "em 4 meses",
      story: "Queria uma renda extra. Hoje trabalha 3h/dia automatizando processos para escritórios contábeis.",
      image: "/lovable-uploads/70cc523a-a30f-4ade-aa97-aafcde8a4d34.png"
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
                <img 
                  src={proof.image} 
                  alt={proof.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-green-400"
                />
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