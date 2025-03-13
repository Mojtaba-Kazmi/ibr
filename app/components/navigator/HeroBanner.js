import ServicesBanner from "./elements/services/ServicesBanner";
import styles from "./HeroBanner.module.css";
import ProjectNavigator from "./elements/projects/ProjectNavigator";

const HeroBanner = () => {
  return (
    <div className={styles.heroBannerWrapper}>
      <div className={styles.heroBanner}>
        <ServicesBanner />
        <ProjectNavigator />
      </div>
    </div>
  );
};

export default HeroBanner;
