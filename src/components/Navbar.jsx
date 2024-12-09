import React from "react";
import styles from "./Navbar.module.css"


const Navbar = () => { 
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>Hivelancers</div>
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
                <a href="https://www.google.com"><button className={styles.btnLogin}>Entrar</button></a>
                <a href="https://www.google.com"><button className={styles.btnSignup}>Cadastrar</button></a>
            </div>
        </div>
    )
}

export default Navbar;