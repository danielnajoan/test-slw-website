import React, {memo} from 'react';
import { Container } from '../../../globalStyles';
import {
    StatisticsSec,
    StatisticsRow,
    StatisticsColumn,
    TextWrapper,
    Headline,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './Statistics.elements';


function Statistics({
    headline,
    colPosition,
    textAlign,
    colPadding,
    heading,
    description,
    start,
    imgUrl,
    alt,
    width,
    height,
}) {
    return (
        <>
            <StatisticsSec>
                <Container>
                <Headline>{headline}</Headline>
                <StatisticsRow colPosition={colPosition}>
                    <StatisticsColumn>
                        <TextWrapper textAlign={textAlign} colPadding={colPadding}>
                            <Heading>{heading}</Heading>
                            <Subtitle>{description}</Subtitle>
                        </TextWrapper>
                    </StatisticsColumn>
                    <StatisticsColumn>
                        <ImgWrapper start={start}>
                            <Img src={imgUrl} alt={alt} width={width} height={height}/>
                        </ImgWrapper>
                    </StatisticsColumn>
                </StatisticsRow>
                </Container>
            </StatisticsSec>
        </>
    )
}

export default memo(Statistics);
