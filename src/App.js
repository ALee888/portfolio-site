import React from 'react';
import './App.css';
import About from './aboutme';
import Experience from './experience';
import ProjectCard from './ProjectCard';
import projectList from './ProjectList.json';
import Navbar from './NavBar';


const links = {
    "linkedin": "https://www.linkedin.com/in/adam-f-lee/",
    "github": "https://github.com/ALee888",
    "instagram": "https://www.instagram.com/"
}
const App = () => {
    var about = About();
    var experience = Experience();
    return (
        <div className="app">
            <Navbar />
            <header id='header'>
                <img className="headshot" src='./headshot.jpg' alt="Headshot"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong"></link>
                <div className="info">
                    <h1>Adam Lee</h1>
                    <h2>al748x@gmail.com</h2>
                    <h2>(661)400-5579</h2>
                    <table>
                        <tr>
                            <td>
                                <a href={links.linkedin}><img className="socialLink" alt="linkedin" src='./logos/linkedin-logo.png'/></a>
                            </td>
                            <td>
                                <a href={links.github}><img className="socialLink" alt="github" src='./logos/github-logo.jpg'/></a>   
                            </td>
                        </tr>
                    </table>
                </div>
            </header>
            
            <div className='body'>
                {about}
                {experience}
                <div className='projects' id='projects'>
                    <h1>Personal Projects</h1>
                    <div className="projectlist">
                        {projectList.map((project) => (
                            <ProjectCard project={project}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className='contact' id='contact'>
                <h2>al748x@gmail.com</h2>
                <h2>(661)400-5579</h2>
            </div>
        </div>
    );
} 

export default App;
