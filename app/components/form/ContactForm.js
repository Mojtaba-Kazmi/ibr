"use client";

import SuccessModal from "./elements/SuccessModal";
import ContactFormFields from "./elements/ContactFormFields";
import useContactForm from "../../shared/hooks/useContactForm";
import styles from "./ContactForm.module.css";
import SectionHeader from "../../components/heading/SectionHeader";

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    onSubmit,
    errors,
    loading,
    message,
    modalOpen,
    setModalOpen,
  } = useContactForm();

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
  };

  return (
    <div className={styles.container}>
      <header className={styles.heading}>
        <SectionHeader
          title="Claim Your Exclusive Consultation"
          description="Fill in your details, and we'll be in touch soon."
        />
      </header>
      <div className={styles.wrapper}>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className={styles.contactForm}
        >
          <ContactFormFields control={control} errors={errors} />

          {message?.type === "error" && (
            <span className={styles.errorText}>{message.text}</span>
          )}

          <div className={styles.submitContainer}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>
          </div>
        </form>
        {modalOpen && (
          <SuccessModal
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ContactForm;
