import styles from './projects.module.css';
import ProjectCard from './ProjectCard';
import projectList from './ProjectList.json';
const Projects = () => {
    return (
        <div className={styles.projects} id='projects'>
            <h1>Personal Projects</h1>
            <div className={styles.projectList}>
                {projectList.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
            <h2>More projects coming soon!</h2>
        </div>
    );
}

export default Projects;