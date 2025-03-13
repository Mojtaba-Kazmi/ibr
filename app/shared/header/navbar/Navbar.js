import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar({ isMenuOpen, onCloseMenu, isScrolled }) {
  const [animationKey, setAnimationKey] = useState(Date.now());
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set animation key for re-render
    setAnimationKey(Date.now());

    // Check if the window is mobile/tablet size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Initial check
    checkMobile();

    // Add event listener to detect resize
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMenuOpen]);

  // Static menu items
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    {
      href: "/pages",
      label: "Pages",
      submenu: [
        { href: "/", label: "Home Page" },
        { href: "/about", label: "About Page" },
        { href: "/services", label: "Services Page" },
        { href: "/blog", label: "Blog Page" },
        { href: "/projects", label: "Projects Page" },
        { href: "/contact", label: "Contact Page" }
      ],
    },
  ];

  const handleSubmenuToggle = (e, item) => {
    if (item.submenu) {
      e.preventDefault();
      setOpenSubmenu(openSubmenu === item.label ? null : item.label);
    }
  };

  const handleMenuClick = (href) => {
    onCloseMenu(); // Close the burger menu
    setOpenSubmenu(null); // Reset the submenu when navigating
  };

  return (
    <nav aria-label="Main navigation" className={styles.nav}>
      <ul
        className={`${styles.list} ${isMenuOpen ? styles.show : ""}`}
        key={animationKey}
      >
        {menuItems.map((item, index) => (
          <li
            key={item.href}
            className={`${styles.listItem} ${
              item.submenu ? styles.hasSubmenu : ""
            } ${openSubmenu === item.label ? styles.open : ""}`}
            style={{ "--index": index }}
            onMouseEnter={() => !isMobile && setOpenSubmenu(item.label)}
            onMouseLeave={() => !isMobile && setOpenSubmenu(null)}
          >
            <div
              className={`${styles.navLink} ${isScrolled ? styles.scrolledNavLink : ""}`}
              onClick={(e) => {
                if (item.submenu) {
                  handleSubmenuToggle(e, item);
                } else {
                  handleMenuClick(item.href); // Close menu and navigate
                }
              }}
            >
              <Link href={item.submenu ? "#" : item.href}>{item.label}</Link>
              {item.submenu && (
                <span
                  className={`${styles.arrow} ${
                    openSubmenu === item.label ? styles.arrowUp : ""
                  }`}
                >
                  <MdKeyboardArrowDown />
                </span>
              )}
            </div>

            {item.submenu && openSubmenu === item.label && (
              <ul className={styles.submenu}>
                {item.submenu.map((subItem) => (
                  <li key={subItem.href} className={styles.submenuItem}>
                    <Link
                      href={subItem.href}
                      className={styles.submenuLink}
                      onClick={() => handleMenuClick(subItem.href)} // Close menu and navigate
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}