import { Field } from "formik";
import { motion } from "framer-motion";
import React from "react";
import { fluidEnteringVariants } from "../motion/motionVariants";
import styles from "./inputfield.module.scss";

function InputField(props) {
  const { id, label } = props;
  return (
    <motion.div className={styles.input} variants={fluidEnteringVariants}>
      <label htmlFor={id}>{label}</label>
      <Field {...props} />
    </motion.div>
  );
}

export default InputField;
