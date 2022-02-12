import React from "react";
import { Modal } from "react-responsive-modal";
import { motion } from "framer-motion";
import { buttonHoverVariants } from "motion/motionVariants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-modal/styles.css";
import styles from "./appmodal.module.scss";

function AppModal({ openModal, onCloseModal, onSubmit, values }) {
  return (
    <Modal
      open={openModal}
      classNames={{ modal: styles.modal }}
      onClose={onCloseModal}
      center
    >
      <FontAwesomeIcon icon={faCircleCheck} color="#64c08e" size="4x" />
      <h2>Confirmation</h2>
      <p>
        This action <b>will submit and start the leasing process</b>. Are you
        sure you want to submit?
      </p>
      <motion.button
        whileHover={buttonHoverVariants}
        id="modal-cancel-button"
        onClick={onCloseModal}
      >
        Cancel
      </motion.button>
      <motion.button
        whileHover={buttonHoverVariants}
        id="modal-confirm-button"
        onClick={() => onSubmit(values)}
      >
        Confirm
      </motion.button>
    </Modal>
  );
}

export default AppModal;
