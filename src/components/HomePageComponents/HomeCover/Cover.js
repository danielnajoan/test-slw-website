import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button3 } from '../../../globalStyles';
import {
  BaseSection,
  BaseCover,
  Column,
  TextWrapper,
  Headline,
  Subheadline,
} from './Cover.elements';

function Cover({
  headline,
  subheadline,
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
                  <Subheadline>{subheadline}</Subheadline>
                  <Link to='/'>
                    <Button3 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
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
