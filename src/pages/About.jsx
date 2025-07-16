import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Gem, Users } from 'lucide-react';

const teamMembers = [
  { name: 'Dr. Ana Clara', specialty: 'Nutricionista', imageText: 'Retrato da Dr. Ana Clara, nutricionista' },
  { name: 'Carlos Mendes', specialty: 'Fisioterapeuta', imageText: 'Retrato de Carlos Mendes, fisioterapeuta' },
  { name: 'Sofia Ribeiro', specialty: 'Psicóloga', imageText: 'Retrato da Sofia Ribeiro, psicóloga' },
  { name: 'Lia Bernardes', specialty: 'Terapeuta Holística', imageText: 'Retrato da Lia Bernardes, terapeuta holística' },
  { name: 'Marcos Andrade', specialty: 'Instrutor de Yoga', imageText: 'Retrato de Marcos Andrade, instrutor de yoga' },
  { name: 'Juliana Paes', specialty: 'Especialista em Mindfulness', imageText: 'Retrato da Juliana Paes, especialista em mindfulness' },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Sobre Nós - Equilíbrio Vital</title>
        <meta name="description" content="Conheça a história, filosofia e a equipe multidisciplinar da Equilíbrio Vital. Descubra nossa paixão por promover saúde e bem-estar." />
      </Helmet>
      <div className="bg-white text-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Nossa Essência: Cuidar de <span className="text-brand-green">Você</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Uma jornada que começou com o desejo de integrar saúde, ciência e acolhimento.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <img  className="rounded-lg shadow-xl w-full h-auto object-cover" alt="Ambiente interno da clínica, calmo e com plantas" src="https://images.unsplash.com/photo-1701826258265-9cc06806f237" />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-green">Nossa História</h2>
              <p className="text-gray-600 leading-relaxed">
                A Equilíbrio Vital nasceu da união de profissionais que compartilham uma visão comum: a saúde deve ser tratada de forma integral, considerando as conexões entre corpo, mente e emoções. Fundada em 2018, nossa clínica foi projetada para ser um refúgio urbano, um lugar onde a ciência moderna encontra a sabedoria de práticas milenares para promover o bem-estar genuíno.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nosso propósito é oferecer um atendimento humanizado e personalizado, criando planos de cuidado que respeitem a individualidade de cada pessoa. Acreditamos que, com as ferramentas certas e o apoio adequado, todos podem encontrar seu próprio equilíbrio vital.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="bg-brand-light-blue p-8 rounded-lg">
              <Target className="h-12 w-12 mx-auto text-brand-terracotta mb-4" />
              <h3 className="text-2xl font-bold mb-2">Missão</h3>
              <p className="text-gray-600">Oferecer cuidado em saúde de forma integrada e humanizada, capacitando nossos clientes a viverem com mais saúde, consciência e equilíbrio.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-brand-light-blue p-8 rounded-lg">
              <Eye className="h-12 w-12 mx-auto text-brand-terracotta mb-4" />
              <h3 className="text-2xl font-bold mb-2">Visão</h3>
              <p className="text-gray-600">Ser um centro de referência em saúde e bem-estar integral, reconhecido pela excelência, inovação e pelo impacto positivo na vida das pessoas.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-brand-light-blue p-8 rounded-lg md:col-span-2 lg:col-span-1">
              <Gem className="h-12 w-12 mx-auto text-brand-terracotta mb-4" />
              <h3 className="text-2xl font-bold mb-2">Valores</h3>
              <p className="text-gray-600">Acolhimento, Ética, Empatia, Excelência, Visão Integral e Respeito à Individualidade.</p>
            </motion.div>
          </motion.div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Nossa <span className="text-brand-green">Equipe Multidisciplinar</span>
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg text-center overflow-hidden shadow-md card-hover"
                  variants={itemVariants}
                >
                  <div className="relative h-64">
                    <img  className="w-full h-full object-cover object-top" alt={member.imageText} src="https://images.unsplash.com/photo-1625581652944-2f297562baa5" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-brand-green font-semibold">{member.specialty}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;