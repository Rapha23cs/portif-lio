import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer glass">
      <div className="container footer-container">
        <div className="footer-logo">
          <span className="text-gradient">Raphael</span> Sá
        </div>
        
        <p className="footer-copy">
          &copy; {year} Raphael Sá. Todos os direitos reservados.
        </p>
        
        <div className="footer-made-with">
          React e Vite
        </div>
      </div>
    </footer>
  );
};

export default Footer;
