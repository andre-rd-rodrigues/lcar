import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AnimatedNumbers from "react-animated-numbers";
import ErrorMessage from "../../components/ErrorMessage";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import SuccessMessage from "../../components/SuccessMessage";
import Result from "../../components/Result";
import styles from "./leasing.module.scss";
import { motion } from "framer-motion";
import {
  containerVariants,
  fluidEnteringVariants,
  nextVariants
} from "../../motion/motionVariants";

function Leasing() {
  const [result, setResult] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  //Form schema
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
  });

  //HTTP request
  const handleCalculation = ({ monthDuration, amountFinanced }) => {
    setLoading(true);

    const roundedAmountFinanced = (
      Math.round(amountFinanced * 100) / 100
    ).toFixed(2);

    setResult(parseFloat(roundedAmountFinanced / monthDuration).toFixed(2));

    setLoading(false);
  };
  const handleSubmit = (values) => {
    const finalInfo = { ...values, monthlyFee: parseFloat(result) };
    setSuccess(true);
    setTimeout(() => window.location.reload(), 3000);
    return console.log(finalInfo);
  };

  //Render
  const SubmitButton = (props) => {
    const { values, errors } = props;

    return (
      !loading &&
      values.monthDuration > 0 &&
      values.amountFinanced > 0 &&
      Object.keys(errors).length === 0 && (
        <button onClick={() => handleSubmit(values)}>Submit</button>
      )
    );
  };

  return (
    <motion.div
      className={styles.leasing}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {success ? (
        <SuccessMessage />
      ) : (
        <>
          <motion.h1 variants={fluidEnteringVariants}>
            Leasing simulator
          </motion.h1>
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
                <Result result={result} />
                <Button type="submit" name="Calculate" loading={loading} />
                <SubmitButton values={values} errors={errors} />
              </Form>
            )}
          </Formik>
        </>
      )}
    </motion.div>
  );
}

export default Leasing;
