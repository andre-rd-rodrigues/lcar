import React from "react";
import AnimatedNumber from "animated-number-react";
import styles from "./result.module.scss";

function Result({ result }) {
  return result ? (
    <>
      <label>Monthly payment:</label>
      <AnimatedNumber
        className={styles.result}
        value={result}
        formatValue={(result) => `${Number(result).toFixed(2)} €`}
        duration={800}
      />
    </>
  ) : null;
}

export default Result;
