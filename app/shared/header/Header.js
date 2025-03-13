"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Navbar from "./navbar/Navbar";
import { CldImage } from 'next-cloudinary';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Prevent header hiding when the menu is open
    if (!isMenuOpen) {
      // Hide the header when scrolling down unless at the top
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
    }

    setLastScrollY(currentScrollY);

    // Set isScrolled based on scroll position
    setScrolled(currentScrollY > 0);
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`${styles.container} ${isScrolled ? styles.scrolled : ""} ${
        isHeaderVisible ? "" : styles.hidden
      }`}
    >
      <div className={styles.wrapper}>
        {/* Logo */}
        <div className={styles.branding}>
          <Link href="/" passHref>
            <CldImage
              src="IBR_ii2xqi"
              className={styles.logoImage}
              width={500}
              height={100}
              alt="innovatebathroomrenovations"
            />
          </Link>
        </div>

        {/* Fullscreen Navbar */}
        <div
          className={`${styles.navbarMenu} ${
            isMenuOpen ? styles.active : styles.exit
          }`}
        >
          <Navbar
            isMenuOpen={isMenuOpen}
            onCloseMenu={() => setMenuOpen(false)}
            isScrolled={isScrolled}
          />
        </div>

        {/* Get in Touch Button */}
        <Link href="/quote">
          <button className={styles.quoteButton} aria-label="Get in Touch">
            Get in Touch
          </button>
        </Link>

        {/* Burger Menu */}
        <div
          className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          role="button"
        >
          <span></span> {/* Burger icon */}
        </div>
      </div>
    </header>
  );
}
