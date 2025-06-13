import styles from './SocialIcon.module.css'
// SocialIcon.jsx
const SocialIcon = ({ platform, href }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <img 
      src={`${process.env.PUBLIC_URL}/logos/${platform}-logo.png`} 
      alt={`${platform} icon`}
      className={styles.socialIcon}
    />
  </a>
);
export default SocialIcon;