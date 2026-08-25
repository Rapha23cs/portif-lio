import { ArrowRight, Code2, User, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting text-gradient">Olá, eu sou</p>
          <h1 className="hero-title">Raphael Sá</h1>
          <h2 className="hero-subtitle">Engenheiro da Computação</h2>
          <p className="hero-description">
            Crio aplicações modernas, responsivas e de alta performance, 
            combinando design elegante com código limpo e eficiente.
          </p>
          
          <div className="hero-actions delay-200 animate-fade-in">
            <a href="#projects" className="btn btn-primary">
              Ver Projetos <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Entrar em Contato
            </a>
          </div>

          <div className="hero-socials delay-300 animate-fade-in">
            <a href="https://github.com/Rapha23cs" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Code2 size={24} />
            </a>
            <a href="https://www.linkedin.com/in/raphael-camara-s%C3%A1-929749275/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <User size={24} />
            </a>
            <a href="mailto:raphael.csa23@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual delay-200 animate-fade-in">
          {/* An abstract shape / element to give a rich aesthetic instead of a plain photo */}
          <div className="glow-orb"></div>
          <div className="glass-card visual-card">
            <div className="code-snippet">
              <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
              <br/>
              &nbsp;&nbsp;<span className="code-property">name:</span> <span className="code-string">'Raphael Sá'</span>,
              <br/>
              &nbsp;&nbsp;<span className="code-property">skills:</span> [<span className="code-string">'React'</span>, <span className="code-string">'Vite'</span>, <span className="code-string">'CSS'</span>],
              <br/>
              &nbsp;&nbsp;<span className="code-property">role:</span> <span className="code-string">'Engenheiro da Computação'</span>
              <br/>
              {'}'};
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
