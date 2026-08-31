import { Code2, Palette, Zap, Database } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { icon: <Code2 size={24} />, title: 'Desenvolvimento Frontend', desc: 'React, Vue, Vite, Tailwind CSS' },
    { icon: <Zap size={24} />, title: 'Performance', desc: 'Otimização, SEO, Core Web Vitals' },
    { icon: <Palette size={24} />, title: 'UI/UX Design', desc: 'Figma, Prototipação, Animações CSS' },
    { icon: <Database size={24} />, title: 'Dados & Analytics', desc: 'SQL, Power BI, Modelagem de Dados' },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre <span className="text-gradient">Mim</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text glass-card">
            <p>
              Olá! Me dedico a criar interfaces que não apenas parecem incríveis, 
              mas também oferecem uma experiência de usuário excepcional. Minha jornada no 
              desenvolvimento web começou com a curiosidade de entender como as coisas 
              funcionavam nos bastidores da internet.
            </p>
            <p>
              Possuo formação em <strong>Bacharelado em Ciência e Tecnologia</strong> e em <strong>Engenharia da Computação</strong>, ambos pela Universidade Federal do Maranhão (UFMA). Essa forte base acadêmica e de engenharia me permite resolver problemas complexos com lógica e precisão.
            </p>
            <p>
              Hoje, meu foco principal é construir produtos acessíveis e inclusivos e 
              experiências digitais para uma variedade de clientes. Eu adoro explorar 
              novas tecnologias e estou sempre em busca de aprimorar minhas habilidades.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card glass-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
