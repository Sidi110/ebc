// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUserGraduate,
  FaEnvelope,
  FaNewspaper,
  FaTimes
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './navbar.module.css';

export default function Navbare() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { icon: <FaHome />, text: 'Home', to: '/home' },
    { icon: <FaUserGraduate />, text: 'Results', to: '/results' },
    { icon: <FaEnvelope />, text: 'Contact', to: '/contact' },
    { icon: <FaNewspaper />, text: 'News', to: '/news' },
  ];

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <motion.img 
            src="/src/ebc.png" 
            alt="EBC Logo" 
            className={styles.logo}
            whileHover={{ rotate: -5, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>

        <motion.button
          onClick={toggleMenu}
          className={styles.menuToggle}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FaTimes className={styles.closeIcon} />
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </motion.button>

        <nav className={styles.navContainer}>
          <ul className={styles.navlinks}>
            {links.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={link.to} className={styles.navLink}>
                  <span className={styles.iconWrapper}>{link.icon}</span>
                  <span className={styles.linkText}>{link.text}</span>
                  <span className={styles.linkHover}></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
                className={styles.backdrop}
              />

              <motion.nav
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
                className={`${styles.navContainer} ${styles.mobileNav}`}
              >
                <ul className={styles.navlinks}>
                  {links.map((link, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      className={styles.navItem}
                    >
                      <Link 
                        to={link.to} 
                        onClick={toggleMenu}
                        className={styles.navLink}
                      >
                        <span className={styles.iconWrapper}>{link.icon}</span>
                        <span className={styles.linkText}>{link.text}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
