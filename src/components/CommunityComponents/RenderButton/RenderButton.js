import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button7 } from '../../../globalStyles';
import {
    Column,
    Redirect,
} from './RenderButton.elements';

const RenderButton = ({ id, urlButton, buttonLabel }) => {
    if(id !==2 ){
        return(
            <Column>
                <Redirect href={urlButton}>
                    <Button7 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                    {buttonLabel}
                    </Button7>
                </Redirect>
            </Column>
        );
    }else{
        return(
            <Column>
                <Link to={urlButton}>
                    <Button7 primary={true} colLabel={true} btnBorder={true} btnPadding={true} btnFontSize={true}>
                    {buttonLabel}
                    </Button7>
                </Link>
            </Column>
        );
    }
};

export default memo(RenderButton);
