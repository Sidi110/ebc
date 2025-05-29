import styles from './Tail.module.css';

export default function TaiLinks() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.gradientBackground}></div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textInner}>
              <h2 className={`${styles.title} ${styles.titleLine}`}>
                <span>Contact</span>
                <span className={styles.highlight}>English Basics Center</span>
              </h2>

              <p className={styles.description}>
                We’re here to guide you every step of the way. Reach out with any questions or visit us in person.
              </p>

              <div className={styles.contactInfo}>
                <p><strong>📍 Location:</strong> Teyaret, Tegragh Zeyne, Crafour, Nouakchott, Mauritania</p>
                <p><strong>📞 Phone:</strong> <a href="tel:+22231005251">31 00 52 51</a></p>
                <p><strong>✉️ Email:</strong> <a href="mailto:info@englishbasicscenter.com">info@englishbasicscenter.com</a></p>
                <p><strong>🌐 Facebook:</strong> <a href="https://ebc.at-home-at-school.com" target="_blank" rel="noopener noreferrer">ebc.at-home-at-school.com</a></p>
                <p><strong>📅 Founded:</strong> 2009</p>
              </div>

              <p className={styles.copyright}>
                &copy; 2025 English Basics Center (EBC). All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
