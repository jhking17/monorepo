import styled from "styled-components";

type StyledProps = {
    $section?: string;
    $selected?: boolean;
    $flex?: number;
    $textLeft?: boolean;
    $winPercent?: number;
    $left?: boolean;
};

export const mostInfoContainer = styled.div`
    ${props => props.theme.flex.center};
    width: 90%;
    height: auto;
    background-color: ${props => props.theme.colors.gray};
    margin: 20px 5% 10px 5%;
    flex-direction: column;
    gap: 100px;
`;

export const mostInfoBox = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid #cdd2d2;
    ${props => props.theme.flex.center};
`;

export const champTabs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const champTabBtnBlock = styled.div`
    height: 40px;
    ${props => props.theme.flex.center};
    flex-direction: row;
`;

export const champTabBtn = styled.div`
    width: 50%;
    height: 100%;
    ${props => props.theme.flex.center};
    font-size: 12px;
    ${(props: StyledProps) =>
        props.$selected
            ? `
        background-color : transparent;
        color: #5e5e5e;
        font-weight : bold;
    `
            : `
        background-color: #f2f2f2;
        color: rgb(156, 156, 156);
    `};
    cursor: pointer;
`;

export const champTab = styled.div`
    display: ${(props: StyledProps) => (props.$selected ? "flex" : "none")};
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
`;

export const champList = styled.div`
    ${props => props.theme.flex.center};
    flex-direction: column;
    width: 100%;
`;

export const champItem = styled.div`
    ${props => props.theme.flex.center};
    width: 90%;
    padding: 8px 0;
    height: auto;
    gap: 3px;
    border-bottom : 1px solid #d8d8d8;
`;

export const champItemIcon = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 12px;
`;

export const champItemTextBlock = styled.div`
    flex: ${(props: StyledProps) => props.$flex};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props: StyledProps) => (props.$textLeft ? "flex-start" : "center")};
    gap: 4px;
`;

export const champItemTextFirst = styled.div`
    color: #5e5e5e;
    font-size: 13px;
    font-weight: bold;
`;

export const champItemTextSecond = styled.div`
    color: #879292;
    font-size: 11px;
`;

export const champItemIconSmall = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 6px;
`;

export const champItemGraphBlock = styled.div`
    flex: ${(props: StyledProps) => props.$flex};
    ${props => props.theme.flex.center};
    height: 24px;
`;

export const champItemGraph = styled.div`
    ${props => props.theme.flex.center};
    width: 100%;
    height: 100%;
    background: ${(props: StyledProps) =>
        props.$winPercent
            ? `linear-gradient(to left, #1f8ecd ${100 - props.$winPercent}%, #ee5a52 ${
                  100 - props.$winPercent
              }%)`
            : `linear-gradient(to left, #1f8ecd 50%, #ee5a52 50%)`};
    position: relative;
`;

export const champItemGraphValue = styled.div`
    position: absolute;
    ${(props: StyledProps) => (props.$left ? `left : 4px` : `right : 4px`)};
    font-size: 12px;
    color: white;
`;
