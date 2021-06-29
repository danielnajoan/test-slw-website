import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-display: optional;
  font-family: Nunito;
  font-style: normal;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Button1 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? '#3858CC' : 'transparent')};
  color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : '#4962BB')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #3858CC' : '2px solid #4962BB')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : '10px 34px'))};
  font-size: ${({ btnFontSize }) => (btnFontSize ? '18px' : '18px')};
  border-radius: 100px;
  width: 400px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  
  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) => (primary ? 'transparent' : '#3858CC')};
    color: ${({ colLabel }) => (colLabel ? '#4962BB' : '#FFFFFF')};
    border: ${({ btnBorder }) => (btnBorder ? '2px solid #4962BB' : '2px solid #3858CC')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
    padding: 8px 30px;
  }
`;
//For Cover & Statistic Section
export const Button2 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? '#FF565E' : 'none')};
  color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : 'none')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #FF565E' : 'none')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : 'none'))};
  font-size: ${({ btnFontSize }) => (btnFontSize ? '18px' : 'none')};
  border-radius: 100px;
  width: ${({ btnWidth }) => (btnWidth ? '200px' : 'auto')};
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  
  &:hover {
    box-sizing: border-box;
    background-color: ${({ primary }) => (primary ? 'transparent' : 'none')};
    color: ${({ colLabel }) => (colLabel ? '#FF866B' : 'none')};
    border: ${({ btnBorder }) => (btnBorder ? '2px solid #FF866B' : 'none')};
    padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : 'none'))};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
//For Cover Section
export const Button3 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? '#3858CC' : '#FFFFFF')};
  color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : '#091F6B')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #3858CC' : '2px solid #FFFFFF')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : '10px 34px'))};
  font-size: ${({ btnFontSize }) => (btnFontSize ? '1.2rem' : '1.2rem')};
  border-radius: 100px;
  width: auto;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

//For Card Community in HomePage
export const Button4 = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  line-height: 170.3%;
  background-color: ${({ primary }) => (primary ? '#6C8FFF' : 'none')};
  color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : 'none')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #6C8FFF' : 'none')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : 'none'))};
  font-size: ${({ btnFontSize }) => (btnFontSize ? '13px' : 'none')};
  border-radius: 12px;
  width: auto;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    box-sizing: border-box;
    background-color: ${({ primary }) => (primary ? 'transparent' : 'none')};
    color: ${({ colLabel }) => (colLabel ? '#6C8FFF' : 'none')};
    border: ${({ btnBorder }) => (btnBorder ? '2px solid #6C8FFF' : 'none')};
    padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : 'none'))};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    font-size:0.7rem;
    padding: 0.05rem;
  }
`;

//For Information Section
export const Button5 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? '#FFFFFF' : 'transparent')};
  color: ${({ colLabel }) => (colLabel ? '#1B3EBC' : '#FFFFFF')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #FFFFFF' : '2px solid #FFFFFF')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : '10px 34px'))};
  font-size: ${({ btnFontSize }) => (btnFontSize ? '18px' : '18px')};
  border-radius: 100px;
  width: 250px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    box-sizing: border-box;
    background-color: ${({ primary }) => (primary ? '#1B3EBC' : '#FFFFFF')};
    color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : '#1B3EBC')};
    border: ${({ btnBorder }) => (btnBorder ? '2px solid #1B3EBC' : '2px solid #FFFFFF')};
    padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : '10px 34px'))};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

//For Advisor Section
export const Button6 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? 'transparent' : '#3858CC')};
  color: ${({ colLabel }) => (colLabel ? '#3858CC' : '#FFFFFF')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #3858CC' : '2px solid #3858CC')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : '10px 34px'))};
  font-size: ${({ btnFontSize }) => (btnFontSize ? '18px' : '18px')};
  border-radius: 100px;
  width: 220px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#5373E3' : 'transparent')};
    color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : '#3858CC')};
    border: ${({ btnBorder }) => (btnBorder ? '2px solid #5373E3' : '2px solid #5373E3')};
  }
`;

//For Community Cover Section
export const Button7 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? 'transparent' : 'none')};
  color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : 'none')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #FFFFFF' : 'none')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : 'none'))};
  font-size: ${({ btnFontSize }) => (btnFontSize ? '18px' : 'none')};
  border-radius: 33px;
  width: 220px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#FFFFFF' : 'none')};
    color: ${({ colLabel }) => (colLabel ? '#3858CC' : 'none')};
    border: ${({ btnBorder }) => (btnBorder ? '2px solid #FFFFFF' : 'none')};
    padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : 'none'))};
  }
`;

//For Community Creative Content and Discord Section
export const Button8 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? '#325EFC' : 'none')};
  color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : 'none')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #325EFC' : 'none')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : 'none'))};
  font-size: ${({ btnFontSize }) => (btnFontSize ? '18px' : 'none')};
  border-radius: 33px;
  width: auto;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? 'transparent' : 'none')};
    color: ${({ colLabel }) => (colLabel ? '#325EFC' : 'none')};
    border: ${({ btnBorder }) => (btnBorder ? '2px solid #325EFC' : 'none')};
    padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : 'none'))};
  }
`;

//For Community Information Section
export const Button9 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? '#FFFFFF' : 'transparent')};
  color: ${({ colLabel }) => (colLabel ? '#5F71AC' : '#FFFFFF')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #FFFFFF' : '2px solid #FFFFFF')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : '10px 34px'))};
  font-size: ${({ btnFontSize }) => (btnFontSize ? '18px' : '18px')};
  border-radius: 6px;
  width: 300px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? 'transparent' : '#FFFFFF')};
    color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : '#5F71AC')};
    border: ${({ btnBorder }) => (btnBorder ? '2px solid #FFFFFF' : '2px solid #FFFFFF')};
  }
`;

//For Home Event Section
export const Button10 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? 'transparent' : 'none')};
  color: ${({ colLabel }) => (colLabel ? '#5F71AC' : 'none')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #5F71AC' : 'none')};
  padding: ${({ btnPadding }) => ((btnPadding ? '5px 34px' : 'none'))};
  font-size: ${({ btnFontSize }) => (btnFontSize ? '18px' : 'none')};
  border-radius: 100px;
  width: auto;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#5F71AC' : 'none')};
    color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : 'none')};
    border: ${({ btnBorder }) => (btnBorder ? '2px solid #5F71AC' : 'none')};
  }
`;

export default GlobalStyle;