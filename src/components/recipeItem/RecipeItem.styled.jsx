import styled from "styled-components";

export const Item = styled.li`

    &:not(:first-child){
        margin-left: 30px;
    }
`

export const DishDetails = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    background-color: #fff;

    border-radius: 40px;
    
`

export const Image = styled.img`
    border-radius: 25px;
`
export const Title = styled.h2`
    font-size: 18px;
    text-align: center;
`

export const Info = styled.p`
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: 14px;

    margin-left: 5px;
`