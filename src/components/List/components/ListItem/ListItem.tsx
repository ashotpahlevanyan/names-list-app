import * as React from 'react';
import { DeleteOutlined } from '@material-ui/icons'

import { NameItemInterface } from '../../../Interfaces';
import { StyledItem, StyledText, StyledIconButton } from './styled';

export const ListItem = (props: NameItemInterface) => {
    return (
        <StyledItem>
            <StyledText>{props.name.text}</StyledText>
            <StyledIconButton
                className="item-remove"
                onClick={() => props.handleNameRemove(props.name.id)}>
                <DeleteOutlined />
            </StyledIconButton>
        </StyledItem>
    );
};

