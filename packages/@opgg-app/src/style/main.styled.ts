import styled from "styled-components";

export const contentContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const line = styled.div`
    background-color : #d8d8d8;
    width : 100%;
    height: 1px;
    margin : 10px 0 12px 0;
`

export const contentBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`;

export const leftBox = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : flex-start;
    flex: 4;
    max-width : 360px;
    min-width : 300px;
    min-height : 870px;
`;

export const rightBox = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : flex-start;
    flex: 7;
    gap : 20px;
`;
