import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact"> 
            <div className={styles.text}>
                <div className={styles.header}>
                    <h1> Thanks for stopping by! </h1>
                    <h2> Contact Me!
                        <ul className={styles.links}>
                            <li className={styles.link}> <a href="mailto:ey9445@princeton.edu" >Email</a></li>
                            <li className={styles.link} ><a href="https://www.linkedin.com/in/emilyyou220/" >LinkedIn</a></li>
                        </ul>
                    </h2>
                </div>
                <p> Let's chat about coding, design, food, cdramas, or music ౨ৎ! </p>
                <small> &copy; Made by Emily ౨ৎ 2024</small>
            </div>
        </footer>
    );
}