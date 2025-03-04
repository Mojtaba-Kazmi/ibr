import styles from './Footer.module.css';
import Ads from './ads/Ads';
import LogoSocialMedia from './logo-social/LogoSocialMedia';
import ServicesAreas from './services-areas/Services';
import UsefulLinks from './useful-links/UsefulLinks';

const Footer = async () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Ads className={styles.ads} /> 
        <ServicesAreas />
        <UsefulLinks />
        <LogoSocialMedia className={styles.logoSocialMedia}/> 
      </div>
    </footer>
  );
};

export default Footer;