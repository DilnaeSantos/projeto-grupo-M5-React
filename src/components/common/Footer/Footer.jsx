import React from "react";
import S from "../Footer/footer.css";

const Footer = () => {
  return (
    <Footer className={S.Footer}>
      <div>
        <p>© 2023 Códigos do Amanhã. All rights reserved.</p>
      </div>
      <div>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </Footer>
  );
};

export default Footer;
