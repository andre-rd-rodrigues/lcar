import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dropDownVariants } from "motion/motionVariants";
import { TailSpin } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const SubmitButton = ({ values, errors, loading, onSubmit }) => {
  const buttonRef = useRef(null);
  const size = 20;

  //Disable button when loading
  const disableButtonToggle = () => {
    if (buttonRef.current) {
      return loading
        ? buttonRef.current.setAttribute("disabled", "disabled")
        : buttonRef.current.removeAttribute("disabled");
    }
  };

  //Lifecycle
  useEffect(() => {
    disableButtonToggle();
  }, [loading]);

  return (
    <AnimatePresence>
      {values.monthDuration > 0 &&
        values.amountFinanced > 0 &&
        Object.keys(errors).length === 0 && (
          <motion.button
            variants={dropDownVariants}
            whileHover={{
              scale: 1.07
            }}
            id="submit-btn"
            ref={buttonRef}
            onClick={onSubmit}
          >
            {loading ? (
              <TailSpin
                type="Oval"
                color="white"
                height={size}
                width={size}
                ariaLabel="loading"
              />
            ) : (
              <>
                <FontAwesomeIcon
                  style={{ margin: "0 10px" }}
                  icon={faPaperPlane}
                  color="white"
                  size="1x"
                />
                Submit
              </>
            )}
          </motion.button>
        )}
    </AnimatePresence>
  );
};
export default SubmitButton;
