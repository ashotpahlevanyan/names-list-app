import React, {useEffect, useState} from 'react';

import { MessageTypesInterface, NameInterface } from '../Interfaces';

const noNamesMessage = {
    type: MessageTypesInterface.info,
    text: 'No Names, please add some...'
};

const allDuplicatesMessage = {
    type: MessageTypesInterface.error,
    text: 'Seems all Names are duplicates, please add more...'
};

export const useAppHook = (initialState: NameInterface[]) => {
    const [names, setNames] = React.useState<NameInterface[]>(initialState);
    const [prev, setPrev] = useState('');
    const [next, setNext] = useState('');
    const [isAllDuplicate, setIsAllDuplicate] = useState(false);

    useEffect(() => {
        const current = names.length !== 0 ?
            names[Math.floor(Math.random() * names.length)].text
            : '____EMPTY___';
        console.log(current, prev, next, isAllDuplicate);
    }, [prev, next, names, isAllDuplicate]);

    const handleNameCreate = (name: NameInterface) => {
        const newNamesState: NameInterface[] = [...names];
        const trimmedText = name.text.trim();
        if(trimmedText !== '') {
            name.text = trimmedText;
            newNamesState.unshift(name);
            setNames(newNamesState);
        }
        setIsAllDuplicate(false);
    };

    const handleNameRemove = (id: string) => {
        const newNamesState: NameInterface[] = names.filter((todo: NameInterface) => todo.id !== id);
        setNames(newNamesState)
    };

    const pickRandom = () => {
        return names.length !== 0 ?
            names[Math.floor(Math.random() * names.length)].text
            :
            '';
    };

    const handlePick = () => {
        if(!isAllDuplicate) {
            let current = pickRandom();
            if(current !== '') {
                let count = 0;
                const maxCount = Math.max(names.length, 100);

                while (current === next && count < maxCount) {
                    current = pickRandom();
                    count++;
                }

                if(count === maxCount) {
                    setIsAllDuplicate(true);
                }

                if (current !== next) {
                    if(next !== '') {
                        setPrev(next);
                    }
                    setNext(current);
                    setIsAllDuplicate(false);
                }
            }
        }
    };

    return {
        noNamesMessage,
        allDuplicatesMessage,
        names,
        prev,
        next,
        isAllDuplicate,
        handleNameCreate,
        handleNameRemove,
        handlePick
    }
};


