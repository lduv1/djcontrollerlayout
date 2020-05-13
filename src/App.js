import React, {useState} from 'react';
import './App.css';
import Board from './components/Board';
import { isFirefox, isMobile } from 'react-device-detect';
import styled from '@emotion/styled/macro';

const Main = styled.div`
    padding: 10vh 10vw;
    h2{
      text-align: center;
      margin: auto;
    }
    button{
      display: block;
      height: 4rem;
      width: auto;
      margin: 4rem auto;
      background-color: lightblue;
      border-radius: 4px;
    }
`;

function App() {

  const [accepted, setAccepted] = useState(false);

  // return (
  //   <Board />
  // )
  return (accepted || (isFirefox && !isMobile))?
      <Board/> :
      (<Main>
        <h2>This page is designed to be viewed in Firefox on desktop and uses features that may not display correctly in other browsers</h2>
        <button onClick={() => setAccepted(true)}><h3>I understand and wish to continue</h3></button>
      </Main>)
  ;
}

export default App;
