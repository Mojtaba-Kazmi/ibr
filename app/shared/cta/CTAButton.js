'use client';

import { useEffect, useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import styles from './CTAButton.module.css';

const CallToActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  // Scroll event to control visibility and position
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const bottomPosition = document.body.offsetHeight;

    setIsVisible(window.scrollY > 200);
    setIsBottom(scrollPosition >= bottomPosition - 50); // Move to the left when close to bottom
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
        <a
          href="tel:+61434609442"
          className={`${styles.callButton} ${isBottom ? styles.moveLeft : ''}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhoneAlt className={styles.icon} />
        </a>
      )}
    </div>
  );
};

export default CallToActionButton;