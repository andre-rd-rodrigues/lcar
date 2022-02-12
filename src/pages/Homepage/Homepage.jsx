import React from "react";
import styles from "./homepage.module.scss";
import car from "assets/images/car.png";
import { motion } from "framer-motion";
import {
  containerVariants,
  fluidEnteringVariants,
  scaleEnteringVariants,
  buttonHoverVariants
} from "motion/motionVariants";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.homepage}
    >
      <div id="homepage-title-div">
        <motion.h1 variants={fluidEnteringVariants}>
          Looking to save more on a leasing car?
        </motion.h1>
        <motion.hr variants={fluidEnteringVariants} />
        <motion.p variants={fluidEnteringVariants}>
          Discover how much you're going to spend monthly with our leasing
          simulator.
        </motion.p>

        <Link to="/simulator">
          <motion.button
            variants={fluidEnteringVariants}
            whileHover={buttonHoverVariants}
          >
            Get Started
          </motion.button>
        </Link>
      </div>
      <div id="homepage-car-div">
        <motion.img
          variants={scaleEnteringVariants}
          src={car}
          alt="Leasing car"
        />
        <div className={styles.svgContainer}>
          <motion.svg
            variants={scaleEnteringVariants}
            height="400"
            width="400"
            preserveAspectRatio="xMinYMin meet"
          >
            <circle cx="200" cy="200" r="200" fill="#fe6b35" />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;
