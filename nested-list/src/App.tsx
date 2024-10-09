import React from 'react';
import Home from './pages/Home';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
};

export default App;