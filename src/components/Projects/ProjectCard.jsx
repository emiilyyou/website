import React from "react";

import styles from "./ProjectCard.module.css";

import { importImage } from "../../utils/importImage";

// const prokect = props.project = {project}
export const ProjectCard = ({ project }) => {
    const { title, imageSrc, description, 
        skills, source } = project;
    
    // dynamically import image
    const projectImage = importImage(imageSrc);

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={projectImage} alt={title} />
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <ul className={styles.skills}>
                    {skills.map((skill, id) => (
                        <li key={id} className={styles.skill}>
                            <small>{skill}</small>
                        </li>
                    ))}
                </ul>

                <div className={styles.link}>
                    <a href={source} target="_blank" rel="noopener noreferrer" className={styles.linkText}>
                        View Source
                    </a>
                </div>
            </div>
        </div>
    );
};