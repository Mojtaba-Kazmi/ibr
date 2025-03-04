import Link from "next/link";
import usefulLinksData from "../../../content/footer/useful-links/usefulLinks.json";  // Import from JSON file
import styles from "./UsefulLinks.module.css";

const UsefulLinks = () => {
  return (
    <section className={styles.section}>
      <h2>Useful Links</h2>
      <ul>
        {usefulLinksData.map((link, index) => (
          <li key={index}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsefulLinks;