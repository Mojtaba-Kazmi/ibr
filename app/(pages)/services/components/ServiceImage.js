"use client";

import { CldImage } from "next-cloudinary";
import styles from "./ServiceImage.module.css";

const ServiceImage = ({ src, alt }) => {
  return (
    <div className={styles.imageContainer}> 
      <CldImage
        src={src}
        alt={alt}
        width="900"
        height="630"
        className={styles.thumbnail} 
      />
    </div>
  );
};

export default ServiceImage;