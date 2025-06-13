import styles from './About.module.css';

const About = () => {
	
	return (
		<section id="about" className={styles.about}>
			<div className={styles.bio}>
				<h1>About Me</h1>
				{/* I'm a Software Engineer specializing in full-stack development, with expertise in Python and modern JavaScript frameworks.
					My experience ranges from blockchain R&D at startups to automating financial processes at large enterprises.
					I thrive in environments that challenge me to bridge technical solutions with business needs. */}
				<p className={styles.bioText}>
					I am a motivated Software Engineer with hands-on experience in automating processes, developing scalable applications, and implementing robust testing frameworks. Having earned my Bachelor of Science in Computer Science from Gonzaga University, I have since built a diverse skill set through work on impactful projects and contract roles. I'm passionate about leveraging my development skills to solve complex problems and improve overall efficiency.
				</p>
				
				<p className={styles.bioText}>
					In my most recent contract at The Standard, I streamlined actuarial processes with Python and enhanced software delivery through CI/CD pipelines with Azure DevOps. I also have experience with blockchain solutions, data reconciliation, and full-stack development in startups and larger organizations alike. Whether working in Python, Java, C++, or exploring cutting-edge frameworks like Hyperledger Fabric, I aim to bring innovation and precision to every project.
				</p>

				<p className={styles.bioText}>
					I’m always eager to expand my expertise. I’m actively seeking new opportunities—whether remote or in the Portland, OR area—where I can contribute to meaningful projects while continuing to grow as an engineer.
				</p>
			</div>
		</section>
	);
};

export default About;