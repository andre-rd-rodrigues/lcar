import { motion } from "framer-motion";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import { fluidEnteringVariants } from "../motion/motionVariants";
import styles from "./button.module.scss";

function Button(props) {
  const { name, loading } = props;
  const size = 20;
  return (
    <motion.button
      {...props}
      className={styles.button}
      variants={fluidEnteringVariants}
      whileHover={{
        scale: 1.07
      }}
    >
      {loading ? (
        <TailSpin
          type="Oval"
          color="white"
          height={size}
          width={size}
          ariaLabel="loading"
        />
      ) : (
        name
      )}
    </motion.button>
  );
}

export default Button;
