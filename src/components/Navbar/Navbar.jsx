import React from "react";
import styles from "./Navbar.module.css"
import { LuArrowUpRight } from "react-icons/lu";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => { 
    AOS.init();
    return (
        <div className={styles.navbar}>
            <div  className={styles.logo}>Hivelancers</div>
            <nav className={styles.nav}>
                <ul className={styles.navItems}>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Processos</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">Principais Áreas</a></li>
                    <li><a href="#">Cases de Sucesso</a></li>
                    <li><a href="#">Avaliações</a></li>
                    <li><a href="#">Vantagens</a></li>
                    <li><a href="#">Suporte</a></li>
                </ul>
            </nav>
            <div className={styles.buttons}>
                <a href="https://hivelancers.vercel.app/Login"><button className={styles.btnLogin}>Entrar</button></a>
                <a href="https://hivelancers.vercel.app/Signup"><button className={styles.btnSignup}>Cadastrar <LuArrowUpRight /></button></a>
            </div>
        </div>
    )
}

export default Navbar;