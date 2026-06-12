import styles from './Contact.module.css';

const CONTACTS = [
  { icon: 'images/gmail.png', alt: 'Email', label: 'shaskiapdv@gmail.com' },
  { icon: 'images/linkelin.png', alt: 'LinkedIn', label: 'Shaskia Putri Devi' },
  { icon: 'images/instagram.png', alt: 'Instagram', label: '@shaskiapv' },
];

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={`${styles.contactHeading} sr-left`}>
        Get in <span>touch!</span>
      </h2>
      <p className="sr-right">
        Want to discuss further? <span>Contact</span> me!
      </p>
      <div className={`${styles.upperContainer} sr-bottom`}>
        {CONTACTS.map((item) => (
          <div className={styles.contactRow} key={item.label}>
            <img src={item.icon} alt={item.alt} className={styles.contactIcon} />
            <h1>{item.label}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}
