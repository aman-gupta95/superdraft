import styled from 'styled-components';

export const OuterCircleDiv = styled.div `
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: linear-gradient(to right, orange, red);
    margin: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
`

export const InnerCircleDiv = styled.div `
    position: absolute;
    width: 40px; height: 40px;
    top: 5px; left: 5px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
`
