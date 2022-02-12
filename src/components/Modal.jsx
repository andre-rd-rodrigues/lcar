import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import styles from "./appmodal.module.scss";
import { motion } from "framer-motion";
import { buttonHoverVariants } from "motion/motionVariants";

function AppModal({ openModal, onCloseModal, onSubmit, values }) {
  return (
    <Modal
      open={openModal}
      classNames={{ modal: styles.modal }}
      onClose={onCloseModal}
      center
    >
      <h2>Confirmation</h2>
      <p>
        This action will submit and start our leasing process. Are you sure you
        want to submit?
      </p>
      <motion.button
        whileHover={buttonHoverVariants}
        id="modal-confirm-button"
        onClick={() => onSubmit(values)}
      >
        Confirm
      </motion.button>
      <motion.button
        whileHover={buttonHoverVariants}
        id="modal-cancel-button"
        onClick={onCloseModal}
      >
        Cancel
      </motion.button>
    </Modal>
  );
}

export default AppModal;
