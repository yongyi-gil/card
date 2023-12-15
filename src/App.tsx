import React from 'react';
import styled from 'styled-components';

import Container from './component/card/Container';

import './App.css';

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  return (
    <AppDiv>
      <Container
        img="/img/card/pika.png"
        type="diagonal"
      />
      <Container
        img="/img/card/charmander.png"
        type="hologram-1"
      />
      <Container
        img="/img/card/squiretle.png"
        type="diagonal"
      />
      <Container
        img="/img/card/bulbasaur.png"
        type="hologram-2"
      />
    </AppDiv>
  );
}

export default App;
