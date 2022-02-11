import React from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./button.module.scss";

function Button(props) {
  const { name, loading } = props;
  const size = 20;
  return (
    <button {...props} className={styles.button}>
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
    </button>
  );
}

export default Button;
