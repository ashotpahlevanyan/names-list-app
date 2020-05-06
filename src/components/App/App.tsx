import React from 'react';
import { Container, Paper } from '@material-ui/core';

import './App.scss';
import { Header } from '../Header';
import { List } from '../List';
import { NameForm } from '../NameForm';
import { Message } from '../Message';
import { Picker } from '../Picker';
import { useAppHook } from './useAppHook';
import { namesList as initialState } from '../../data/data';

export const App = () => {
  const {
    noNamesMessage,
    allDuplicatesMessage,
    names,
    prev,
    next,
    isAllDuplicate,
    handleNameCreate,
    handleNameRemove,
    handlePick,
  } = useAppHook(initialState);

  return (
    <Container maxWidth="lg">
      <Paper elevation={3}>
        <Header />
        <Picker handlePickClick={handlePick} previous={prev} next={next} />
        <NameForm names={names} handleNameCreate={handleNameCreate} />
        {isAllDuplicate ? <Message {...allDuplicatesMessage} /> : null}
        {names.length > 0 ? (
          <List names={names} handleNameRemove={handleNameRemove} />
        ) : (
          <Message {...noNamesMessage} />
        )}
      </Paper>
    </Container>
  );
};
