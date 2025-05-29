import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';
import VideoOne from '../assets/Videos/VideoOne.mp4';
import clsx from 'clsx';

const Aboutus = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(error => {
            console.log('Autoplay prevented:', error);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.aboutSection}>
      <div className={styles.gradientBackground} aria-hidden="true"></div>
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textInner}>
              <h1 className={clsx(styles.title, styles.fadeIn)}>
                <span className={styles.titleLine}>Empowering Through</span>
                <span className={clsx(styles.titleLine, styles.highlight)}>English</span>
              </h1>
              
              <p className={clsx(styles.description, styles.fadeIn)}>
                At EBC Center, we believe in the power of language to transform lives. Our courses are designed to cater to learners of all levels, focusing on practical communication skills and cultural understanding.
              </p>
            
              <button
                className={clsx(styles.primaryCta, styles.fadeIn)}
                aria-label="Learn more about our programs"
              >
                Learn More About Our Programs
                <svg className={styles.ctaArrow} viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className={clsx(styles.videoWrapper, styles.fadeIn)}>
            <div className={styles.videoContainer}>
              <video 
                ref={videoRef} 
                className={styles.video} 
                muted 
                loop 
                playsInline
                aria-label="EBC Center educational video"
              >
                <source src={VideoOne} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className={styles.videoOverlay}>
                <div className={styles.playButton}>
                  <svg className={styles.playIcon} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.2)" />
                    <polygon points="38,30 72,50 38,70" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;