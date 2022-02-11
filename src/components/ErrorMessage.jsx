import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./errormessage.module.scss";
import { dropDownVariants, exitErrorMessages } from "motion/motionVariants";

function ErrorMessage({ message, touched }) {
  return (
    <AnimatePresence>
      {message && touched ? (
        <motion.div
          variants={dropDownVariants}
          exit={exitErrorMessages}
          className={styles.error}
        >
          <p>{message}</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ErrorMessage;
