import styled from "styled-components";

type StyledProps = {
    $active?: boolean;
};

export const historyBox = styled.div`
    display: ${(props: StyledProps) => (props.$active ? "flex" : "none")};
    align-items: center;
    width: 100%;
    height: auto;
    background-color: white;
    box-shadow: rgb(0 0 0 / 50%) 0px 2px 4px 0px;
`;

export const searchUserBlock = styled.div`
    ${props => props.theme.flex.center};
    width: 100%;
    height: 56px;
    padding: 4px 16px;
    gap: 14px;
    cursor: pointer;
    &:hover {
        background-color: #eaf5fe;
    }
`;

export const searchUserIcon = styled.div`
    ${props => props.theme.flex.center};
    width: 36px;
    height: 36px;
    img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        background-color: rgb(0, 0, 0);
    }
`;

export const searchUserTextBlock = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export const searchUserName = styled.div`
    font-size: 14px;
    line-height: 1.43;
    color: rgb(68, 81, 92);
    text-align: left;
`;

export const searchUserLevel = styled.div`
    line-height: 14px;
    font-size: 12px;
    color: rgb(102, 102, 102);
    text-align: left;
`;
