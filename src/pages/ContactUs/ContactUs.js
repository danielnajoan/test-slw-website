import React, {memo} from 'react';
import { formObj, infoPartnerObj } from './Data';
import { ContactForm, InfoPartner} from '../../components';

function ContactUs() {
    return (
        <>
            <ContactForm {...formObj}/>
            <InfoPartner {...infoPartnerObj}/>
        </>
    )
}

export default memo(ContactUs);
