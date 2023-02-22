import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const OpenModalButton = styled(motion.button)`
border: none;
background: none;
`;
const animatedOpenButton = ({ children, handlClick }) => {
  return (
    <OpenModalButton
      onClick={handlClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </OpenModalButton>
  );
};

export default animatedOpenButton;