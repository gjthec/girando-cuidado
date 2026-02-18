import React, { useState } from 'react';
import { Leaf, Wind, Heart, Menu, X, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SERVICES, PROTOCOLS, PACKAGES, NAV_LINKS } from './constants';
import { Gender, ServiceCategory } from './types';

// --- Sub-components for cleaner App.tsx ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-brand-beige/90 backdrop-blur-sm border-b border-brand-brown/5 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-28 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="https://i.ibb.co/wFFDRFY5/Gemini-Generated-Image-ldzojhldzojhldzo-removebg-preview.png" 
            alt="Logo Girando Cuidado" 
            className="h-24 w-auto object-contain"
          />
          <div className="flex flex-col justify-center">
            <span className="font-serif text-xl md:text-2xl text-brand-brown font-semibold tracking-wide leading-tight">Girando Cuidado</span>
            <span className="text-[10px] md:text-xs text-brand-brown/70 tracking-widest uppercase">Por Gi Stachowski</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-brand-brown hover:text-brand-green transition-colors">
              {link.label}
            </a>
          ))}
          <Button size="sm" whatsappMessage="Olá! Gostaria de agendar um horário.">Agendar</Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-brown"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="absolute top-28 left-0 w-full bg-brand-beige border-b border-brand-brown/10 p-6 flex flex-col space-y-4 shadow-lg md:hidden animate-fade-in">
            {NAV_LINKS.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-lg text-brand-brown py-2 border-b border-brand-brown/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
               <Button fullWidth whatsappMessage="Olá! Gostaria de agendar um horário.">Agendar agora</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat" />
    {/* Overlay */}
    <div className="absolute inset-0 bg-brand-beige/40 mix-blend-overlay" />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-beige via-brand-beige/50 to-transparent" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
      <h1 className="font-serif text-4xl md:text-6xl text-brand-brown leading-tight mb-6">
        Existe um momento em que <br/>
        <span className="italic">o corpo pede pausa.</span> <br/>
        E a alma também.
      </h1>
      <p className="text-lg md:text-xl text-brand-brown/80 mb-10 font-light max-w-2xl mx-auto">
        Um espaço para pausar, respirar e se reconectar.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <Button size="lg" whatsappMessage="Olá! Gostaria de agendar um horário.">
          Agende agora no WhatsApp
        </Button>
        <Button variant="text" href="#servicos">
          Ver serviços e valores <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-brand-brown/70 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <Heart size={18} className="text-brand-green" />
          <span className="text-sm uppercase tracking-wider">Atendimento personalizado</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Leaf size={18} className="text-brand-green" />
          <span className="text-sm uppercase tracking-wider">Ambiente acolhedor</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Wind size={18} className="text-brand-green" />
          <span className="text-sm uppercase tracking-wider">Cuidado profissional</span>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <Section id="sobre" bgColor="nude">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 relative">
        <div className="aspect-[3/4] rounded-sm overflow-hidden bg-brand-brown/10 shadow-xl max-w-sm mx-auto">
           <img src="https://i.ibb.co/zhm82G73/wmremove-transformed-1.png" alt="Gi Stachowski Massoterapeuta" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-brand-beige p-6 shadow-lg max-w-xs hidden md:block border border-brand-brown/5">
          <p className="font-serif text-brand-brown italic text-lg">"Atendimento com intenção e respeito."</p>
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-brown mb-8">O cuidado que você merece</h2>
        <div className="space-y-6 text-brand-brown/80 leading-relaxed font-light text-lg">
          <p>
            Meu espaço nasceu do desejo de oferecer mais do que uma massagem — oferecer cuidado verdadeiro. Aqui, cada detalhe foi pensado para que você se sinta acolhido, seguro e em paz.
          </p>
          <p>
            Acredito no poder do toque como forma de cura, reconexão e equilíbrio. Quando o corpo relaxa, a mente desacelera. Quando a tensão se dissolve, a energia volta a fluir.
          </p>
          <p>
            Cada atendimento é único, porque cada história é única. Eu escuto, observo e cuido com atenção, respeito e intenção.
          </p>
          <p className="font-medium text-brand-brown">
            Porque você merece esse tempo. Você merece esse cuidado.
          </p>
        </div>
        <div className="mt-8">
           <Button variant="outline" whatsappMessage="Olá Gi! Gostaria de agendar um horário.">Quero agendar</Button>
        </div>
      </div>
    </div>
  </Section>
);

