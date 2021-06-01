import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
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
  font-size: ${({ fontSize }) => (fontSize ? '18px' : '18px')};
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
  font-size: ${({ fontSize }) => (fontSize ? '18px' : 'none')};
  border-radius: 100px;
  width: ${({ width }) => (width ? '200px' : 'auto')};
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
//For Information Section
export const Button3 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? '#3858CC' : '#FFFFFF')};
  color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : '#091F6B')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #3858CC' : '2px solid #FFFFFF')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : '10px 34px'))};
  font-size: ${({ fontSize }) => (fontSize ? '18px' : '18px')};
  border-radius: 100px;
  width: auto;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Button4 = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  line-height: 170.3%;
  background-color: ${({ primary }) => (primary ? '#6C8FFF' : 'none')};
  color: ${({ colLabel }) => (colLabel ? '#FFFFFF' : 'none')};
  border: ${({ btnBorder }) => (btnBorder ? '2px solid #6C8FFF' : 'none')};
  padding: ${({ btnPadding }) => ((btnPadding ? '10px 34px' : 'none'))};
  font-size: ${({ fontSize }) => (fontSize ? '13px' : 'none')};
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
`;
export default GlobalStyle;
