import React, { useState } from "react";

import styles from "./Navbar.module.css";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Static paths to the public folder
    const menuIcon = "/website/assets/nav/menuIcon.png";
    const closeMenu = "/website/assets/nav/closeIcon.png";
    
    return (
        <nav className={styles.navbar}> 
            <a className={styles.title} href="/"> emily </a>
            <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen ? closeMenu : menuIcon} alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about">about</a>
                </li>
                 <li>
                    <a href="#experience">experience</a>
                </li>
                <li>
                    <a href="#projects">projects</a>
                </li>
                <li>
                    <a href="#contact">contact</a>
                </li>
            </ul>
            </div>
        </nav>
    );
};
