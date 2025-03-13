"use client";

import { CldImage } from "next-cloudinary"; // components/SectionHeader.js
import styles from "./SectionHeader.module.css"; // Optional: import styles

const SectionHeader = ({ title, description }) => {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
};

export default SectionHeader;
