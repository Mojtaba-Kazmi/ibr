import React from "react";
import { servicesList } from "../../../content/form/services-list";
import CheckboxGroup from "./CheckboxGroup";
import FormField from "./FormField";
import styles from "./ContactFormFields.module.css"; // Make sure CSS is imported

const ContactFormFields = ({ control, errors }) => {
  return (
    <>
      <div className={styles.formRow}>
        <FormField
          name="fullName"
          label="Full Name"
          control={control}
          errors={errors}
          validation={{
            pattern: {
              value: /^[a-zA-Z\s'-]+$/,
              message: "Please enter a valid name using letters only.",
            },
          }}
        />

        <FormField
          name="location"
          label="Location"
          control={control}
          errors={errors}
          className={styles.formField}
          validation={{
            pattern: {
              value: /^[a-zA-Z0-9\s,.'-]+$/,
              message:
                "Please enter a valid location name using letters, numbers, and basic punctuation.",
            },
          }}
        />
      </div>
      <div className={styles.formRow}>
        <FormField
          name="contactNumber"
          label="Contact Number"
          type="tel"
          control={control}
          errors={errors}
          className={styles.formField}
          validation={{
            pattern: {
              value:
                /^(?:\+61\s?|0)[2-478](?:[ -]?[0-9]){8}$|^(?:\+61\s?)?4[0-9]{2}(?:[ -]?[0-9]){6}$|^(?:13\s?[0-9]{2}\s?[0-9]{2})$|^(?:1300\s?[0-9]{3}\s?[0-9]{3})$|^(?:1800\s?[0-9]{3}\s?[0-9]{3})$/,
              message:
                "Please enter a valid Australian number, such as mobile, local, or business.",
            },
          }}
        />

        <FormField
          name="email"
          label="Email Address"
          type="email"
          control={control}
          errors={errors}
        />
      </div>

      <CheckboxGroup
        name="services"
        control={control}
        servicesList={servicesList}
      />
      <div className={styles.message}>
        <FormField
          name="message"
          label="Message"
          control={control}
          errors={errors}
          type="textarea"
        />
      </div>
    </>
  );
};

export default ContactFormFields;
