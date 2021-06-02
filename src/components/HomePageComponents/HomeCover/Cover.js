import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button3 } from '../../../globalStyles';
import {
  BaseSection,
  BaseCover,
  Column,
  TextWrapper,
  Headline,
  Subtitle,
} from './Cover.elements';

function Cover({
  headline,
  description,
  buttonLabel,
}) {
  return (
    <>
      <BaseSection>
        <BaseCover>
          <Container>
              <Column>
                <TextWrapper>
                  <Headline>{headline}</Headline>
                  <Subtitle>{description}</Subtitle>
                  <Link to='/'>
                    <Button3 primary={true} colLabel={true} btnBorder={true} btnPadding={true} fontSize={true}>
                      {buttonLabel}
                    </Button3>
                  </Link>
                </TextWrapper>
              </Column>
          </Container>
        </BaseCover>
      </BaseSection>
    </>
  );
}

export default memo(Cover);
