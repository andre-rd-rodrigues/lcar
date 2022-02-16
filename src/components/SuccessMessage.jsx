import { motion } from "framer-motion";
import {
  containerVariants,
  fluidEnteringVariants
} from "motion/motionVariants";
import React from "react";
import Lottie from "react-lottie";
import successLottie from "assets/lotties/success.json";
import styles from "./successmessage.module.scss";

function SuccessMessage() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <motion.div variants={containerVariants} className={styles.success}>
      <Lottie options={defaultOptions} height={300} width={300} />
      <motion.h2 variants={fluidEnteringVariants}>Success!</motion.h2>
      <motion.p variants={fluidEnteringVariants}>
        Your leasing has been submitted successfully
      </motion.p>
    </motion.div>
  );
}

export default SuccessMessage;
