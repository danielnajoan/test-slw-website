import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button2 } from '../../../globalStyles';
import {
    StorySec,
    StoryHeader,
    UnderlineSec,
    HeaderTitle,
    HeadlineUnderline,
    StoryHeadline,
    StoryParagraph,
    ButtonHeadline,
    ViewTeam,
} from './OurStory.elements';

const OurStory = ({ headerTitle, headline, paragraph1,paragraph2, paragraph3, btnHeadline, buttonLabel}) => {
    return (
        <>
            <StoryHeader>
                <HeaderTitle>{headerTitle}</HeaderTitle>
                <UnderlineSec>
                    <HeadlineUnderline></HeadlineUnderline>
                </UnderlineSec>
            </StoryHeader>
            <StorySec>
                <Container>
                    <StoryHeadline>{headline}</StoryHeadline>
                    <StoryParagraph>{paragraph1}</StoryParagraph>
                    <StoryParagraph>{paragraph2}</StoryParagraph>
                    <StoryParagraph>{paragraph3}</StoryParagraph>
                    <ViewTeam>
                        <ButtonHeadline>{btnHeadline}</ButtonHeadline>
                        <Link to='/'>
                            <Button2 primary={true} colLabel={true} btnBorder={true} btnPadding={true} fontSize={true}>
                            {buttonLabel}
                            </Button2>
                        </Link>
                    </ViewTeam>
                </Container>
            </StorySec>
        </>
    )
};

export default memo(OurStory);