const ServiceCard: React.FC<{ item: typeof SERVICES[0] }> = ({ item }) => {
  const isUnisex = !!item.price.single;
  
  return (
    <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-brand-brown/5 flex flex-col h-full">
      <h3 className="font-serif text-xl text-brand-brown mb-2">{item.name}</h3>
      <div className="w-10 h-0.5 bg-brand-green/30 mb-4"></div>
      
      <div className="mt-auto space-y-3">
        {isUnisex ? (
           <div className="flex justify-between items-center text-brand-brown/80">
             <span>Sessão única</span>
             <span className="font-semibold text-brand-greenDark">R$ {item.price.single},00</span>
           </div>
        ) : (
          <>
            <div className="flex justify-between items-center text-brand-brown/80 text-sm">
              <span>Feminina</span>
              <span className="font-semibold text-brand-brown">R$ {item.price[Gender.FEMALE]},00</span>
            </div>
            <div className="flex justify-between items-center text-brand-brown/80 text-sm">
              <span>Masculina</span>
              <span className="font-semibold text-brand-brown">R$ {item.price[Gender.MALE]},00</span>
            </div>
          </>
        )}
        
        <Button 
          variant="outline" 
          size="sm" 
          fullWidth 
          className="mt-4 text-xs border-brand-green text-brand-green hover:bg-brand-green"
          whatsappMessage={`Olá! Quero agendar: ${item.name}`}
        >
          Agendar
        </Button>
      </div>
    </div>
  );
};

const Services = () => (
  <Section id="servicos">
    <div className="text-center mb-16">
      <h2 className="font-serif text-3xl md:text-4xl text-brand-brown mb-4">Serviços & Técnicas</h2>
      <p className="text-brand-brown/60 max-w-2xl mx-auto">Técnicas manuais para relaxamento, alívio de dores e equilíbrio energético.</p>
    </div>

    {/* Essential */}
    <div className="mb-12">
      <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-brand-green mb-6 text-center">Técnicas Essenciais</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.filter(s => s.category === ServiceCategory.ESSENTIAL).map(s => (
          <ServiceCard key={s.id} item={s} />
        ))}
      </div>
    </div>

    {/* Specialized */}
    <div className="mb-12">
      <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-brand-green mb-6 text-center">Técnicas Especializadas</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.filter(s => s.category === ServiceCategory.SPECIALIZED).map(s => (
          <ServiceCard key={s.id} item={s} />
        ))}
      </div>
    </div>

    {/* Energy */}
    <div>
      <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-brand-green mb-6 text-center">Terapias Energéticas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {SERVICES.filter(s => s.category === ServiceCategory.ENERGY).map(s => (
          <ServiceCard key={s.id} item={s} />
        ))}
      </div>
    </div>
  </Section>
);

const Protocols = () => (
  <Section id="protocolos" bgColor="nude">
    <div className="text-center mb-12">
      <span className="inline-block py-1 px-3 border border-brand-brown/20 rounded-full text-xs uppercase tracking-widest text-brand-brown mb-4">Experiência Premium</span>
      <h2 className="font-serif text-3xl md:text-4xl text-brand-brown">Protocolos Exclusivos</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {PROTOCOLS.map(protocol => (
        <div key={protocol.id} className="bg-brand-beige p-8 rounded-sm shadow-md border-t-4 border-brand-green relative hover:-translate-y-1 transition-transform duration-300">
           <h3 className="font-serif text-2xl text-brand-brown mb-2">{protocol.name}</h3>
           <p className="text-brand-brown/60 italic text-sm mb-6">{protocol.composition}</p>
           
           <div className="mb-8">
             <p className="text-brand-brown font-light leading-relaxed">
               <Sparkles size={16} className="inline mr-2 text-brand-gold" />
               {protocol.benefit}
             </p>
           </div>

           <div className="mt-auto">
             <div className="text-3xl font-serif text-brand-greenDark mb-6">
               R$ {protocol.price},00
             </div>
             <Button 
               fullWidth 
               whatsappMessage={`Olá! Quero agendar o protocolo: ${protocol.name}`}
             >
               Agendar Protocolo
             </Button>
           </div>
        </div>
      ))}
    </div>
  </Section>
);

