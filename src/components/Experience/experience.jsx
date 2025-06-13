const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: "The Standard",
            position: "Junior Software Engineer (Contract)",
            period: "2023 - Present",
            logo: "./logos/the-standard-logo.jpg",
            summary: "Insurance and financial services company",
            bullets: [
            "Automated actuarial processes using Python and the Tyner library, significantly improving efficiency and reliability for actuaries",
            "Created and implemented robust testing of an existing codebase using Pytest framework, resulting in fewer bugs in production",
            "Reconciled databases across various data sources using SQL and Databricks, verifying accuracy of data transfers",
            "Participated in Agile development with cross-functional teams using Azure DevOps and Jira"
            ]
        },
        {
            id: 2,
            company: "Coding With Kids",
            position: "Coding Instructor",
            period: "2022 - 2023",
            logo: "./logos/coding-with-kids-logo.jpg",
            summary: "STEM education for children",
            bullets: [
            "Instilled a love of coding in young students by creating fun and engaging lesson plans in Scratch and Python"
            ]
        },
        {
            id: 3,
            company: "Alphaledger",
            position: "Junior Software Engineer",
            period: "May 2022 - October 2022",
            logo: "./logos/alphaledger-logo.jpg",
            summary: "Blockchain technology for municipal bond market",
            bullets: [
            "Developed, configured, and tested multiple containerized Hyperledger Fabric topologies for different account architectures",
            "Created Python application to monitor data transfers between PostgreSQL and CouchDB, leading to multiple bug fixes",
            "Developed Java Spring Batch jobs to handle large data transfers, improving speed and reliability",
            "Adapted to changing business requirements using Agile development and Azure DevOps"
            ]
        }
    ];
    
    return (
        <div className="experience" id='experience'>
            <h1>Professional Experience</h1>

            {experiences.map((exp) => (
                <div key={exp.id} className='experience-item'>
                    <div className='container'>
                        <img src={exp.logo} alt={`${exp.company} Logo`}/>
                        <div className="company-info">
                            <h2>{exp.company}</h2>
                            <p className='position'>{exp.position}</p>
                            <p className='period'>{exp.period}</p>
                        </div>
                    </div>

                    <p className='summary'>{exp.summary}</p>
                    <ul>
                        {exp.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
  
export default Experience;