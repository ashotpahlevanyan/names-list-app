import React from 'react';
import { Card } from '@material-ui/core';

import { StyledList } from './styled';
import { ListItem } from './components/ListItem';
import { NameListInterface } from '../Interfaces';

export const List = (props: NameListInterface) => {
  return (
    <Card>
      <StyledList>
        {props.names.map((name) => (
          <li key={name.id}>
            <ListItem
              name={name}
              handleNameRemove={props.handleNameRemove}
            />
          </li>
        ))}
      </StyledList>
    </Card>
  );
};
