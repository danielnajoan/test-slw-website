import React, { memo, useState } from 'react';
import { Container } from '../../../globalStyles';
import ModalTeam from '../ModalTeam/ModalTeam';
import {
    BaseSection,
    Headline,
    Subtitle,
    CardContainer,
} from './SLWTeam.elements';

const SLWTeam = ({ headline, subtitle, teamsData }) => {
    const [cardData] = useState(teamsData);
    return (
        <>
            <BaseSection>
                <Container>
                    <Headline>{headline}</Headline>
                    <Subtitle>{subtitle}</Subtitle>
                    <CardContainer>
                        <ModalTeam cards={cardData}/>
                    </CardContainer>
                </Container>
            </BaseSection>
        </>
    )
};

export default memo(SLWTeam);
