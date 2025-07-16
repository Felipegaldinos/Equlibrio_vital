import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Programa Detox 21 Dias',
    description: 'Um programa completo com plano alimentar, sucos funcionais e acompanhamento para desintoxicar o corpo e renovar as energias.',
    imageText: 'Copo de suco verde detox com ingredientes ao fundo',
  },
  {
    title: 'Workshop de Gestão de Estresse',
    description: 'Aprenda técnicas de mindfulness, respiração e organização para lidar com o estresse do dia a dia e encontrar mais calma.',
    imageText: 'Pessoa praticando meditação em um ambiente de trabalho',
  },
  {
    title: 'Imersão de Autocuidado',
    description: 'Um final de semana de imersão com yoga, meditação, alimentação consciente e terapias para uma profunda conexão com seu eu interior.',
    imageText: 'Grupo de pessoas relaxando em um retiro na natureza',
  },
];

const Programs = () => {
  const { toast } = useToast();

  const handleKnowMore = (title) => {
    toast({
      title: `Saber mais sobre: ${title}`,
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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Helmet>
        <title>Programas e Workshops - Equilíbrio Vital</title>
        <meta name="description" content="Participe de nossos programas e workshops exclusivos. Oferecemos programas de detox, gestão de estresse, imersões de autocuidado e muito mais." />
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
              Programas <span className="text-brand-green">Especiais</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Experiências transformadoras para aprofundar sua jornada de bem-estar.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="bg-brand-light-blue rounded-lg overflow-hidden shadow-lg flex flex-col card-hover"
                variants={itemVariants}
              >
                <div className="relative h-56">
                  <img  className="w-full h-full object-cover" alt={program.imageText} src="https://images.unsplash.com/photo-1598737129494-69cb30f96a73" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex-grow">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <Button
                    onClick={() => handleKnowMore(program.title)}
                    className="bg-brand-terracotta hover-bg-brand-terracotta-dark text-white font-bold mt-auto self-start rounded-full"
                  >
                    Saber Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Programs;