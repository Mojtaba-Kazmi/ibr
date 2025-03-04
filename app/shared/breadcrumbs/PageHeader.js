// components/PageHeader.js
import styles from "./PageHeader.module.css";
import Link from "next/link";

export default function PageHeader({ title, description, breadcrumb }) {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>{title}</h1>
        <p>{description}</p>
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link> &gt; <span>{breadcrumb}</span>
        </nav>
      </div>
    </section>
  );
}
