import styled from "styled-components";
import { Button } from "@mui/material";

type StyledProps = {
    $active?: boolean;
};

export const headerContainer = styled.div`
    ${props => props.theme.flex.center};
    width: 100%;
    height: 97px;
    background-color: ${props => props.theme.colors.azure};
    padding-bottom: 10px;
`;

export const searchBox = styled.div`
    ${props => props.theme.flex.center};
    position: absolute;
    right: 20px;
    bottom: 0;
    width: 320px;
    height: 97px;
    border-radius: 2px;
    height: 32px;
    padding: 0 10px;
    background-color: white;
`;

export const searchInput = styled.input`
    border: none;
    width: 80%;
    height: 90%;
    padding: 0;
    &:focus {
        outline: none;
    }
`;

export const searchBtn = styled.div`
    ${props => props.theme.flex.center};
    ${props => props.theme.settings.noneSelect};
    width: 20%;
    font-weight : bold;
    color: ${props => props.theme.colors.azure};
    cursor: pointer;
`;
