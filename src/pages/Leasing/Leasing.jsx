import React, { useCallback, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AnimatedNumbers from "react-animated-numbers";
import styles from "./leasing.module.scss";
import ErrorMessage from "../../components/ErrorMessage";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

function Leasing() {
  const [result, setResult] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const digitsOnly = (value) =>
    /^\d*[\.{1}\d*]\d*$/.test(value) || value.length === 0;

  const LeasingSchema = Yup.object().shape({
    monthDuration: Yup.number()
      .min(6, "6 months minimum")
      .max(48, "48 months maximum")
      .required("Required")
      .test(
        "noDecimals",
        "Decimals are not allowed.",
        (number) => number % 1 === 0
      ),

    amountFinanced: Yup.number()
      .min(10000, "The minimum finance is 10K€")
      .max(100000, "The maximum finance is 100K€")
      .required("Required")
      .test(
        "noDecimals",
        "Decimals are not allowed.",
        (number) => number % 1 === 0
      )
  });

  //HTTP request
  const handleCalculation = ({ monthDuration, amountFinanced }) => {
    setLoading(true);

    setResult(parseFloat(amountFinanced / monthDuration).toFixed(2));

    setLoading(false);
  };
  const handleSubmit = (values) => {
    const finalInfo = { ...values, monthlyFee: parseFloat(result) };
    return console.log(finalInfo);
  };

  //Render
  const SubmitButton = (errors, values) => {
    return Object.keys(errors).length === 0 &&
      values.monthDuration > 0 &&
      values.amountFinanced > 0 &&
      !loading ? (
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
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <InputField
              type="number"
              name="monthDuration"
              placeholder="Months"
              id="form-monthly-duration"
              label="Monthly duration:"
              handleChange={(e) =>
                setFieldValue("monthDuration", e.target.value)
              }
            />
            <ErrorMessage
              message={errors.monthDuration}
              touched={touched.monthDuration}
            />

            <InputField
              type="number"
              name="amountFinanced"
              placeholder="Amount (€)"
              id="form-amount-financed"
              label="Amount financed:"
              handleChange={(e) =>
                setFieldValue("amountFinanced", e.target.value)
              }
            />
            <ErrorMessage
              message={errors.amountFinanced}
              touched={touched.amountFinanced}
            />
            {result && (
              <>
                <label htmlFor="result">Monthly fee:</label>
                <p>{result} €</p>
              </>
            )}
            <Button type="submit" name="Calculate" loading={loading} />
            {SubmitButton(errors, values)}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Leasing;
