import { ExternalLink, Code2 } from 'lucide-react';
import './Projects.css';

const Projects = () => {


  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meus <span className="text-gradient">Projetos</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="featured-dashboard glass-card">
          <div className="dashboard-info">
            <h3 className="text-gradient">Dashboard Estratégico (Power BI)</h3>
            <p>
              Painel interativo em Power BI desenvolvido para fornecer análises de dados avançadas 
              e visualizações que apoiam a tomada de decisões estratégicas em tempo real.
            </p>
            <div className="project-tags">
              <span className="tag">Power BI</span>
              <span className="tag">Data Analytics</span>
              <span className="tag">SQL</span>
            </div>
          </div>
          <div className="dashboard-iframe-wrapper powerbi">
            <div className="browser-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <iframe 
              title="projeto" 
              src="https://app.powerbi.com/view?r=eyJrIjoiMjdmMmQzMDUtNWY1YS00Y2FjLWFjMWItNzM5MTI5NWMyMGU2IiwidCI6IjRlZTgxOGY4LWNiZWUtNGIwMy1iZTAxLWYwYzIxN2E5NGJlYSJ9" 
              frameBorder="0" 
              allowFullScreen={true}>
            </iframe>
          </div>
        </div>

        <div className="featured-dashboard glass-card reversed">
          <div className="dashboard-iframe-wrapper powerbi">
            <div className="browser-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <iframe 
              title="Projeto - Ordens de Serviço" 
              src="https://app.powerbi.com/view?r=eyJrIjoiODMzMDdmOTAtYjk0Yi00ZjY3LWI3NmMtMmVjNjhiODEyNjczIiwidCI6IjRlZTgxOGY4LWNiZWUtNGIwMy1iZTAxLWYwYzIxN2E5NGJlYSJ9" 
              frameBorder="0" 
              allowFullScreen={true}>
            </iframe>
          </div>
          <div className="dashboard-info">
            <h3 className="text-gradient">Dashboard: Ordens de Serviço</h3>
            <p>
              Painel dinâmico focado no acompanhamento e gestão de Ordens de Serviço. 
              Permite monitorar indicadores de performance (KPIs), status de solicitações 
              e garantir eficiência na operação.
            </p>
            <div className="project-tags">
              <span className="tag">Power BI</span>
              <span className="tag">Gestão</span>
              <span className="tag">KPIs</span>
            </div>
          </div>
        </div>

        <div className="featured-dashboard glass-card">
          <div className="dashboard-info">
            <h3 className="text-gradient">App de Gestão de Eventos (Foco)</h3>
            <p>
              Plataforma web completa para gestão de eventos, desenvolvida com React e Vite.
              Oferece uma interface rápida, moderna e interativa, totalmente pensada para a 
              melhor experiência dos usuários e organizadores.
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Vite</span>
              <span className="tag">Frontend</span>
            </div>
          </div>
          <div className="dashboard-iframe-wrapper">
            <div className="browser-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <iframe 
              title="App de Eventos Foco" 
              src="https://site---eventos-foco.raphael-csa23.workers.dev/" 
              frameBorder="0" 
              allowFullScreen={true}>
            </iframe>
          </div>
        </div>

        <div className="featured-dashboard glass-card reversed">
          <div className="dashboard-iframe-wrapper powerbi">
            <div className="browser-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <iframe 
              title="Orçamento Anual - Raphael" 
              src="https://app.powerbi.com/view?r=eyJrIjoiOWE2YmY2ZTAtZTlkYi00NDA2LWEzZTctYmQxOTEyZGNjMWRkIiwidCI6IjRlZTgxOGY4LWNiZWUtNGIwMy1iZTAxLWYwYzIxN2E5NGJlYSJ9" 
              frameBorder="0" 
              allowFullScreen={true}>
            </iframe>
          </div>
          <div className="dashboard-info">
            <h3 className="text-gradient">Dashboard: Orçamento Anual</h3>
            <p>
              Painel para acompanhamento do orçamento anual, proporcionando uma visão clara de receitas, 
              despesas e metas financeiras ao longo do ano.
            </p>
            <div className="project-tags">
              <span className="tag">Power BI</span>
              <span className="tag">Finanças</span>
              <span className="tag">Orçamento</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Projects;
