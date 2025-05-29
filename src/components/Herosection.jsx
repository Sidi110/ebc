import React, { useEffect, useRef } from "react";
import styles from './hero.module.css';
import clsx from 'clsx';

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animatedElements = sectionRef.current.querySelectorAll("." + styles.fadeIn);
          animatedElements.forEach((el, idx) => {
            el.style.animationDelay = `${0.3 + idx * 0.2}s`;
            el.classList.add(styles.animate);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
  <div className={styles.gradientBackground} aria-hidden="true"></div>

  <div className={styles.container}>
    <div className={styles.contentWrapper}>

      <div className={styles.textContent}>
        <div className={styles.textInner}>

          <div className={clsx(styles.badge, styles.fadeIn)}>
            <span>New</span> Immersive Learning Method
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>Master English</span>
            <span className={styles.titleLine}>and speak Fluently</span>
          </h1>

          <p className={styles.description}>
            At <strong>EBC – English Basics Center</strong>, we don’t just teach English — we
            <span className={styles.highlight}> equip you with the language of success</span>. Join us to build real-world communication skills and open doors to education, travel, and career growth!
          </p>

          <div className={styles.ctaContainer}>
            <a href="#" className={styles.primaryCta} aria-label="Begin your journey">
              <span>Begin Your Journey</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a href="#" className={styles.secondaryCta} aria-label="Explore our courses">
              <span>Explore Courses</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <span className={styles.statNumber} data-count="15000">0+</span>
              <span className={styles.statLabel}>Students</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber} data-count="98">0%</span>
              <span className={styles.statLabel}>Success</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber} data-count="24">0/7</span>
              <span className={styles.statLabel}>Support</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

  <div className={styles.scrollIndicator}><span></span></div>
</section>

  );
};

export default HeroSection;
