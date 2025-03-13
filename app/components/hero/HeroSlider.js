"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import styles from "./HeroSlider.module.css"; // Import CSS module
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  { src: "https://res.cloudinary.com/den67ouct/image/upload/v1740959760/pexels-terry-magallanes-2988865-scaled_lzrjat.jpg", text: "Expert Bathroom Renovations" },
  { src: "https://res.cloudinary.com/den67ouct/image/upload/v1740959764/pexels-vecislavas-popa-1571461-scaled_mminir.jpg", text: "Luxury Bathroom Remodeling" },
  { src: "https://res.cloudinary.com/den67ouct/image/upload/v1740957812/bathroom-renovations_gvhxjj.jpg", text: "High-Quality Tiling Services" },
];

const HeroSlider = () => {
  return (
    <section className={styles.hero}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {/* Background Image */}
            <div className={styles.imageWrapper}>
              <img src={item.src} alt="Showcase" className={styles.image} />
              <div className={styles.overlay}></div>
            </div>

            {/* Text Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className={styles.textOverlay}
            >
              <h2 className={styles.title}>{item.text}</h2>
              <p className={styles.subtitle}>We are your trusted bathroom renovation experts with over 12 years of experience. Get your free quote today!</p>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="tel:+61434097106"
                className={styles.callButton}
              >
                Call Now
              </motion.a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;