import React, { useEffect } from "react";
import styles from "./errormessage.module.scss";

function ErrorMessage({ message, touched }) {
  return message && touched ? (
    <div className={styles.error}>
      <p>{message}</p>
    </div>
  ) : null;
}

export default ErrorMessage;
