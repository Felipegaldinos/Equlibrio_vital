import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, HeartPulse, BrainCircuit, Apple } from 'lucide-react';

const Home = () => {
  const { toast } = useToast();

  const handleScheduleClick = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Helmet>
        <title>Equilíbrio Vital - Encontre sua harmonia e bem-estar</title>
        <meta name="description" content="Na Equilíbrio Vital, cuidamos da sua saúde de forma integral. Conheça nossos serviços de nutrição, terapias, e programas de qualidade de vida. Agende sua consulta!" />
      </Helmet>
      <div className="overflow-x-hidden">
        <section className="relative h-[85vh] min-h-[600px] flex items-center bg-brand-light-green">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-8">
            <motion.div
              className="relative z-10 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-gray-800 text-shadow-soft">
                Encontre seu <span className="text-brand-green">Equilíbrio</span>. Renove sua <span className="text-brand-green">Vida</span>.
              </h1>
              <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 mb-8">
                Cuidar de si é o primeiro passo para uma vida plena e feliz. Na Equilíbrio Vital, oferecemos um caminho de saúde integral para corpo, mente e alma.
              </p>
              <Button onClick={handleScheduleClick} size="lg" className="bg-brand-green hover-bg-brand-green-dark text-white font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105">
                Agende uma Sessão <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img  className="rounded-full shadow-2xl animate-float" alt="Mulher meditando em um ambiente tranquilo e natural" src="https://images.unsplash.com/photo-1643184012410-0d0c9070e575" />
            </motion.div>
          </div>
        </section>

        <motion.section
          className="py-16 md:py-24 bg-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Cuidado Integral para uma Vida <span className="text-brand-green">Plena</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-gray-600 text-lg mb-12">
              Nossa abordagem multidisciplinar integra o melhor de diversas áreas da saúde para promover seu bem-estar completo.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="bg-brand-light-blue p-8 rounded-lg shadow-sm card-hover">
                <HeartPulse className="h-12 w-12 mx-auto text-brand-terracotta mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Saúde do Corpo</h3>
                <p className="text-gray-600">Serviços de fisioterapia e atividades físicas para um corpo forte e sem dores.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-brand-light-blue p-8 rounded-lg shadow-sm card-hover">
                <BrainCircuit className="h-12 w-12 mx-auto text-brand-terracotta mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Equilíbrio da Mente</h3>
                <p className="text-gray-600">Terapias, psicologia e práticas de mindfulness para uma mente serena e focada.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-brand-light-blue p-8 rounded-lg shadow-sm card-hover">
                <Apple className="h-12 w-12 mx-auto text-brand-terracotta mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Nutrição Consciente</h3>
                <p className="text-gray-600">Acompanhamento nutricional para revitalizar seu corpo de dentro para fora.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="py-16 md:py-24 bg-brand-light-green">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img  className="rounded-lg shadow-xl w-full h-auto object-cover" alt="Equipe de profissionais de saúde sorrindo" src="https://images.unsplash.com/photo-1479800800845-03752b6188fa" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Conheça a <span className="text-brand-green">Equilíbrio Vital</span></h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Somos um coletivo de profissionais apaixonados por saúde e bem-estar, unidos por uma missão: guiar você em sua jornada de autoconhecimento e transformação. Acreditamos que a verdadeira saúde nasce da harmonia entre corpo, mente e espírito.
                </p>
                <Button asChild className="bg-brand-terracotta hover-bg-brand-terracotta-dark text-white font-bold rounded-full transition-transform transform hover:scale-105">
                  <a href="/sobre">Nossa História <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;