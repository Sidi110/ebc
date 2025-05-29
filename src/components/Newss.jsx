import React, { useEffect, useState } from 'react';
import styles from './News.module.css';

const formatTime = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const Countdown = ({ label, targetDate, size = 'small' }) => {
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={`${styles.countdown} ${styles[size]}`}>
      <span className={styles.label}>{label}</span>
      <span className={styles.timer}>{formatTime(timeLeft)}</span>
    </div>
  );
};

const posts = [
  { id: 1, title: 'New speaking challenge announced!', date: 'May 22, 2025', summary: 'Participate in our weekly debate to improve your fluency.' },
  { id: 2, title: 'Grammar Champions of April', date: 'May 15, 2025', summary: 'Meet the students who mastered the past perfect this month.' },
  { id: 3, title: 'Tips to Boost Your English Listening Skills', date: 'May 10, 2025', summary: 'Watch our new video series with real conversations.' },
];

const Newss = () => {
  const now = new Date();
  const sessionDate = new Date(now.getFullYear(), now.getMonth() + 2, 1);

  return (
    <div className={styles.newsWrapper}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Latest Updates & Countdown</h2>
      </div>

      <Countdown label="Time Before New Session" targetDate={sessionDate} size="large" />

      <div className={styles.smallCountdowns}>
        <Countdown label="Speak Your Mind" targetDate={new Date(now.getTime() + 5 * 86400000)} />
        <Countdown label="Best Student" targetDate={new Date(now.getTime() + 10 * 86400000)} />
        <Countdown label="Grammar Challenge" targetDate={new Date(now.getTime() + 7 * 86400000)} />
      </div>

      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <h3>{post.title}</h3>
            <p className={styles.date}>{post.date}</p>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newss;
