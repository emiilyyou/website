import React, { useState, useEffect } from "react";

import skillsData from "../../data/skills.json";
import historyData from "../../data/history.json"

import styles from "./Experience.module.css";

import { importImage } from "../../utils/importImage";


export const Experience = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(skillsData);
    }, []);

    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory(historyData);
    }, []);


    return (
        <section className={styles.container} id="experience">
            <div className={styles.blur} />
            <h2 className={styles.title}> EXPERIENCE </h2>
            <div className={styles.content}> 
                <div className={styles.skills}> 
                    {skills.map((skill, id) => {
                        // dynamically import image
                        const skillsImage = importImage(skill.imageSrc); 
                        return (
                            <div key={id} className={styles.skill}> 
                                <div>
                                    <img className={styles.skillImageWrapper}
                                        src={skillsImage} 
                                        alt={skill.title} 
                                    />
                                </div>
                                <p className={styles.skillTitle}> {skill.title} </p>
                                </div>
                        );
                    })}
                </div>
                <ul className={styles.history}> 
                    {history.map((historyItem, id) => {
                        // dynamically import image
                        const historyImage = importImage(historyItem.imageSrc); 
                        return (
                            <li key={id} className={styles.historyCard}>
                                <a href={historyItem.link} className={styles.link}> 
                                    <img 
                                        className={styles.historyImage}
                                        src={historyImage} 
                                        alt={historyItem.organization} 
                                /> </a>
                                
                                <div className={styles.historyDetails}>
                                    <h3> {`${historyItem.role}, 
                                    ${historyItem.organization}`} 
                                    </h3>
                                    <small>{`${historyItem.startDate} - 
                                    ${historyItem.endDate}`} 
                                    </small> 
                                    <p> {`${historyItem.experiences}`}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
        
    );
};