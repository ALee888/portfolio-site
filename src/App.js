import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/experience';
import Header from './components/Header/header';
import Navbar from './components/NavBar/Navbar';
import Projects from './components/Projects/projects';


const App = () => {
    // var about = About();
    // var experience = Experience();
    return (
        <div className="app">
            <Navbar />
            <Header />
            
            <main>
                <About />
                <Skills />
                <Experience />
                <Projects />
            </main>
            <footer className='contact' id='contact'>
                <h2>al748x@gmail.com</h2>
                <h2>(661)400-5579</h2>
            </footer>
        </div>
    );
} 

export default App;
