import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
    width: 10px;
    height: 10px;
    border: 1px solid white;
    background-color: black;
`

const Row = styled.div`
    height:10px;
    border-top:1px solid white;
    border-left:1px solid white;
    border-right: 1px solid white;
    display: flex;
    flex-direction: row;
`

const BoardRow = ({row}) => {
    return (
        <Row>
            {row.map((cell, i)=> <Cell key={i}/>)}
        </Row>
    )
}

export default BoardRow;

