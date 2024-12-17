import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { LuArrowUpRight } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi"; 
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.navbar}>
            <a href="/">
                <div className={styles.logo}>Hivelancers</div>
            </a>
            <button className={styles.hamburger} onClick={toggleMenu}>
                <GiHamburgerMenu />
            </button>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ""}`}>
                <ul className={styles.navItems}>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Processos</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">Timer</a></li>
                    <li><a href="#">Avaliações</a></li>
                    <li><a href="#">Vantagens</a></li>
                    <li><a href="#">Suporte</a></li>
                    
                <div className={styles.buttonsMobile}>
                    <a href="https://hivelancers.vercel.app/Signup">
                        <button className={styles.btnSignup}>
                            Cadastrar <LuArrowUpRight />
                        </button>
                    </a>
                    <a href="https://hivelancers.vercel.app/Login">
                        <button className={styles.btnLogin}>Entrar</button>
                    </a>
                </div>
                </ul>

           
            </nav>
            <div className={styles.buttons}>
                <a href="https://hivelancers.vercel.app/Login">
                    <button className={styles.btnLogin}>Entrar</button>
                </a>
                <a href="https://hivelancers.vercel.app/Signup">
                    <button className={styles.btnSignup}>
                        Cadastrar <LuArrowUpRight />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
