import React from "react";

import styles from "./About.module.css";


export const About = () => {
    return (
        <section className={styles.container} id="about"> 
            <h2 className={styles.title}> ABOUT</h2>
            <div className={styles.content}>
                <img src="assets/about/profilepic.png" className={styles.profilePic} alt="profile picture" />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p> I'm Emily, a student at Princeton University studying Computer Science with a minor in Finance.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p> Growing up, I’ve always enjoyed creating and designing products to express my creativity. From collecting
                            stickers and stationery to making countless friendship bracelets, I sought new ways to uplift myself and 
                            others. </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p> Eventually, I recognized the power of harnessing my experiences to continue transforming experiences for others.
                            Shifting away from tangible products, I discovered software engineering & design as a pathway to 
                            continue using my creativity and problem-solving skills to create solutions for different communities. By honing in on people's needs, I aim 
                            to offer innovative solutions that improve and brings widespread joy to others.
                        </p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    );
};