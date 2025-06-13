import styles from './Skils.module.css';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
    const skills = [
		{
			icon: <FaCode className={styles.skillIcon} />,
			title: "Frontend",
			items: ["JavaScript", "HTML/CSS", "React.js"]
		},
		{
			icon: <FaServer className={styles.skillIcon} />,
			title: "Backend",
			items: ["Python", "Java", "Node.js"]
		},
		{
			icon: <FaDatabase className={styles.skillIcon} />,
			title: "Database",
			items: ["SQL", "MongoDB", "PostgreSQL"]
		},
		{
			icon: <FaTools className={styles.skillIcon} />,
			title: "Tools",
			items: ["Docker", "Git", "Azure DevOps"]
		}
	];
    return (
        <div className={styles.skills}>
            <h1>Skills</h1>
            <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillCard}>
                        <div className={styles.skillHeader}>
                            {skill.icon}
                            <h3>{skill.title}</h3>
                        </div>
                        <ul>
                            {skill.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;