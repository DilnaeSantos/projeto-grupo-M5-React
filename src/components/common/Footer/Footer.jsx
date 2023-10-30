import React from "react";
import  "../Footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div>
        <a className="linkfooter" href="/">Página Inicial</a>
        <a className="linkfooter" href="/contato">Contato</a>
      </div> */}
      <div>
        <p className="rodape">&copy; 2023 DiversiArt. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

