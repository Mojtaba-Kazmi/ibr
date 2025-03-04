"use client";

import React, {
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import styles from "./Portfolio.module.css";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { CldImage } from "next-cloudinary";

const Portfolio = React.memo(({ portfolio }) => {
  // State to track whether the carousel is at the start or end
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // State for modal visibility and its content
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Reference to the scrollable carousel container
  const scrollRef = useRef(null);

  /**
   * Handles carousel scrolling and updates `atStart` and `atEnd` state.
   * Determines if we are at the beginning or end of the scrollable container.
   */
  const handleScroll = useCallback(() => {
    const container = scrollRef.current; // Access the carousel DOM element
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Update state: `atStart` is true if we're scrolled to the very start
    setAtStart(scrollLeft <= 0);

    // `atEnd` is true if we've scrolled to the very end
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    
  }, [setAtStart, setAtEnd]);

  /**
   * Scrolls the carousel to the left by 300px.
   */
  const scrollLeft = useCallback(() => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  }, []);

  /**
   * Scrolls the carousel to the right by 300px.
   */
  const scrollRight = useCallback(() => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  }, []);

  /**
   * Opens the modal and sets its content to the selected item.
   */
  const openModal = useCallback((item) => {
    setModalContent(item); // Set the modal data to the clicked item
    setModalOpen(true); // Make the modal visible
  }, []);

  /**
   * Closes the modal and clears its content.
   */
  const closeModal = useCallback(() => {
    setModalOpen(false); // Hide the modal
    setModalContent(null); // Clear the modal content
  }, []);

  /**
   * Disables body scrolling when the modal is open and restores it when closed.
   * This ensures the background doesn't scroll while the modal is visible.
   */
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Allow scrolling
    }

    // Cleanup: Restore scrolling if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  /**
   * Adds a scroll event listener to the carousel to track its position.
   * Updates state (`atStart` and `atEnd`) based on the scroll position.
   */
  useLayoutEffect(() => {
    if (typeof window !== "undefined") { // Ensure this runs only on the client
      const container = scrollRef.current;
      if (!container) return;
  
      container.addEventListener("scroll", handleScroll); // Listen to scroll events
      handleScroll(); // Call once to initialize state
  
      // Cleanup: Remove the event listener when component unmounts
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <section className={styles.container} aria-labelledby="portfolio-heading">
      {/* Carousel container */}
      <div ref={scrollRef} className={styles.carousel}>
        <div className={styles.spacer}></div> {/* Spacer for aesthetics */}
        {portfolio.map((item, index) => (
          <div key={index} className={styles.card}>
            {/* Image wrapper for each portfolio card */}
            <div className={styles.imageWrapper}>
              <CldImage 
                src={item.image} 
                alt={item.alt} 
                width={800}
                height={300}
                className={styles.image} 
              />
            </div>
            {/* Text overlay containing title and description */}
            <div className={styles.textOverlay}>
              <h2 className={styles.imageTitle}>{item.title}</h2>
              <p className={styles.imageDescription}>
                {" "}
                {item.subtitle || "No subtitle available."}
              </p>
            </div>
            {/* Clickable "+" icon to open modal with more details */}
            <div
              className={styles.plusCircle}
              aria-label="Open Details"
              onClick={() => openModal(item)}
            >
              <FaPlus />
            </div>
          </div>
        ))}
        <div className={styles.spacer}></div> {/* Spacer for aesthetics */}
      </div>

      {/* Navigation buttons for scrolling the carousel */}
      <div className={styles.navButtons}>
        {/* Left scroll button */}
        <button
          className={`${styles.navButton} ${styles.leftButton}`}
          onClick={scrollLeft}
          disabled={atStart} // Disabled if at the start
          aria-label="Scroll Left"
        >
          <MdOutlineArrowBackIosNew />
        </button>
        {/* Right scroll button */}
        <button
          className={`${styles.navButton} ${styles.rightButton}`}
          onClick={scrollRight}
          disabled={atEnd} // Disabled if at the end
          aria-label="Scroll Right"
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>

      {/* Modal for displaying detailed information about a portfolio item */}
      {modalOpen && modalContent && (
        <div className={styles.modal} onClick={closeModal}>
          {/* Prevent modal content clicks from closing the modal */}
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button for the modal */}
            <div className={styles.closeWrapper}>
              <button
                className={styles.modalClose}
                onClick={closeModal}
                aria-label="Close Modal"
              >
                <AiFillCloseCircle />
              </button>
            </div>

            {/* Modal details */}
            <figure className={styles.modalDetails}>
              <h2>{modalContent.title}</h2>
              <p>{modalContent.subtitle}</p>
              <CldImage 
                width={300}
                height={300}
                src={modalContent.image} 
                alt={modalContent.alt} 
              />
              <figcaption>{modalContent.primaryContent}</figcaption>

              {/* Additional images (if available) */}
              {modalContent.images?.length > 0 && (
                <div className={styles.imageGallery}>
                  {modalContent.images.map((image, idx) => (
                    <CldImage
                      key={idx}
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={300}
                      className={styles.modalImage}
                    />
                  ))}
                </div>
              )}
            </figure>
          </div>
        </div>
      )}
    </section>
  );
});

// Assign a display name to the memoized component
Portfolio.displayName = "Portfolio";

export default Portfolio;
