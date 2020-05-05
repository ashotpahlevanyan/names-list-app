import React from 'react';

import { MessageInterface } from '../Interfaces';
import { StyledMessage } from './styled';

export const Message = (props: MessageInterface) => {
    return (
        <StyledMessage className={props.type}>
            {props.text}
        </StyledMessage>
    )
};
