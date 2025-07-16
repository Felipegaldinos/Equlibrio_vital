import React from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (socialMedia) => {
    toast({
      title: `Link para ${socialMedia}`,
      description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  return (
    <footer className="bg-brand-light-green text-gray-600 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-brand-green" />
              <span className="text-2xl font-bold text-gray-800">
                Equilíbrio <span className="text-brand-green">Vital</span>
              </span>
            </NavLink>
            <p className="text-sm">Cuidando da sua saúde integral com acolhimento e profissionalismo.</p>
            <div className="flex space-x-4 pt-2">
              <button onClick={() => handleSocialClick('Facebook')} className="text-gray-500 hover:text-brand-green transition-colors"><Facebook size={24} /></button>
              <button onClick={() => handleSocialClick('Instagram')} className="text-gray-500 hover:text-brand-green transition-colors"><Instagram size={24} /></button>
              <button onClick={() => handleSocialClick('Linkedin')} className="text-gray-500 hover:text-brand-green transition-colors"><Linkedin size={24} /></button>
            </div>
          </div>

          <div>
            <p className="font-bold text-gray-800 tracking-wider uppercase mb-4">Navegação</p>
            <ul className="space-y-2">
              <li><NavLink to="/sobre" className="hover:text-brand-green transition-colors">Sobre Nós</NavLink></li>
              <li><NavLink to="/servicos" className="hover:text-brand-green transition-colors">Serviços</NavLink></li>
              <li><NavLink to="/programas" className="hover:text-brand-green transition-colors">Programas</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-brand-green transition-colors">Blog</NavLink></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-800 tracking-wider uppercase mb-4">Contato</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start"><MapPin size={16} className="mr-3 mt-1 text-brand-green flex-shrink-0" /><span>Rua da Saúde, 456, Bairro Bem-Estar<br/>Sua Cidade, UF, 12345-678</span></li>
              <li className="flex items-center"><Phone size={16} className="mr-3 text-brand-green" /><span>(11) 91234-5678</span></li>
              <li className="flex items-center"><Mail size={16} className="mr-3 text-brand-green" /><span>contato@equilibriovital.com</span></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-800 tracking-wider uppercase mb-4">Horário de Atendimento</p>
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold">Seg - Sex:</span> 08:00 - 20:00</li>
              <li><span className="font-semibold">Sábados:</span> 08:00 - 13:00</li>
              <li><span className="font-semibold">Domingos:</span> Fechado</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; {currentYear} Equilíbrio Vital. Todos os direitos reservados.</p>
          <p className="mt-1 text-gray-400">Desenvolvido com ❤️ por Hostinger Horizons</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;