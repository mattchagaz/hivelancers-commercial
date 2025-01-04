import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { LuArrowUpRight } from "react-icons/lu";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false); 

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); 
      } else {
        setScrolling(false); 
      }
    };

      //mattchgz xd ddxdxdxdxd
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.navbar} ${scrolling ? styles.navbarScrolled : ""}`}>
      <a href="/">
        <div className={`${styles.logo} ${scrolling ? styles.logoScrolled : ""}`}>Hivelancers</div>
      </a>
      <button
        className={`${styles.menuMobileIcons} ${isMenuOpen ? styles.menuMobileIconsActive : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <IoClose /> : <CgMenuRight />}
      </button>
      <nav data-aos="fade-down" data-aos-duration="1200" className={`${styles.nav} ${isMenuOpen ? styles.navActive : ""}`}>
        <ul className={styles.navItems}>
          <li><a href="#Home">Início</a></li>
          <li><a href="#About">Sobre nós</a></li>
          <li><a href="#Process">Processos</a></li>
          <li><a href="#Categories">Categorias</a></li>
          <li><a href="#Timer">Lançamento</a></li>
          <li><a href="#Reviews">Avaliações</a></li>
          <li><a href="#Advantages">Vantagens</a></li>
          <li><a href="#Support">Suporte</a></li>
          <div className={styles.buttonsMobile}>
            <a href="https://app.hivelancers.com/Signup" target="_blank">
              <button className={styles.btnSignup}>
                Cadastrar <LuArrowUpRight />
              </button>
            </a>
            <a href="https://app.hivelancers.com/Login" target="_blank">
              <button className={styles.btnLogin}>Entrar</button>
            </a>
          </div>
        </ul>
      </nav>
      <div className={`${styles.buttons} ${scrolling ? styles.buttonsScrolled : ""}`}>
        <a href="https://app.hivelancers.com/Login" target="_blank">
          <button className={styles.btnLogin}>Entrar</button>
        </a>
        <a href="https://app.hivelancers.com/Signup" target="_blank">
          <button className={styles.btnSignup}>
            Cadastrar <LuArrowUpRight />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
