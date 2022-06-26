import { NavLink } from "react-router-dom";
import Logo from "jsx:../../assets/shared/desktop/logo.svg";
import Facebook from "jsx:../../assets/shared/desktop/icon-facebook.svg";
import Twitter from "jsx:../../assets/shared/desktop/icon-twitter.svg";
import Instagram from "jsx:../../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <NavLink to="/" className="logo" aria-label="Return to top of home page.">
          <Logo />
        </NavLink>
        <div class="footer__wrapper--icons">
          <a href="#" className="footer__icon" aria-label="Visit audiophile's facebook.">
            <Facebook />
          </a>
          <a href="#" className="footer__icon" aria-label="Visit audiophile's twitter.">
            <Twitter />
          </a>
          <a href="#" className="footer__icon" aria-label="Visit audiophile's instagram.">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  ); 
}