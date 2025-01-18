import React, { useState,useEffect } from "react";

import projectsData from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

import styles from "./Projects.module.css";

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}> Projects </h2>
            <div className={styles.projects}>
                    {projects.map((project, id) => {
                        return (
                            <ProjectCard key={id} project={project} />
                        );
                    })}
                
            </div>
    
        
        </section>
    );
};