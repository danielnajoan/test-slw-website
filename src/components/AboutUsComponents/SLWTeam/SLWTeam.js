import React, { memo, useState } from 'react';
import { Container } from '../../../globalStyles';
import ModalTeam from '../ModalTeam/ModalTeam';
import {
    BaseSection,
    Headline,
    Subheadline,
    CardContainer,
} from './SLWTeam.elements';

const SLWTeam = ({ headline, subheadline, teamsData }) => {
    const [cardData] = useState(teamsData);
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <Subheadline>{subheadline}</Subheadline>
                    <CardContainer>
                        <ModalTeam cards={cardData}/>
                    </CardContainer>
                </Container>
            </BaseSection>
        </>
    )
};

export default memo(SLWTeam);
