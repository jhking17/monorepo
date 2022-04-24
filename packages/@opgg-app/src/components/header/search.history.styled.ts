import styled from "styled-components";
import { Tabs, Tab } from "@mui/material";

type StyledProps = {
    $active?: boolean;
    $selected?: boolean;
    $btnType?: string;
    $favorite?: boolean;
};

export const historyBox = styled.div`
    display: ${(props: StyledProps) => (props.$active ? "flex" : "none")};
    align-items: center;
    width: 100%;
    height: auto;
    background-color: white;
    box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
`;

export const historyTabs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const historyTabBtnBlock = styled.div`
    height: 40px;
    ${props => props.theme.flex.center};
    flex-direction: row;
`;

export const historyTabBtn = styled.div`
    width: 50%;
    height: 100%;
    ${props => props.theme.flex.center};
    ${(props: StyledProps) =>
        props.$selected
            ? `
        background-color : white;
        color: rgb(74, 74, 74);
    `
            : `
        background-color: rgb(227, 227, 227);
        color: rgb(156, 156, 156);
    `};
    cursor: pointer;
`;

export const historyTab = styled.div`
    display: ${(props: StyledProps) => (props.$selected ? "flex" : "none")};
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
`;

export const historyBlankBlock = styled.div`
    ${props => props.theme.flex.center};
    padding: 40px 0;
    img {
        width: 16px;
        height: 16px;
    }
    div{
        width : 80%;
        text-align : center;
    }
    flex-direction : column;
    gap : 20px;
`;

export const historyList = styled.div`
    ${props => props.theme.flex.center};
    flex-direction: column;
    width: 100%;
`;

export const historyItem = styled.div`
    ${props => props.theme.flex.center};
    width: 90%;
    padding: 8px 0;
    height: auto;
    gap: 4px;
`;

export const historyItemText = styled.div`
    flex: 1;
    text-align: left;
    cursor: pointer;
`;

export const historyItemBtn = styled.div`
    width: 16px;
    height: 16px;
    background-image: ${(props: StyledProps) =>
        props.$btnType == "favorite"
            ? props.$favorite
                ? "url(https://s-lol-web.op.gg/images/icon/icon-favorite-on.png)"
                : "url(https://s-lol-web.op.gg/images/icon/icon-favorite-off.png)"
            : "url(https://s-lol-web.op.gg/images/site/icon-history-delete.png?v=1650634188774)"};
    cursor: pointer;
`;
