import React, { useCallback, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AnimatedNumbers from "react-animated-numbers";
import styles from "./leasing.module.scss";
import { Link } from "react-router-dom";

function Leasing() {
  const [result, setResult] = useState(undefined);
  const [success, setSuccess] = useState(false);

  const LeasingSchema = Yup.object().shape({
    monthDuration: Yup.number()
      .min(6, "6 months minimum")
      .max(48, "48 months maximum")
      .required("Required"),
    amountFinanced: Yup.number()
      .min(10000, "The minimum finance is 10.000€")
      .max(100000, "The maximum finance is 100.000€")
      .required("Required")
  });

  //HTTP request
  const handleCalculation = ({ monthDuration, amountFinanced }) => {
    //Round number
    const roundedValue = parseFloat(amountFinanced / monthDuration).toFixed(2);
    return setResult(roundedValue);
  };
  const handleSubmit = (values) => {
    const finalInfo = { ...values, monthlyFee: parseFloat(result) };
    return console.log(finalInfo);
  };

  //Render
  const SubmitButton = (errors, values) => {
    return Object.keys(errors).length === 0 &&
      values.monthDuration > 0 &&
      values.amountFinanced > 0 ? (
      <button onClick={() => handleSubmit(values)}>Submit</button>
    ) : null;
  };

  return (
    <div className={styles.leasing}>
      <h1>Leasing simulator:</h1>
      <Formik
        initialValues={{
          monthDuration: "",
          amountFinanced: ""
        }}
        validationSchema={LeasingSchema}
        onSubmit={(values) => handleCalculation(values)}
      >
        {({ errors, touched, values }) => (
          <Form>
            <label htmlFor="form-monthly-duration">Monthly duration:</label>
            <Field
              type="number"
              name="monthDuration"
              placeholder="Months"
              id="form-monthly-duration"
            />
            {errors.monthDuration && touched.monthDuration ? (
              <div>{errors.monthDuration}</div>
            ) : null}
            <label htmlFor="form-amount-financed">Amount financed:</label>
            <Field
              type="number"
              name="amountFinanced"
              placeholder="Amount (€)"
              id="form-amount-financed"
            />
            {errors.amountFinanced && touched.amountFinanced ? (
              <div>{errors.amountFinanced}</div>
            ) : null}
            {result && (
              <>
                <label htmlFor="result">Monthly fee:</label>
                <p>{result} €</p>
              </>
            )}
            <button type="submit">Calculate</button>
            {SubmitButton(errors, values)}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Leasing;
