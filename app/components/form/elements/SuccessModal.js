import React from "react";
import styles from "./SuccessModal.module.css";

const SuccessModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.animationContainer}>
          <img
            className={styles.successAnimation}
            src="/assets/anim-tick.gif"
            alt="Success Tick Animation"
          />
        </div>
        <h2 className={styles.h}>Thank you for submitting!</h2>
        <p className={styles.p}>Your message has been sent successfully!</p>
      </div>
    </div>
  );
};

export default SuccessModal;