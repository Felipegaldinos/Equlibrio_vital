import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Costa',
    role: 'Cliente de Nutrição',
    quote: 'A Equilíbrio Vital mudou minha relação com a comida e com meu corpo. Aprendi a me alimentar com consciência e amor. Sou muito grata!',
    stars: 5,
  },
  {
    name: 'João Pedro',
    role: 'Paciente de Fisioterapia',
    quote: 'Depois de anos com dor nas costas, finalmente encontrei alívio e qualidade de vida. O tratamento foi um divisor de águas para mim.',
    stars: 5,
  },
  {
    name: 'Fernanda Lima',
    role: 'Aluna de Yoga',
    quote: 'As aulas de yoga são meu momento de paz na semana. O ambiente é acolhedor e os instrutores são maravilhosos. Recomendo de olhos fechados!',
    stars: 5,
  },
  {
    name: 'Lucas Almeida',
    role: 'Cliente de Terapia',
    quote: 'O processo terapêutico na Equilíbrio Vital me ajudou a superar a ansiedade e a me conhecer melhor. Profissionais incríveis e muito humanos.',
    stars: 5,
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Helmet>
        <title>Depoimentos - Equilíbrio Vital</title>
        <meta name="description" content="Veja o que nossos clientes dizem sobre a Equilíbrio Vital. Histórias reais de transformação, saúde e bem-estar." />
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
              Histórias que nos <span className="text-brand-green">Inspiram</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Ouvir nossos clientes é nossa maior motivação para continuar.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 flex flex-col"
                variants={itemVariants}
              >
                <Quote className="w-10 h-10 text-brand-terracotta mb-4" />
                <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;