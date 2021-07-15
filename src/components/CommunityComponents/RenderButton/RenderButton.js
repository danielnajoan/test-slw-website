import React, { memo } from "react";
import { Button7 } from "../../../globalStyles";
import { Column, ButtonRedirect, ButtonLink } from "./RenderButton.elements";

const RenderButton = ({ id, urlButton, buttonLabel }) => {
  if (id !== 2) {
    return (
      <Column>
        <ButtonRedirect href={urlButton}>
          <Button7
            primary={true}
            colLabel={true}
            btnBorder={true}
            btnPadding={true}
            btnFontSize={true}
          >
            {buttonLabel}
          </Button7>
        </ButtonRedirect>
      </Column>
    );
  } else {
    return (
      <Column>
        <ButtonLink to={urlButton}>
          <Button7
            primary={true}
            colLabel={true}
            btnBorder={true}
            btnPadding={true}
            btnFontSize={true}
          >
            {buttonLabel}
          </Button7>
        </ButtonLink>
      </Column>
    );
  }
};

export default memo(RenderButton);
