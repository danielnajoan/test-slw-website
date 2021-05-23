import React, {memo}from 'react';
import { Container } from '../../../globalStyles';
import {
  BaseSection,
  Row,
  Headline,
  Wrapper,
  Subtitle,
  Description,
} from './Cover.elements';

function Cover({
  headline,
  subtitle,
  description,
}) {
  return (
    <>
      <BaseSection>
          <Container>
              <Row>
                  <Headline>{headline}</Headline>
                  <Wrapper>
                    <Subtitle>{subtitle}</Subtitle>
                  </Wrapper>
                  <Wrapper>
                    <Description>{description}</Description>
                  </Wrapper>  
              </Row>
          </Container>
      </BaseSection>
    </>
  );
}

export default memo(Cover);