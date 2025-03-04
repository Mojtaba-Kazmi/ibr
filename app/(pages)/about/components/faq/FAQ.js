"use client";

import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import styles from "./FAQ.module.css";
import { faqData } from "../../../../content/faq/faq-data"; // Ensure this path is correct

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => handleToggle(index)}>
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? <BiChevronUp /> : <BiChevronDown />}
                </span>
              </div>
              {activeIndex === index && <p className={styles.faqAnswer}>{item.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FAQ;