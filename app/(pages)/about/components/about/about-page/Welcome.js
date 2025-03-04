"use client";

import { CldImage } from "next-cloudinary";
import styles from "./Welcome.module.css";
import Link from "next/link";

const Welcome = ({ welcomeData }) => {
  return (
    <section className={styles.businessSection}>
      <div className={styles.businessContainer}>
        <div className={styles.businessText}>
          <h2 className={styles.businessTitle}>{welcomeData.title}</h2>
          <ul className={styles.businessList}>
            {welcomeData.sections.map((section, index) => (
              <li key={index} className={styles.businessListItem}>
                <h4 className={styles.businessSubTitle}>{section.subtitle}</h4>
                <p>{section.description}</p>
              </li>
            ))}
          </ul>
          {welcomeData.ctaLink && (
            <Link href={welcomeData.ctaLink}>
              <button className={styles.ctaButton}>
                {welcomeData.ctaButtonText}
              </button>
            </Link>
          )}
        </div>
        <div className={styles.businessImageWrapper}>
          <CldImage
            src="pexels-max-rahubovskiy-6315803-scaled_nyoeyt"
            alt={`Image representing ${welcomeData.title} services`}
            width={500}
            height={300}
            className={styles.businessImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
