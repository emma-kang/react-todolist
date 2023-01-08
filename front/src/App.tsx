import React from 'react';
import './App.css';
import {Container} from "@mui/material";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="App">
      <Container>
        <MainContainer />
      </Container>
    </div>
  );
}

export default App;
