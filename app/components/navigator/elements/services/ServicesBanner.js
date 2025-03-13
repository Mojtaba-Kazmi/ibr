import Link from "next/link";
import styles from "./ServicesBanner.module.css";
import { servicesBanner } from "@/app/content/hero/services-banner";

const ServicesBanner = () => {
  return (
    <section className={styles.serviceContainer} aria-label="Our Services">
      <div className={styles.serviceItemsWrapper}>
        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgResUrl}
            alt="Premium residential Services"
            width={80}
            height={50}
            loading="lazy"
          />
        </div>
        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgRestUrl}
            alt="Long-Lasting Home Restoration Services"
            width={80}
            height={50}
            loading="lazy"
          />
        </div>

        <div className={styles.serviceItem}>
          <img
            src={servicesBanner.imgCommUrl}
            alt="High-Quality Commercial Services for Every Need"
            width={100}
            height={50}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
