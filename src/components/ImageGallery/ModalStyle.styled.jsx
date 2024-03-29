import styled from 'styled-components';



export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleModal = styled.h1`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 49px;
color: #111111;
`;

export const MainModal = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

export const InputModal = styled.input`
box-sizing: border-box;
        width: 100%;
        height: 48px;
        margin-bottom: 10px;
        padding: 11px 10px 12px 16px;
        font-size: 16px;
        line-height: 26px;
    
        background: #FDF7F2;
        border: 1px solid rgba(245, 146, 86, 0.5);
        border-radius: 40px;
        border: 1px solid rgba(33, 33, 33, 0.2);
       
        transition: border  250ms cubic-bezier(0.4, 0, 0.2, 1);

        resize: none;
        cursor: pointer;
        display: flex;
        align-items: center;
`
export const LabelInput = styled.label`
color: #111111;
display: block;
margin-bottom: 5px;


font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 26px;

letter-spacing: 0.01em;
margin-top: 10px;
`

export const FooterModal = styled.div`
display: flex;
justify-content: space-around;
`

export const ButtonModal = styled.button`
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

