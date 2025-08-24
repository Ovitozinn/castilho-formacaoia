import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const ObjectionsFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "\"Mas eu não sei nada de programação, vai dar certo?\"",
      answer: "PERFEITO! 87% dos nossos alunos que mais faturam não sabiam programar. O método foi criado justamente para pessoas COMUNS. Você vai usar ferramentas visuais, drag-and-drop, sem código. É como montar um Lego seguindo instruções."
    },
    {
      question: "\"Não tenho tempo, trabalho o dia todo...\"",
      answer: "Ana Carolina implementou tudo trabalhando só de madrugada (30min/dia). Marcus começou nos fins de semana. O primeiro resultado vem em 2-3 semanas dedicando apenas 1h por dia. Depois que setup está pronto, você trabalha 3-4h por semana."
    },
    {
      question: "\"E se não conseguir clientes?\"",
      answer: "Impossível. Empresas estão DESESPERADAS por automação. Temos uma lista com 247 nichos que precisam de IA AGORA. Além disso, você recebe scripts de vendas testados e aprovados + estratégias para conseguir o primeiro cliente em 7 dias."
    },
    {
      question: "\"Será que ainda dá tempo ou já passou a onda?\"",
      answer: "A onda nem começou ainda! Estamos em 2024 e apenas 3% das empresas brasileiras usam IA. É como a internet em 1995. Quem entrou cedo ficou rico. A diferença é que você AINDA está cedo demais."
    },
    {
      question: "\"É muito caro, não tenho esse dinheiro...\"",
      answer: "Caro é continuar perdendo R$ 15k+ por mês que você poderia estar ganhando. O investimento se paga em 15-20 dias quando você fechar o primeiro cliente. Marcus recuperou o investimento em 12 dias e hoje ganha R$ 47k/mês."
    },
    {
      question: "\"E se for muito complicado pra mim?\"",
      answer: "Por isso temos a GARANTIA CASTILHO: 7 dias para testar tudo. Se achar complicado, devolvemos 100% + você ganha uma mentoria gratuita de R$ 1.997. Sem burocracia, sem perguntas."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-5">
        <div className="text-green-500/20 font-mono text-xs leading-4 whitespace-pre-wrap overflow-hidden">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
              FAQ {Math.random().toString(36).substring(7)} OBJECTION_HANDLER {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-green-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-mono">
              Sei exatamente o que você está pensando...
            </h2>
            <p className="text-xl text-gray-300">
              Estas são as mesmas dúvidas que nossos alunos de R$ 15k+ tinham antes de começar:
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-black/60 border border-green-500/30 rounded-lg backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-green-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="bg-green-600/10 border border-green-500/20 rounded-lg p-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-600/10 border border-green-500/30 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-xl font-bold text-white mb-4">
                🎯 Ainda com dúvidas?
              </p>
              <p className="text-gray-300 mb-6">
                Marcus, Ana e Roberto também tiveram essas mesmas dúvidas. A diferença é que eles <strong className="text-green-400">decidiram tentar</strong>.
              </p>
              <p className="text-lg font-semibold text-green-400">
                Hoje eles faturam R$ 15k+ por mês. E você?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsFAQ;