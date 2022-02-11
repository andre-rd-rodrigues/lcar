import { Field } from "formik";
import { motion } from "framer-motion";
import React from "react";
import { fluidEnteringVariants } from "../motion/motionVariants";
import styles from "./inputfield.module.scss";

function InputField({
  id,
  type,
  name,
  placeholder,
  label,
  handleChange,
  max,
  min
}) {
  return (
    <motion.div className={styles.input} variants={fluidEnteringVariants}>
      <label htmlFor={id}>{label}</label>
      <Field
        max={max}
        min={min}
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        onChange={(e) => handleChange(e)}
      />
    </motion.div>
  );
}

export default InputField;
