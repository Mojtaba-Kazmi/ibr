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

      <div className={styles.buttonContainer}>
        <Link href={servicesBanner.ctaHref} passHref>
          <span
            className={styles.btnGetQuote}
            role="link" // Use "link" role to make it clear it's a link
            tabIndex="0"
            aria-label="Get a Quote" // Provide an accessible name
          >
            {servicesBanner.ctaText}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ServicesBanner;
