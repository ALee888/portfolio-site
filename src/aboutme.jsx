import React from 'react';

const About = () => {
  return (
    <div className="about" id='about'>
        <div className="bio">
            <h1>About Me</h1>
            <p>I am a Software Engineer looking for a role in the Portland, OR area, or a remote position. I graduated from Gonzaga University in May of 2022 with a Bachelor in Computer Science. From my recent work experience, my preferred language is Python, but I have experience in C++ and Java. For technologies, I have used many but not limited to Docker, databases such as PostgreSQL and MongoDB, and various testing methodologies. Overall, I am determined to find myself a role where I can find longevity and a challenge to further grow my skillset. I look forward to becoming a part of a successful company where I can grow and thrive in my new role.</p>    
        </div>
        <div className='knowledge'>
          <h1>Skills</h1>
          <div className='container'>
            <div>
              <h2>Backend Languages</h2>
              <ul>
                <li>Python (proficient)</li>
                <li>C++ (proficient)</li>
                <li>Java (proficient)</li>
                <li>Shell scripting (prior experience)</li>
                <li>Go (prior experience)</li>
                <li>C# (prior experience)</li>
              </ul>
              <h2>Frontend Languages</h2>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <h2>Technologies</h2>
              <ul>
                <li>Docker</li>
                <li>Linux</li>
                <li>Git</li>
                <li>RESTful API</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Flask</li>
                <li>Django</li>
                <li>Visual Studio Code</li>
                <li>Testing</li>
                <li>Azure DevOps</li>
                <li>CI/CD</li>
              </ul>
              <h2>Databases</h2>
              <ul>
                <li>SQL</li>
                <li>MongoDB</li>              
              </ul>
              <h2>Frameworks</h2>
              <ul>
                <li></li>
              </ul>
            </div>  
          </div>
        </div>
        
    </div>
  )
}
  
export default About