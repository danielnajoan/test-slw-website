import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const ModalBackground = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const ModalBaseSection = styled.div`
  display: flex;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -45%);
  overflow: auto; /* Enable scroll if needed */
  justify-content: center;
  align-items: center;
`;

export const ModalCardSection = styled.div`
  width: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  padding: 2rem;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
`;

export const Column = styled.div`
  width: ${({ colWidth }) => (colWidth ? "22.5%" : "77.5%")};
  margin-bottom: 1rem;
  @media screen and (max-width: 550px) {
    text-align: center;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  text-align: center;
  border-radius: 50%;
`;

export const Image = styled.img`
  border-radius: 50%;
  border: 0;
  max-width: 150px;
  max-height: 150px;
  @media screen and (max-width: 550px) {
    max-width: 80px;
  }
  @media screen and (max-width: 320px) {
    max-width: 60px;
  }
`;

export const Title = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 172.3%;
  letter-spacing: 0.01em;
  color: #091f6b;
`;

export const Subtitle = styled.h4`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 172.3%;
  letter-spacing: 0.02em;
  color: #091f6b;
`;

export const Paragraph = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: rgba(0, 0, 0, 0.43);
  margin-bottom: 1rem;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
