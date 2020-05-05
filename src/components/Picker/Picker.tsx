import React from 'react';
import { Button } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';

import { PickerInterface } from '../Interfaces';

import { StyledPicker, StyledText } from './styled';

export const Picker = (props: PickerInterface) => {
    return (
        <StyledPicker>
            <StyledText className="previous">
                Previous: {props.previous}
            </StyledText>
            <StyledText className="next">
                Next: {props.next}
            </StyledText>
            <Button
                variant="contained"
                color="primary"
                startIcon={<CloudUpload />}
                onClick={props.handlePickClick}
            >
                Pick A Name
            </Button>
        </StyledPicker>
    )
};
