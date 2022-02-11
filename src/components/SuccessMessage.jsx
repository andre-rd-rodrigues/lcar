import React from "react";
import Lottie from "react-lottie";
import successLottie from "../assets/lotties/success.json";
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
    <div className={styles.success}>
      <Lottie options={defaultOptions} height={300} width={300} />
      <h1>Success!</h1>
      <p>Your leasing has been submitted successfully</p>
    </div>
  );
}

export default SuccessMessage;
