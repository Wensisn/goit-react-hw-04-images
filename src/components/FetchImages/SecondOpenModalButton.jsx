import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const OpenModalButton = styled(motion.button)`  
display: flex;
align-items: center;
justify-content: center;
border-radius: 40px;
margin-top: 40px;
border: 2px solid #f59256;
background: #ffffff;
color: #111111;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 19px;
width: 180px;
height: 44px;

:hover {
  color: #ffffff;
  background-color: #f59256;
}`;
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