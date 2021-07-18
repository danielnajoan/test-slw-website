import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const Column = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  @media screen and (max-width: 541px) {
    width: 30%;
  }
  @media screen and (max-width: 415px) {
    width: 40%;
  }
`;

export const ButtonLink = styled(HashLink)`
  @media screen and (max-width: 415px) {
    width: 100%;
  }
`;

export const ButtonRedirect = styled.a`
  text-decoration: none;
  @media screen and (max-width: 415px) {
    width: 100%;
  }
`;
