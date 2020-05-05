import React from 'react';
import { Container } from '@material-ui/core';

import './App.scss';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

function App() {
  return (
      <Container maxWidth="lg">
          <Header/>
          <Content />
          <Footer />
      </Container>
  );
}

export default App;
