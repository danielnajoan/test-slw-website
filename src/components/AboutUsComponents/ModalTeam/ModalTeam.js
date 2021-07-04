import React, { memo, useRef, useEffect, useCallback } from "react";
import CardTeamMember from "../CardTeamMember/CardTeamMember";
import {
  ModalBackground,
  ModalBaseSection,
  ModalCardSection,
  ModalHeader,
  Column,
  ImageContainer,
  Image,
  Title,
  Subtitle,
  Paragraph,
  CloseModalButton,
} from "./ModalTeam.elements";

const ModalTeam = ({ data, showModal, setSelectedId }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    console.log(modalRef.current);
    console.log(e.target);
    e.stopPropagation();
    if (modalRef.current === e.target) {
      setSelectedId(null);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setSelectedId(null);
        console.log("I pressed");
      }
    },
    [setSelectedId, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const { imageUrl, imageName, title, subtitle, paragraph, teamMembersData } =
    data.modalData;

  return (
    <>
      <ModalBackground onClick={closeModal} ref={modalRef}></ModalBackground>
      <ModalBaseSection>
        <ModalCardSection>
          <ModalHeader>
            <Column colWidth={true}>
              <ImageContainer>
                <Image src={imageUrl} alt={imageName} />
              </ImageContainer>
            </Column>
            <Column colWidth={false}>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </Column>
            <Paragraph>{paragraph}</Paragraph>
          </ModalHeader>
          {teamMembersData && teamMembersData.length !== 0 && (
            <CardTeamMember teamMembersData={teamMembersData} />
          )}
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setSelectedId(null)}
          />
        </ModalCardSection>
      </ModalBaseSection>
    </>
  );
};

export default memo(ModalTeam);
