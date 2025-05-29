import React from 'react';
import styles from './CoursesOverview.module.css';


const levels = [
  { name: 'A', skills: ['Grammar', 'Spelling'] },
  { name: 'B', skills: ['Grammar', 'Spelling'] },
  { name: 'Level 1', skills: ['Grammar', 'Speaking', 'Vocabulary'] },
  { name: 'Level 2', skills: ['Grammar', 'Speaking', 'Vocabulary', 'Listening'] },
  { name: 'Level 3', skills: ['Grammar', 'Speaking', 'Vocabulary', 'Reading'] },
  { name: 'Level 4', skills: ['Grammar', 'Speaking', 'Writing Practice'] },
  { name: 'Level 5', skills: ['Advanced Grammar', 'Fluency Training', 'Exam Practice (IELTS/TOEFL)'] },
];

const CoursesOverview = () => {
  return (
   <section className={styles.container}>
  <div className={styles.gradientBackground}></div>
  <div className={styles.inner}>
    <h2 className={styles.title}>Choose Your English Level</h2>
    <p className={styles.subtitle}>
      Progress through structured levels, from fundamentals to advanced fluency.
    </p>
    <div className={styles.grid}>
      {levels.map((level, index) => (
        <div
          key={index}
          className={styles.card}
          style={{ '--i': index }}
        >
          <h3 className={styles.cardTitle}>{level.name}</h3>
          <ul className={styles.skillList}>
            {level.skills.map((skill, i) => (
              <li key={i} className={styles.skillItem}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default CoursesOverview;
