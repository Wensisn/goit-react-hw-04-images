import React, { useState } from 'react';
import styled from 'styled-components';
import {
  PetsDataWrapper,
  TitleWrapper,
  MyPetsTitle,
  AddPetWrapper,
  AddPetText,
  AddPetBtn,
} from './PetsData.styled';

import {
  HeaderModal,
  TitleModal,
  MainModal,
  InputModal,
  LabelInput,
  FooterModal,
  ButtonModal,
} from './ModalStyle.styled'

import {
  HeaderModalSecond,
  MainModalSecond,
  FooterModalSecond,
  TextModal,
} from './ModalStyledSecond'

import { AddPetCrossIcon } from './AddPetCrossIcon';
import Modal from '../FetchImages/Modal';
import OpenModalButton from '../FetchImages/OpenModalButton';

import SecondModal from '../FetchImages/SecondModal';
import SecondOpenModalButton from '../FetchImages/SecondOpenModalButton';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 80px 0px;
`;

export const PetsData = () => {

  const [isOpen, toggle] = useState(false);
  const [isOpenSecond, toggleSecond] = useState(false);

  function handlOpenModal(open) {
    console.log('close modal');
    toggle(open);
  }

  function secondHandlOpenModal(open) {
    console.log('close modal');
    toggleSecond(open);
  }

  return (
    <PetsDataWrapper >
      <TitleWrapper>
        <MyPetsTitle>My pets:</MyPetsTitle>
        <AddPetWrapper>
          <AddPetText>
            Add pet
          </AddPetText>
          <OpenModalButton handlClick={() => handlOpenModal(true)}>
            <AddPetBtn >
              <AddPetCrossIcon />
            </AddPetBtn>
          </OpenModalButton>
          {isOpenSecond === false && (
          <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
            <ModalContent>
              <HeaderModal>
                <TitleModal>Add pet</TitleModal>
              </HeaderModal>
              <MainModal>
                <LabelInput>Name pet</LabelInput>
                <InputModal placeholder='Type name pet'></InputModal>
                <LabelInput>Date of birth</LabelInput>
                <InputModal placeholder='Type date of birth'></InputModal>
                <LabelInput>Breed</LabelInput>
                <InputModal placeholder='Type breed'></InputModal>
                <FooterModal>
                  <ButtonModal onClick={() => handlOpenModal(false)}>Cancel</ButtonModal>
                  <SecondOpenModalButton handlClick={() => secondHandlOpenModal(true)}>
                    Hext
                  </SecondOpenModalButton>
                </FooterModal>
              </MainModal>
            </ModalContent>
          </Modal>)}
          {isOpenSecond === true && (
            <SecondModal isOpenSecond={isOpenSecond} handleClose={() => secondHandlOpenModal(false)}>
              <ModalContent>
                <HeaderModalSecond>
                  <TitleModal>Add pet</TitleModal>
                </HeaderModalSecond>
                <MainModalSecond>
                  <TextModal>Add photo and some comments</TextModal>
                </MainModalSecond>
                <FooterModalSecond>
                  <ButtonModal onClick={() => secondHandlOpenModal(false)}>Back</ButtonModal>
                  <ButtonModal>Next</ButtonModal>
                </FooterModalSecond>
              </ModalContent>
            </SecondModal>
          )}
        </AddPetWrapper>
      </TitleWrapper>
    </PetsDataWrapper>
  );
};
