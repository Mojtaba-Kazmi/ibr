"use client";

import React from "react";
import styles from "./loading.module.css";
import { CldImage } from "next-cloudinary";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <CldImage 
        src="IBR_ii2xqi"
        width={300}
        height={120}
        alt="Innovate Bathroom Renovations"
      />
      <div className={styles.loader}></div>
    </div>
  );
}