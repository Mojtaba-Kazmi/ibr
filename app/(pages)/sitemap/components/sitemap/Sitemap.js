import Link from "next/link";
import styles from "./Sitemap.module.css"; // Custom styles for sitemap
import PageHeader from "../../../../shared/breadcrumbs/PageHeader";

const Sitemap = ({ menuItems }) => {
  return (
    <>
      <PageHeader
        title="Sitemap"
        description="Explore all the pages on our website, from our services and projects to blog posts and contact details, all in one place."
        breadcrumb="Sitemap page"
      />
      <section className={styles.sitemap}>
        <ul className={styles.sitemapList}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              {/* Check if the item has submenus */}
              {item.submenu && (
                <ul className={styles.subMenu}>
                  {item.submenu.map((subItem) => (
                    <li key={subItem.href}>
                      <Link href={subItem.href}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sitemap;
