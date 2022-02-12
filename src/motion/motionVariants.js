export const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

export const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

export const fluidEnteringVariants = {
  hidden: {
    opacity: 0,
    x: "-15vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 1,
      duration: 1
    }
  }
};

export const scaleEnteringVariants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

export const dropDownVariants = {
  hidden: {
    opacity: 0,
    y: "10px"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 1,
      duration: 1
    }
  }
};

export const buttonHoverVariants = {
  scale: 1.06
};
