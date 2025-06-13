import styles from './ContactItem.module.css'
// ContactItem.jsx
const ContactItem = ({ icon, text }) => (
  <div className={styles.contactItem}>
    <span className={`material-icons ${styles.icon}`}>{icon}</span>
    <span>{text}</span>
  </div>
);

export default ContactItem;