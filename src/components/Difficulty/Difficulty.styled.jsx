import styled from "styled-components";

export const DifficultyList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;
    
    margin-top: 10px;
`

export const DifficultyContainer = styled.div`
    background-color: #fff;
    border-radius: 30px;

    margin-top: 20px;

    padding: 12px;
`

export const DifficultyTitle = styled.h2`
    font-size: 18px;

    margin: 0;
`

export const DifficultyListItem = styled.li`
    background-color: ${({activeDiff})=> activeDiff ? '#fa6f70' : '#fff7d9'};

    padding:0 12px;

    border-radius: 20px;
`