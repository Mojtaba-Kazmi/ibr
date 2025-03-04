"use client";

import { useState } from "react";
import styles from "./ProjectNavigator.module.css";
import { CldImage } from "next-cloudinary";
import { projects } from "@/app/content/hero/projects";

export default function ProjectNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeProject = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? Math.min(prevIndex + 1, projects.length - 1)
        : Math.max(prevIndex - 1, 0)
    );
  };

  const { title, description } = projects[currentIndex];

  return (
    <>
      <div className={styles.textContainer}>
        <CldImage
          src="IBR_ii2xqi"
          className={styles.logoImage}
          width={500}
          height={100}
          alt="innovatebathroomrenovations"
        />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div
            className={styles.slider}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <CldImage
                key={project.id}
                src={project.image}
                alt={project.title}
                className={styles.image}
                width={1100}
                height={300}
              />
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={() => changeProject("prev")}
            disabled={currentIndex === 0}
            className={`${styles.button} ${styles.buttonLeft}`}
          >
            &#8592;
          </button>

          {/* Next Button */}
          <button
            onClick={() => changeProject("next")}
            disabled={currentIndex === projects.length - 1}
            className={`${styles.button} ${styles.buttonRight}`}
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
}
