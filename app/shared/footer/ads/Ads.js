"use client";

import styles from "./Ads.module.css";
import ads from "../../../content/footer/ads/ads.json"; // Ensure the path to your ads.json is correct
import { CldImage } from 'next-cloudinary';

function Ads() {
  return (
    <section className={styles.ads}>
      {ads.map((ad, index) => (
        <div key={index} className={styles.card}>
          <div className={styles["image-container"]}>
            <CldImage
              src={ad.image}
              alt={ad.alt}
              width={400}
              height={900}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Ads;