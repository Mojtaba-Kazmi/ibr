import React from "react";
import { Controller } from "react-hook-form";
import styles from "./CheckboxGroup.module.css";

const CheckboxGroup = ({ name, control, servicesList }) => (
  <div className={styles.checkboxContainer}>
    {/* Text above the checkboxes */}
    <h3 className={styles.servicePrompt}>Which service can we assist you with?</h3>

    <div className={styles.checkboxGroup}>
      {/* Wrap the label and input inside one structure */}
      {servicesList.map((service, index) => {
        const checkboxId = `${name}-${index}`; // Unique ID for each checkbox
        return (
          <div key={service} className={styles.checkboxWrapper}>
            {/* Ensure label uses htmlFor attribute pointing to input ID */}
            <label htmlFor={checkboxId} className={styles.checkboxLabel}>
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    value={service}
                    id={checkboxId}
                    checked={field.value.includes(service)}
                    onChange={() => {
                      const newServices = field.value.includes(service)
                        ? field.value.filter((s) => s !== service)
                        : [...field.value, service];
                      field.onChange(newServices);
                    }}
                    name={name}
                    autoComplete="off"
                  />
                )}
              />
              {service}
            </label>
          </div>
        );
      })}
    </div>
  </div>
);

export default CheckboxGroup;