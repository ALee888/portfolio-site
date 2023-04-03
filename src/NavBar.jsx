import React from 'react';

function Navbar() {
    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <nav>
            <a onClick={() => handleNavClick('header')}><img src='./logos/AL-logo.png' alt='alLogo'/></a>
            <a onClick={() => handleNavClick('about')}><button>About</button></a>
            <a onClick={() => handleNavClick("experience")}><button>Experience</button></a>
            <a onClick={() => handleNavClick("projects")}><button>Projects</button></a>
            <a onClick={() => handleNavClick("contact")}><button>Contact</button></a>
        </nav>
    );
}

export default Navbar;