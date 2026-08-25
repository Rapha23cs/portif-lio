import { Mail, MapPin, Phone, Code2, User } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Vamos <span className="text-gradient">Conversar</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Informações de Contato</h3>
            <p className="contact-desc">
              Sinta-se à vontade para entrar em contato comigo caso tenha alguma proposta, 
              dúvida ou apenas queira dizer um "olá". Retornarei o mais rápido possível!
            </p>

            <div className="info-items">
              <div className="info-item glass-card">
                <div className="info-icon"><Mail /></div>
                <div>
                  <h4>Email</h4>
                  <p>raphael.csa23@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item glass-card">
                <div className="info-icon"><Phone /></div>
                <div>
                  <h4>Telefone</h4>
                  <p>(98) 98783-8147</p>
                </div>
              </div>
              
              <div className="info-item glass-card">
                <div className="info-icon"><MapPin /></div>
                <div>
                  <h4>Localização</h4>
                  <p>São Luís - MA</p>
                </div>
              </div>

              <a href="https://www.linkedin.com/in/raphael-camara-s%C3%A1-929749275/" target="_blank" rel="noreferrer" className="info-item glass-card link-card">
                <div className="info-icon"><User /></div>
                <div>
                  <h4>LinkedIn</h4>
                  <p>Raphael Sá</p>
                </div>
              </a>
              
              <a href="https://github.com/Rapha23cs" target="_blank" rel="noreferrer" className="info-item glass-card link-card">
                <div className="info-icon"><Code2 /></div>
                <div>
                  <h4>GitHub</h4>
                  <p>Rapha23cs</p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
