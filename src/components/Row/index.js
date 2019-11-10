import React from "react";
import styled from "styled-components";

const RowDiv = styled.div`
    height: 10px;
    display: flex;
    flex-direction: row;
`;

const CellDiv = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${props => (props.hasSnake ? "yellow" : "blue")};
    border: 1px solid white;
`;
const Row = ({ row }) => {
    return (
        <RowDiv>
            {row.map((eaCell, i) => {
                return <CellDiv hasSnake={eaCell.hasSnake} key={i}></CellDiv>;
            })}
        </RowDiv>
    );
};

export default Row;
