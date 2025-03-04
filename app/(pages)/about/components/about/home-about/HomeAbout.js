"use client";

import styles from "./HomeAbout.module.css";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { CldImage } from 'next-cloudinary';

const HomeAbout = ({ homeAboutInfo }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.homeContainer}>
          <header>
            <div className={styles.textContent}>
              <div className={styles.description}>
                <ReactMarkdown>{homeAboutInfo.description}</ReactMarkdown>
              </div>

              {homeAboutInfo.buttonLink && (
                <Link href={homeAboutInfo.buttonLink} passHref>
                  <button className={styles.button}>
                    {homeAboutInfo.buttonText}
                  </button>
                </Link>
              )}
            </div>
          </header>

          {homeAboutInfo?.images && (
            <div className={styles.imageContent}>
              {homeAboutInfo.images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <CldImage
                    src={image.url}
                    alt={image.alt || "image"}
                    width={500}
                    height={100}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
