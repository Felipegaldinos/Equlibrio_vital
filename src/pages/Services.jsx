import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Apple, HeartPulse, Brain, Bath as Spa, Wind } from 'lucide-react';

const services = [
  {
    icon: Apple,
    title: 'Acompanhamento Nutricional',
    description: 'Planos alimentares personalizados para reeducação alimentar, emagrecimento, performance esportiva e saúde intestinal.',
    imageText: 'Prato de comida saudável e colorido',
  },
  {
    icon: HeartPulse,
    title: 'Fisioterapia Integrativa',
    description: 'Tratamento e prevenção de lesões, reabilitação postural e alívio de dores crônicas com uma abordagem holística.',
    imageText: 'Fisioterapeuta aplicando técnica em paciente',
  },
  {
    icon: Brain,
    title: 'Psicologia e Saúde Mental',
    description: 'Psicoterapia para ansiedade, estresse, autoconhecimento e desenvolvimento de inteligência emocional.',
    imageText: 'Pessoa conversando com psicóloga em um consultório acolhedor',
  },
  {
    icon: Spa,
    title: 'Terapias Holísticas',
    description: 'Reiki, acupuntura, aromaterapia e outras técnicas para reequilibrar suas energias e promover relaxamento profundo.',
    imageText: 'Mãos aplicando Reiki sobre uma pessoa',
  },
  {
    icon: Wind,
    title: 'Aulas de Yoga e Meditação',
    description: 'Práticas em grupo ou individuais para todos os níveis, focadas em reduzir o estresse, aumentar a flexibilidade e a paz interior.',
    imageText: 'Grupo de pessoas meditando em uma sala iluminada',
  },
];

const Services = () => {
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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Helmet>
        <title>Serviços - Equilíbrio Vital</title>
        <meta name="description" content="Explore nossos serviços de saúde integral: nutrição, fisioterapia, psicologia, terapias holísticas, yoga, meditação e mais. Cuidado completo para você." />
      </Helmet>
      <div className="bg-brand-light-green py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800">
              Nossos <span className="text-brand-green">Serviços</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Um leque de possibilidades para cuidar de cada aspecto do seu ser.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 text-center card-hover"
                variants={itemVariants}
              >
                <div className="mb-4">
                  <service.icon className="h-16 w-16 mx-auto text-brand-terracotta" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;