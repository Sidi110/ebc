import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.gradientBackground} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.videoWrapper}>
            <div className={styles.videoContainer}>
              <video
                className={styles.video}
                autoPlay
                loop
                playsInline
                muted={false}
                src="/videos/ebc.mp4"
                type="video/mp4"
              />
            </div>
          </div>

          <div className={styles.textContent}>
            <div className={styles.textInner}>
              <span className={styles.badge}>
                <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                About Us
              </span>

              <h2 className={styles.title}>
                <span className={styles.titleLine}>Welcome to</span>
                <span className={`${styles.titleLine} ${styles.highlight}`}>English Basics Center</span>
              </h2>

              <p className={styles.description}>
                Founded in 2009, English Basics Center (EBC) is a premier English language learning institution in Nouakchott, Mauritania. We are dedicated to providing high-quality English education through innovative teaching methods and a supportive learning environment.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                  <div className={styles.featureText}>
                    <strong>Comprehensive Curriculum</strong> - From basic to advanced levels, our structured program ensures steady progress
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div className={styles.featureText}>
                    <strong>Expert Instructors</strong> - Learn from qualified teachers with extensive experience
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                  <div className={styles.featureText}>
                    <strong>Modern Facilities</strong> - State-of-the-art classrooms and learning resources
                  </div>
                </div>
              </div>

              <a href="#contact" className={styles.primaryCta}>
                Start Your Journey
                <svg className={styles.ctaArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 