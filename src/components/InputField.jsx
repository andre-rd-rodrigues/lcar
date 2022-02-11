import { Field } from "formik";
import React from "react";
import styles from "./inputfield.module.scss";

function InputField({ id, type, name, placeholder, label, handleChange }) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default InputField;
