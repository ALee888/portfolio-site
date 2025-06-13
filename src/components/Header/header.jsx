import styles from './header.module.css'
import ContactItem from '../ContactItem/ContactItem';
import SocialIcon from '../SocialIcon/SocialIcon';

// Updated Header Component
const Header = () => {
    const info = {
        email: 'adamflee88@gmail.com',
        phone: '(661) 400-5579',
        linkedin: 'https://www.linkedin.com/in/adam-f-lee/',
        github: 'https://github.com/ALee888'
    }
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/assets/Adam_Lee_Resume.pdf';
        link.download = 'Adam_Lee_Resume.pdf';
        link.click();
    }
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <img 
                src={`${process.env.PUBLIC_URL}/assets/headshot.jpg`} 
                alt='Adam Lee' 
                className={styles.headshot}
                />

                <div className={styles.info}>
                    <h1>Adam Lee</h1>
                    <h2>Developer</h2>

                    <div className={styles.contactInfo}>
                        <ContactItem icon='email' text={info.email} />
                        <ContactItem icon='phone' text={info.phone} />
                    </div>

                    <div className={styles.socialLinks}>
                        <SocialIcon platform='linkedin' href={info.linkedin} />
                        <SocialIcon platform='github' href={info.github} />
                    </div>

                    <button 
                        onClick={handleDownload}
                        className={styles.resumeButton}
                    >
                        Download Resume
                        <span className={styles.downloadIcon}>↓</span>    
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;