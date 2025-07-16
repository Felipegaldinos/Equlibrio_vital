import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Programas', path: '/programas' },
  { name: 'Depoimentos', path: '/depoimentos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contato', path: '/contato' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScheduleClick = () => {
    toast({
      title: "Agendamento de Consulta",
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  const linkClass = ({ isActive }) =>
    `relative text-base font-medium transition-colors duration-300 ${
      isActive ? 'text-brand-green' : 'text-gray-600 hover:text-brand-green'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block py-4 text-2xl text-center transition-colors duration-300 ${
      isActive ? 'text-brand-green font-bold' : 'text-gray-700 hover:text-brand-green'
    }`;

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-brand-green" />
            <span className="text-2xl font-bold text-gray-800 tracking-tight">
              Equilíbrio <span className="text-brand-green">Vital</span>
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green"
                        layoutId="underline"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button onClick={handleScheduleClick} className="bg-brand-green hover-bg-brand-green-dark text-white font-bold rounded-full">
              Agende sua Consulta
            </Button>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
          >
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-gray-700 focus:outline-none">
              <X className="h-8 w-8" />
            </button>
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={mobileLinkClass} onClick={toggleMenu}>
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <div className="mt-12">
              <Button onClick={handleScheduleClick} size="lg" className="bg-brand-green hover-bg-brand-green-dark text-white font-bold text-xl rounded-full">
                Agende sua Consulta
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;