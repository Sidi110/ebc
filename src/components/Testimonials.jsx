import styles from './testemony.module.css';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "EBC transformed my English from basic to fluent in just one year! The immersive activities made learning effortless.",
    author: "Aissatou Diallo",
    role: "Marketing Executive at NovaTech",
    avatar: "/avatars/1.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "As a medical professional, I needed specialized English quickly. EBC's tailored program enabled me to present research at international conferences with confidence.",
    author: "Dr. Mohamed Bah",
    role: "Cardiologist at National Hospital",
    avatar: "/avatars/2.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "The instructors possess an extraordinary ability to simplify complex concepts. My IELTS score jumped from 6.5 to 8.5 in just six months of their strategic coaching.",
    author: "Aminata Sow",
    role: "Engineering Student at UM6P",
    avatar: "/avatars/3.jpg",
    rating: 5
  },
  {
    id: 4,
    quote: "My children's academic performance in English improved dramatically within months. EBC's innovative teaching methods make learning engaging and effective.",
    author: "Fatimetou Mint Ahmed",
    role: "Parent & School Principal",
    avatar: "/avatars/4.jpg",
    rating: 5
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className={styles.ratingContainer}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={styles.star}
          viewBox="0 0 24 24"
          fill={i < rating ? "#F59E0B" : "#E2E8F0"}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const containerRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(`.${styles.testimonialCard}`);
      cards.forEach((card, index) => {
        card.style.setProperty('--delay', `${index * 150}ms`);
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={styles.testimonials} 
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.gradientBackground} aria-hidden="true" />
      
      <div className={styles.container}>
        <header className={styles.header}>
          <h3 className={styles.sectionSubtitle} id="testimonials-heading">
            <span role="img" aria-label="star">⭐</span>
            Success Stories
          </h3>
          <h2 className={styles.sectionTitle}>Trusted by Professionals & Students</h2>
          <div className={styles.underline}></div>
        </header>

        <div className={styles.testimonialsGrid} ref={containerRef}>
          {testimonials.map((testimonial, index) => (
            <article 
              key={testimonial.id}
              className={styles.testimonialCard}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.quoteMark} aria-hidden="true">"</div>
              
              <div className={styles.avatarContainer}>
                <div 
                  className={styles.avatar}
                  style={{ backgroundImage: `url(${testimonial.avatar})` }}
                  aria-hidden="true"
                ></div>
                <StarRating rating={testimonial.rating} />
              </div>
              
              <blockquote className={styles.quote}>
                <p>{testimonial.quote}</p>
              </blockquote>
              
              <div className={styles.author}>
                <span className={styles.name}>{testimonial.author}</span>
                <span className={styles.role}>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}