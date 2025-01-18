import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}> 
            <div className={styles.content}>
                <h1 className={styles.title}> Hi! I'm Emily ✧･ﾟ</h1>
                <p className={styles.description}> I'm a software engineer who loves leveraging technology to formulate human-centered solutions 
                    that speak to the needs of diverse communities. 
                </p> 
                <small className={styles.header}> Building applications @ <a href="https://club.hoagie.io/"> Hoagie Club </a>
                and <a href="https://www.hackprinceton.com/"> HackPrinceton </a></small>
            </div>
            <img src="assets/hero/miffy.svg" className={styles.miffy} alt="miffy" />
            <div className={styles.blur} />
    
        </section>
    );
};