import servicesAreas from "../../../content/footer/services-areas/serviceAreas.json";  // Import from JSON file
import styles from "./Services.module.css";

const ServicesAreas = () => {
  return (
    <section className={styles.section}>
      <h2>Service Areas</h2>
      <ul>
        {servicesAreas.map((service, index) => (
          <li key={index}>
            <p>{service.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesAreas;