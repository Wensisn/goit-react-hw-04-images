import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-content: center
  justify-content: center
  align-items: center
`;
const ModalContainer = styled(motion.div)`
  width: 608px;
  height: 570px;
  background-color: white;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  position: relative;
  z-index: 80;
`;
const CloseButton = styled.svg`
  width: 44px;
  height: 44px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
  background-color: #FDF7F2;
  border-radius: 40px;
`;

export const ButtonCancelModal = styled.button`
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
  }
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 }
};
const containerVariant = {
  initial: { transition: { type: 'spring' } },
  isOpen: { top: '"50%' },
  exit: { top: '-50%' }
};
const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer variants={containerVariant}>
            <CloseButton
              onClick={handleClose}
              xmlns='http://www.w3.org/2000/svg'
              viewBox="0 0 20.39 20.39"
            >
              <title>close</title>
              <line
                x1='19.39'
                y1='19.39'
                x2='1'
                y2='1'
                fill='#FDF7F2'
                stroke='#000000'
                strokeLinecap='round'
                strokeMiterlimit='10'
                strokeWidth='2'
              />
              <line
                x1='1'
                y1='19.39'
                x2='19.39'
                y2='1'
                fill='#FDF7F2'
                stroke='#000000'
                strokeLinecap='round'
                strokeMiterlimit='10'
                strokeWidth='2'
              />
            </CloseButton>
            {children}
            
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;