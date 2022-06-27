import { NavLink } from "react-router-dom";
import Logo from "jsx:../../assets/shared/desktop/logo.svg";
import Facebook from "jsx:../../assets/shared/desktop/icon-facebook.svg";
import Twitter from "jsx:../../assets/shared/desktop/icon-twitter.svg";
import Instagram from "jsx:../../assets/shared/desktop/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <Logo className="logo" />
        <ul className="footer__list">
          <li className="footer__item">
            <NavLink to="/" className="footer__link link">
              Home
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/headphones" className="footer__link link">
              Headphones
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/speakers" className="footer__link link">
              Speakers
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/earphones" className="footer__link link">
              Earphones
            </NavLink>
          </li>
        </ul>
        <p className="footer__text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
          and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
          visit our demo facility - we’re open 7 days a week.
        </p>
        <p className="copyright">
          Copyright 2021. All Rights Reserved
        </p>
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
