import './App.css';
import About from './components/AboutMe/AboutMe';
import Experience from './components/Experience/experience';
import Header from './components/Header/header';
import ProjectCard from './components/ProjectCard';
import projectList from './ProjectList.json';
import Navbar from './components/NavBar/Navbar';



const App = () => {
    // var about = About();
    // var experience = Experience();
    return (
        <div className="app">
            <Navbar />
            <Header />
            
            <div className='body'>
                <About />
                <Experience />
                <div className='projects' id='projects'>
                    <h1>Personal Projects</h1>
                    <div className="projectlist">
                        {projectList.map((project) => (
                            <ProjectCard project={project}/>
                        ))}
                    </div>
                    <h2>More projects coming soon!</h2>
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
