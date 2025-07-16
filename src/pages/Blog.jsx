import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: '10 Alimentos que Combatem a Ansiedade Naturalmente',
    category: 'Nutrição',
    date: '12 de Julho, 2025',
    excerpt: 'Descubra como sua alimentação pode ser uma poderosa aliada para acalmar a mente e reduzir o estresse.',
    imageText: 'Tigela com nozes, sementes e frutas vermelhas',
  },
  {
    title: 'Mindfulness para Iniciantes: 5 Passos para Começar Hoje',
    category: 'Bem-Estar',
    date: '08 de Julho, 2025',
    excerpt: 'Aprenda a praticar a atenção plena com dicas simples e eficazes para incorporar no seu dia a dia.',
    imageText: 'Pessoa sentada em posição de lótus com os olhos fechados',
  },
  {
    title: 'A Importância do Sono para a Saúde Integral',
    category: 'Saúde',
    date: '03 de Julho, 2025',
    excerpt: 'Entenda como uma boa noite de sono impacta seu humor, sua imunidade e sua capacidade de concentração.',
    imageText: 'Quarto aconchegante com iluminação suave',
  },
];

const Blog = () => {
  const { toast } = useToast();

  const handleReadMore = (title) => {
    toast({
      title: `Ler Post: ${title}`,
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
        <title>Blog - Dicas de Saúde e Bem-Estar | Equilíbrio Vital</title>
        <meta name="description" content="Acompanhe nosso blog para dicas sobre saúde, nutrição, mindfulness e autocuidado. Conteúdo para inspirar um estilo de vida mais equilibrado." />
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
              Nosso <span className="text-brand-green">Blog</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Conhecimento e inspiração para sua jornada de autocuidado.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col card-hover"
                variants={itemVariants}
              >
                <div className="relative h-56">
                  <img  className="w-full h-full object-cover" alt={post.imageText} src="https://images.unsplash.com/photo-1598737129494-69cb30f96a73" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-2 py-1 rounded">{post.category}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex-grow">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button
                    onClick={() => handleReadMore(post.title)}
                    variant="link"
                    className="text-brand-green p-0 self-start hover:text-green-700"
                  >
                    Leia Mais <ArrowRight className="ml-2 h-4 w-4" />
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

export default Blog;