import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Programs from '@/pages/Programs';
import Testimonials from '@/pages/Testimonials';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';

function App() {
  return (
    <Router>
      <div className="bg-background text-foreground min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/programas" element={<Programs />} />
            <Route path="/depoimentos" element={<Testimonials />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;