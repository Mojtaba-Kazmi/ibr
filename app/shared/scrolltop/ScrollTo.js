'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // React Icon for scroll-up
import styles from './ScrollTo.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomPosition = document.body.offsetHeight;
    
    setIsVisible(scrollPosition >= bottomPosition - 50);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className={styles.scrollToTop} onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;