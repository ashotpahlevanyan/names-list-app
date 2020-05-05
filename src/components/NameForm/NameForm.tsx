import React, { useRef, useState } from 'react';
import shortid from  'shortid';

import { NameInterface, NameFormInterface } from '../Interfaces';
import { StyledForm, StyledInput } from './styled';

export const NameForm = (props: NameFormInterface) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const [formState, setFormState] = React.useState('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormState(event.target.value);
    }

    function handleInputEnter(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const newName: NameInterface = {
                id: shortid.generate(),
                text: formState
            };

            props.handleNameCreate(newName);

            setFormState('');

            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        }
    }

    return (
        <StyledForm>
            <StyledInput
                ref={inputRef}
                type="text"
                placeholder='Enter new name'
                onChange={(event: any) => handleInputChange(event)}
                onKeyPress={(event: any) => handleInputEnter(event)}
            />
        </StyledForm>
    );
};
