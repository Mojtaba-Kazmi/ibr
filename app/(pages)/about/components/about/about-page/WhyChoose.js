import styles from "./WhyChoose.module.css";
import {
  FaHandshake,
  FaCoins,
  FaAward,
  FaTools,
  FaLeaf,
  FaClock,
} from "react-icons/fa";

const WhyChoose = ({ whyChooseData }) => (
  <section className={styles.whyChooseSection}>
    <div className={styles.aboutContainer}>
      <h2 className={styles.sectionTitle}>Why Clients Trust Us</h2>
      <p className={styles.companyInfo}>{whyChooseData.companyInfo}</p>
      <ul className={styles.advantagesList}>
        {whyChooseData.reasons.map((reason, index) => (
          <li key={index} className={styles.advantageItem}>
            <div className={styles.advantageItemIcon}>
              {index === 0 && <FaAward />}
              {index === 1 && <FaTools />}
              {index === 2 && <FaLeaf />}
              {index === 3 && <FaClock />}
              {index === 4 && <FaHandshake />}
              {index === 5 && <FaCoins />}
            </div>
            <h3 className={styles.advantageItemTitle}>
              <span className={styles.indexNumber}>{`0${index + 1}.`}</span>{" "}
              {reason.title}
            </h3>
            <p className={styles.advantageItemDescription}>
              {reason.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyChoose;