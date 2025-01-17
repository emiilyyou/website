import React from "react";

import styles from "./About.module.css";


export const About = () => {
    return (
        <section className={styles.container} id="about"> 
            <h2 className={styles.title}> About</h2>
            <div className={styles.content}>
                <img src="/assets/about/self.png" className={styles.profilePic} alt="profile picture" />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p> I'm a student at Princeton University studying Computer Science 
                            with a minor in Finance.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p> Growing up, I’ve always expressed my creativity through creation and 
                            design as I frequently arranged stickers on random stationery/objects 
                            around the house and made friendship bracelets. </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p> As I grew older, I shifted my focus from creating tangible products to digital 
                            applications when I recognized the power of leveraging design and creation
                            to bring widespread joy to communities, namely graphic design for my blog Function of Derm 
                            to mitigate the gap between the skin and misinformation or data analysis to convey 
                            market research and data. I soon discovered Software Engineering as a medium in which I 
                            can continue to leverage my design skills to create applications that not only solve problems 
                            but also create a profound impact on communities. </p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    );
};