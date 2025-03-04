// components/MainBanner.js
import AboutBanner from "./elements/about/AboutBanner";
import ServicesBanner from "./elements/services/ServicesBanner";
import styles from "./HeroBanner.module.css";
import ProjectNavigator from "./elements/projects/ProjectNavigator";

const HeroBanner = () => {
  return (
    <div className={styles.heroBannerWrapper}>
      <div className={styles.heroBanner}>
        <AboutBanner />
        <ProjectNavigator />
        <ServicesBanner />
       
      </div>
    </div>
  );
};

export default HeroBanner;