import React, {memo} from 'react';
import { coverObj, valuesObj, storyObj } from './Data';
import { AboutUsCover, Values, OurStory } from '../../components';

function AboutUs() {
    return (
        <>
            <AboutUsCover {...coverObj}/>
            <Values {...valuesObj}/>
            <OurStory {...storyObj}/>
        </>
    )
}

export default memo(AboutUs);
