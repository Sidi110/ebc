import styles from './Tail.module.css';

export default function TaiLinks() {
  return (
    <>
      <footer className={styles.footerSection}>
        <div className={styles.gradientBackground} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <div className={styles.textInner}>
                <h2 className={styles.title}>
                  <span className={styles.titleLine}>Contact</span>
                  <span className={`${styles.titleLine} ${styles.highlight}`}>English Basics Center</span>
                </h2>

                <p className={styles.description}>
                  We're here to guide you every step of the way. Reach out with any questions or visit us in person.
                </p>

                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div className={styles.contactText}>
                      <strong>Location:</strong> Teyaret, Tegragh Zeyne, Crafour, Nouakchott, Mauritania
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div className={styles.contactText}>
                      <strong>Phone:</strong> <a href="tel:+22231005251">31 00 52 51</a>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div className={styles.contactText}>
                      <strong>Email:</strong> <a href="mailto:info@englishbasicscenter.com">info@englishbasicscenter.com</a>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <div className={styles.contactText}>
                      <strong>Facebook:</strong> <a href="https://ebc.at-home-at-school.com" target="_blank" rel="noopener noreferrer">ebc.at-home-at-school.com</a>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <div className={styles.contactText}>
                      <strong>Founded:</strong> 2009
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className={styles.mapSection}>
        <div className={styles.gradientBackground} aria-hidden="true" />
        
        <div className={styles.container}>
          <h2 className={styles.mapTitle}>
            <span className={styles.titleLine}>Find Us in</span>
            <span className={`${styles.titleLine} ${styles.highlight}`}>Nouakchott</span>
          </h2>

          <div className={styles.mapWrapper}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9999999999995!2d-15.999999999999998!3d18.099999999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA2JzAwLjAiTiAxNcKwNTknNTkuOSJX!5e0!3m2!1sen!2smr!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EBC Location Map"
              />
              <div className={styles.mapPin}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.copyrightSection}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            &copy; 2025 English Basics Center (EBC). All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
