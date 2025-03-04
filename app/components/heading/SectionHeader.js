"use client";

import { CldImage } from "next-cloudinary"; // components/SectionHeader.js
import styles from "./SectionHeader.module.css"; // Optional: import styles

const SectionHeader = ({ title, description }) => {
  return (
    <header className={styles.header}>
      <CldImage
        src="IBR_ii2xqi"
        className={styles.logoImage}
        width={500}
        height={100}
        alt="innovatebathroomrenovations"
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  );
};

export default SectionHeader;
