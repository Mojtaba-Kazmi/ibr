"use client";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "./LogoSocialMedia.module.css";
import logoSocial from "../../../content/footer/logo-social/logoSocial.json";
import { PiPhoneFill } from "react-icons/pi";
import { CldImage } from 'next-cloudinary';
import "../../../globals.css";

const LogoSocialMedia = () => {
  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <CldImage
          src={logoSocial.logo.image} // Use the logo object from JSON
          width={parseInt(logoSocial.logo.width)}
          height={parseInt(logoSocial.logo.height)}
          alt={logoSocial.logo.alt}
        />
        <div className={styles.contactDetails}>
          <address>
            {logoSocial.contact.address}
            <p>
              <a href={`mailto:${logoSocial.contact.email}`}>
                {logoSocial.contact.email}
              </a>
            </p>
          </address>
          <div className={styles.contactNumber}>
            <a href={`tel: +61434609442`}>
              <PiPhoneFill className={styles.icon} />{logoSocial.contact.number}
            </a>
          </div>
        </div>
      </div>

      <nav className={styles.legal}>
        <Link href="/legal" aria-label="Legal Information">
          {logoSocial.links.legal}
        </Link>
      </nav>

      <nav className={styles.findUs}>
        <Link href="#" aria-label="Find Us">
          {logoSocial.links.findUs}
        </Link>
      </nav>

      <div className={styles.socials}>
        <a
          href={logoSocial.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href={logoSocial.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default LogoSocialMedia;
