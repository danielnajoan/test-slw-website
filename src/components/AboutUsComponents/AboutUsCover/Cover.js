import React, {memo}from 'react';
import { Container } from '../../../globalStyles';
import {
  BaseSection,
  Row,
  Headline,
  Wrapper,
  Subheadline,
  Description,
} from './Cover.elements';

function Cover({
  headline,
  subheadline,
  description,
}) {
  return (
    <>
      <BaseSection>
          <Container>
              <Row>
                  <Headline>{headline}</Headline>
                  <Wrapper>
                    <Subheadline>{subheadline}</Subheadline>
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