import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { baseURL } from "api/baseURL";
import ErrorMessage from "../../components/ErrorMessage";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import SuccessMessage from "../../components/SuccessMessage";
import Result from "../../components/Result";
import SubmitButton from "components/SubmitButton";
import { motion } from "framer-motion";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import {
  containerVariants,
  fluidEnteringVariants
} from "../../motion/motionVariants";
import styles from "./leasing.module.scss";
import AppModal from "components/Modal";
import AppToast from "components/AppToast";

function Leasing() {
  const [result, setResult] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

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
  const postCalculation = async ({ monthDuration, amountFinanced }) => {
    setLoading(true);
    await axios
      .post(`${baseURL}/calculate`, {
        monthDuration,
        amountFinanced
      })
      .then((res) => {
        const { data } = res;
        setResult(data);
        return setLoading(false);
      })
      .catch((err) => {
        AppToast(
          "Something went wrong... Please check your internet connection and try again.",
          "error"
        );
        return setLoading(false);
      });
  };
  const handleSubmit = async (values) => {
    const finalInfo = { ...values, monthlyFee: parseFloat(result) };
    setLoading(true);
    setConfirmationModal(false);

    await axios
      .post(`${baseURL}/submit`, finalInfo)
      .then((res) => {
        setTimeout(() => {
          setSuccess(false);
          setResult(undefined);
        }, 3000);
        setLoading(false);
        return setSuccess(true);
      })
      .catch((err) => {
        AppToast(
          "Something went wrong... Please check your internet connection and try again.",
          "error"
        );
        return setLoading(false);
      });
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
            onSubmit={(values) => postCalculation(values)}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <>
                <Form>
                  <InputField
                    type="number"
                    name="monthDuration"
                    placeholder="Months"
                    min={6}
                    max={48}
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
                    min={600}
                    max={100000}
                    step={0.01}
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
                  <Button
                    type="submit"
                    name="Calculate"
                    loading={loading}
                    icon={faCalculator}
                  />
                  <SubmitButton
                    values={values}
                    errors={errors}
                    loading={loading}
                    onSubmit={() => setConfirmationModal(true)}
                  />
                </Form>
                <AppModal
                  openModal={confirmationModal}
                  onCloseModal={() => setConfirmationModal(false)}
                  onSubmit={handleSubmit}
                  values={values}
                />
              </>
            )}
          </Formik>
        </>
      )}
    </motion.div>
  );
}

export default Leasing;
