import React, { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';
import VideoOne from '../assets/Videos/VideoOne.mp4';
import clsx from 'clsx';

const Aboutus = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current && !isPlaying) {
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
  }, [isPlaying]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={styles.aboutSection}
      aria-label="About EBC Center"
    >
      <div className={styles.gradientBackground} aria-hidden="true" />
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.textInner}>
              <div className={styles.badge}>
                <span role="img" aria-label="star">⭐</span>
                Why Choose EBC Center
              </div>

              <h1 className={clsx(styles.title, styles.fadeIn)}>
                <span className={styles.titleLine}>Unlock Your Potential</span>
                <span className={clsx(styles.titleLine, styles.highlight)}>with Confidence</span>
              </h1>
              
              <p className={clsx(styles.description, styles.fadeIn)}>
                At EBC Center, we believe that mastering English opens doors to global opportunities. 
                Whether you're preparing for academic success, career advancement, or everyday communication, 
                our expert instructors and immersive programs empower you to speak, write, and think in English 
                with clarity and confidence.
              </p>

              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <svg 
                    className={styles.featureIcon} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <p className={styles.featureText}>
                    <strong>Expert Teachers</strong> — Learn from certified, native-level instructors 
                    with years of experience in ESL/EFL education.
                  </p>
                </div>

                <div className={styles.featureItem}>
                  <svg 
                    className={styles.featureIcon} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <p className={styles.featureText}>
                    <strong>Proven Methods</strong> — Our interactive, student-centered approach ensures 
                    rapid progress in speaking, listening, reading, and writing.
                  </p>
                </div>

                <div className={styles.featureItem}>
                  <svg 
                    className={styles.featureIcon} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                  <p className={styles.featureText}>
                    <strong>Tailored Programs</strong> — From beginner to advanced, we offer courses for all 
                    levels, including IELTS/TOEFL prep, business English, and conversational fluency.
                  </p>
                </div>

                <div className={styles.featureItem}>
                  <svg 
                    className={styles.featureIcon} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  <p className={styles.featureText}>
                    <strong>Supportive Community</strong> — Join a diverse, welcoming environment where 
                    students thrive through practice, feedback, and cultural exchange.
              </p>
                </div>
              </div>
            
              <button
                className={clsx(styles.primaryCta, styles.fadeIn)}
                aria-label="View success stories of our graduates"
                onClick={() => window.location.href = '#testimonials'}
              >
                View Success Stories
                <svg 
                  className={styles.ctaArrow} 
                  viewBox="0 0 24 24" 
                  fill="none"
                  aria-hidden="true"
                >
                  <path 
                    d="M5 12H19M19 12L12 5M19 12L12 19" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
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
                aria-label="EBC Center learning environment demonstration"
                poster="/video-poster.jpg"
              >
                <source src={VideoOne} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div 
                className={styles.videoOverlay}
                onClick={handlePlayClick}
                onKeyPress={(e) => e.key === 'Enter' && handlePlayClick()}
                role="button"
                tabIndex={0}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <div className={styles.playButton}>
                  <svg 
                    className={styles.playIcon} 
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      stroke="white" 
                      strokeWidth="2" 
                      fill="rgba(255,255,255,0.2)" 
                    />
                    <polygon 
                      points={isPlaying ? "35,30 35,70 65,50" : "38,30 72,50 38,70"} 
                      fill="white" 
                    />
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