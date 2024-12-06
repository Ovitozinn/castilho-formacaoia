import { MessageCircle, Mail, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import CTAButton from "@/components/CTAButton";

const ContactSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-lighter" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">
            Precisa saber mais alguma coisa?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Estamos aqui para tirar todas as suas dúvidas e ajudar você a tomar a melhor decisão
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href="https://wa.me/seu-numero" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-6 rounded-xl hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-300">
                Resposta em até 2 horas
              </p>
            </a>
            
            <a 
              href="mailto:seu-email" 
              className="glass p-6 rounded-xl hover:scale-105 transition-transform"
            >
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p className="text-gray-300">
                Resposta em até 24 horas
              </p>
            </a>
          </div>
          
          <div className="glass p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">
              Envie sua mensagem
            </h3>
            
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Seu nome"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
              <textarea
                placeholder="Sua mensagem"
                rows={4}
                className="w-full rounded-md bg-white/5 border border-white/10 text-white placeholder:text-gray-400 p-3"
              />
              <CTAButton className="w-full">
                Enviar mensagem
                <Send className="w-4 h-4 ml-2" />
              </CTAButton>
            </form>
            
            <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Respondemos em até 24 horas úteis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;