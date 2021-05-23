import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button3 } from '../../../globalStyles';
import {
  CoverSec,
  CoverColumn,
  TextWrapper,
  Heading,
  Subtitle,
} from './Cover.elements';

function Cover({
  headline,
  description,
  buttonLabel,
}) {
  return (
    <>
      <CoverSec>
          <Container>
              <CoverColumn>
                <TextWrapper>
                  <Heading>{headline}</Heading>
                  <Subtitle>{description}</Subtitle>
                  <Link to='/'>
                    <Button3 primary={true} colLabel={true} btnBorder={true} btnPadding={true} fontSize={true}>
                      {buttonLabel}
                    </Button3>
                  </Link>
                </TextWrapper>
              </CoverColumn>
          </Container>
      </CoverSec>
    </>
  );
}

export default memo(Cover);
