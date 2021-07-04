import React, { memo, useState } from "react";
import { Container } from "../../../globalStyles";
import ModalTeam from "../ModalTeam/ModalTeam";
import {
  BaseSection,
  Headline,
  Subheadline,
  CardContainer,
  CardBaseSection,
  CardInfo,
  CardHeadline,
} from "./SLWTeam.elements";

const SLWTeam = ({ headline, subheadline, teamsData }) => {
  // const [cards] = useState(teamsData);
  // const [showModal, setShowModal] = useState(false);
  // const openModalTeam = () => {
  //     setShowModal(prev=> !prev)
  // };
  // const [activeModalData, setActiveModalData] = useState({
  //     title: 'Ini title',
  // });
  // const handleClick = (modalTitle) => {
  //     // openModalTeam();
  //     // setActiveModalData(modalTitle);
  // }

  const [selectedId, setSelectedId] = useState(null);

  const selectedData =
    teamsData && teamsData.find((teamData) => teamData.id === selectedId);
  const showModal = selectedId !== null;
  return (
    <>
      <BaseSection>
        <Container>
          <Headline>{headline}</Headline>
          <Subheadline>{subheadline}</Subheadline>
          <CardContainer>
            {teamsData &&
              teamsData.map((teamData) => {
                const { id, cardHeadline } = teamData;
                return (
                  <CardBaseSection key={id} onClick={() => setSelectedId(id)}>
                    <CardInfo>
                      <CardHeadline>{cardHeadline}</CardHeadline>
                    </CardInfo>
                  </CardBaseSection>
                );
              })}
            {showModal ? (
              <ModalTeam
                data={selectedData}
                showModal={showModal}
                setSelectedId={setSelectedId}
              />
            ) : null}
          </CardContainer>
        </Container>
      </BaseSection>
    </>
  );
};

export default memo(SLWTeam);
