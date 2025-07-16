import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Formulário Enviado!",
      description: "Agradecemos seu contato. Responderemos em breve. 🚀",
    });
    e.target.reset();
  };

  const handleWhatsAppClick = () => {
    toast({
      title: "Abrir WhatsApp",
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contato - Equilíbrio Vital</title>
        <meta name="description" content="Entre em contato com a Equilíbrio Vital. Agende sua consulta, tire suas dúvidas ou venha nos visitar. Estamos prontos para te acolher." />
      </Helmet>
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
              Fale <span className="text-brand-green">Conosco</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Sua jornada de bem-estar começa com um simples olá.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-brand-light-green p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Mande uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input type="text" id="name" name="name" required className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-800 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-800 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea id="message" name="message" rows="5" required className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-800 focus:ring-2 focus:ring-brand-green focus:border-brand-green transition"></textarea>
                </div>
                <Button type="submit" className="w-full bg-brand-green hover-bg-brand-green-dark text-white font-bold text-lg py-3 rounded-full">
                  Enviar Mensagem <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Nossos Contatos</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-8 w-8 text-brand-green mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Endereço</p>
                      <p className="text-gray-600">Rua da Saúde, 456, Bairro Bem-Estar, Sua Cidade - UF</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-8 w-8 text-brand-green mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Telefone</p>
                      <p className="text-gray-600">(11) 91234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-8 w-8 text-brand-green mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Email</p>
                      <p className="text-gray-600">contato@equilibriovital.com</p>
                    </div>
                  </div>
                </div>
                <Button onClick={handleWhatsAppClick} className="mt-8 w-full bg-brand-terracotta hover-bg-brand-terracotta-dark text-white font-bold text-lg py-3 rounded-full">
                  Fale pelo WhatsApp <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Localização</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-46.639,-23.551,-46.633,-23.547&layer=mapnik"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa da Equilíbrio Vital"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;