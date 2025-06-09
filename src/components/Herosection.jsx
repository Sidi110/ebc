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
    <section 
      ref={sectionRef} 
      className={styles.heroSection}
      aria-label="Hero section"
    >
      <div className={styles.gradientBackground} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textInner}>
              <div 
                className={clsx(styles.badge, styles.fadeIn)}
                role="status"
                aria-label="New feature announcement"
              >
                <span>New</span> Transform Your English Journey
              </div>

              <h1 className={styles.title}>
                <span className={styles.titleLine}>Master English with</span>
                <span className={styles.titleLine}>Confidence & Clarity</span>
              </h1>

              <p className={styles.description}>
                At <strong>EBC – English Basics Center</strong>, we revolutionize language learning through 
                <span className={styles.highlight}> immersive experiences and personalized guidance</span>. 
                Join our community of successful learners and unlock your potential in English communication, 
                academic excellence, and professional growth.
              </p>

              <div className={styles.ctaContainer}>
                <a 
                  href="#contact" 
                  className={styles.primaryCta}
                  aria-label="Start your English learning journey"
                >
                  <span>Start Your Journey</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>

                <a 
                  href="#courses" 
                  className={styles.secondaryCta}
                  aria-label="Explore our English learning programs"
                >
                  <span>Discover Programs</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="M12 16v-4M12 8h.01"/>
                  </svg>
                </a>
              </div>

              <div 
                className={styles.statsContainer}
                role="region"
                aria-label="Key statistics"
              >
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15K+</span>
                  <span className={styles.statLabel}>Successful Students</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Success Rate</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={styles.scrollIndicator} 
        aria-hidden="true"
        role="presentation"
      >
        <span></span>
      </div>
    </section>
  );
};

export default HeroSection;
