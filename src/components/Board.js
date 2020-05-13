import React from 'react';
import styled from '@emotion/styled/macro';
import Table from './Table';
import Controller from './Controller';

const Main = styled.main`
    display: grid;
    grid-template-columns: 2vw 96vw 2vw;
    grid-template-rows: 2vh 96vh 2vh;

    >div {
        grid-column: 2/3;
        grid-row: 2/3;
    }
`;

const Deck = styled.div`
    border-radius: 2px;
    box-shadow: 1px 1px 8px #222;
    background-image: linear-gradient(to bottom left, #aaa, #222);
    display: grid;
    grid-template-columns: 4fr 5fr 4fr;
    grid-template-rows: 100%;

`;

function Board() {
  return (
    <Main>
        <Deck>
            <Table side="left"/>
            <Controller/>
            <Table side="right"/>
        </Deck>
    </Main>
  );
}

export default Board;