const Packages = () => {
  const [activeTab, setActiveTab] = useState<'essencial' | 'especial'>('essencial');
  const [gender, setGender] = useState<Gender>(Gender.FEMALE);

  const currentPackages = PACKAGES.filter(p => {
    const isCatMatch = activeTab === 'essencial' 
      ? p.category === ServiceCategory.ESSENTIAL 
      : p.category === ServiceCategory.SPECIALIZED;
    const isGenderMatch = p.gender === gender;
    return isCatMatch && isGenderMatch;
  });

  return (
    <Section id="pacotes">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-brown mb-4">Pacotes de Sessões</h2>
        <p className="text-brand-brown/60">Compromisso com o seu bem-estar. Mais economia, mais cuidado.</p>
      </div>

      {/* Controls */}
      <div className="max-w-xl mx-auto mb-10 space-y-6">
        {/* Category Tabs */}
        <div className="flex justify-center border-b border-brand-brown/10">
          <button 
            onClick={() => setActiveTab('essencial')}
            className={`pb-3 px-6 text-sm uppercase tracking-wide transition-colors ${activeTab === 'essencial' ? 'border-b-2 border-brand-green text-brand-brown font-semibold' : 'text-brand-brown/50 hover:text-brand-brown'}`}
          >
            Técnicas Essenciais
          </button>
          <button 
            onClick={() => setActiveTab('especial')}
            className={`pb-3 px-6 text-sm uppercase tracking-wide transition-colors ${activeTab === 'especial' ? 'border-b-2 border-brand-green text-brand-brown font-semibold' : 'text-brand-brown/50 hover:text-brand-brown'}`}
          >
            Técnicas Especializadas
          </button>
        </div>

        {/* Gender Toggle */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setGender(Gender.FEMALE)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${gender === Gender.FEMALE ? 'bg-brand-brown text-white shadow-md' : 'bg-brand-nude text-brand-brown/70 hover:bg-brand-brown/10'}`}
          >
            Feminino
          </button>
          <button 
            onClick={() => setGender(Gender.MALE)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${gender === Gender.MALE ? 'bg-brand-brown text-white shadow-md' : 'bg-brand-nude text-brand-brown/70 hover:bg-brand-brown/10'}`}
          >
            Masculino
          </button>
        </div>
      </div>

      {/* Package Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {currentPackages.map((pkg) => (
          <React.Fragment key={pkg.id}>
            {pkg.tiers.map((tier) => (
              <div key={tier.sessions} className="bg-brand-nude/50 p-6 rounded-sm border border-brand-brown/5 hover:border-brand-green/30 transition-colors flex justify-between items-center group">
                 <div>
                   <h4 className="font-serif text-xl text-brand-brown mb-1">{tier.sessions} Sessões</h4>
                   <div className="flex items-center gap-2 text-sm">
                      <span className="line-through text-brand-brown/40">R$ {tier.originalPrice}</span>
                      <span className="font-semibold text-brand-brown">R$ {tier.discountedPrice}</span>
                   </div>
                   <span className="text-xs text-brand-green font-medium mt-1 block">
                     Economia de R$ {tier.originalPrice - tier.discountedPrice}
                   </span>
                 </div>
                 
                 <Button 
                   size="sm" 
                   variant="secondary"
                   className="opacity-90 group-hover:opacity-100"
                   whatsappMessage={`Olá! Tenho interesse no pacote de ${tier.sessions} sessões (${activeTab === 'essencial' ? 'Essencial' : 'Especializada'} - ${gender}).`}
                 >
                   Agendar
                 </Button>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
};

const FinalCTA = () => (
  <section className="py-24 bg-brand-brown text-brand-beige text-center px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">Pronto(a) para pausar, respirar <br/> e se reconectar?</h2>
      <Button 
        size="lg" 
        variant="primary" 
        className="bg-brand-beige text-brand-brown hover:bg-white hover:shadow-xl"
        whatsappMessage="Olá! Estou pronto(a) para agendar meu horário."
      >
        Agendar agora no WhatsApp
      </Button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-brown text-brand-beige py-12 border-t border-white/10">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h3 className="font-serif text-2xl mb-2">Girando Cuidado</h3>
      <p className="text-brand-beige/60 text-sm tracking-wider uppercase mb-8">Por Gi Stachowski</p>
      
      <p className="text-brand-beige/80 font-light italic mb-8">
        "Cuidado verdadeiro, com intenção e acolhimento."
      </p>

      <div className="flex justify-center space-x-6 mb-8">
        {NAV_LINKS.map(link => (
          <a key={link.label} href={link.href} className="text-sm text-brand-beige/60 hover:text-white transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <div className="text-xs text-brand-beige/40">
        &copy; {new Date().getFullYear()} Girando Cuidado. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Protocols />
        <Packages />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}