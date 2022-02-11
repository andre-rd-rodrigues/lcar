import React from "react";
import styles from "./result.module.scss";

function Result({ result }) {
  return result ? (
    <>
      <label htmlFor="result">Monthly fee:</label>
      <p className={styles.result}>{result} €</p>
    </>
  ) : null;
}

export default Result;
