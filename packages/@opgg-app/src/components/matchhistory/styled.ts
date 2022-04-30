import styled from "styled-components";

type StyledProps = {
    $result?: "win" | "lose" | "draw";
};

export const matchHistoryContainer = styled.div`
    ${props => props.theme.flex.center};
    width: 100%;
    min-width: 800px;
    height: auto;
    flex-direction: column;
    gap: 8px;
`;

export const matchHistoryItem = styled.div`
    ${props => props.theme.flex.center};
    width: 100%;
    height: 100px;
    border: 1px solid;
    background-color: ${(props: StyledProps) =>
        props.$result == "win" ? "#b0ceea" : props.$result == "lose" ? "#d6b5b2" : "#b6b6b6"};
    border-color: ${(props: StyledProps) =>
        props.$result == "win" ? "#a1b8cd" : props.$result == "lose" ? "#cb9e9a" : "#a7a7a7"};
`;

// simple
export const matchInfoSimple = styled.div`
    flex: 1.2;
    ${props => props.theme.flex.center};
    gap: 1px;
    flex-direction: column;
    margin: 0 10px;
    span {
        margin: 2px 0;
        font-size: 11px;
    }
    #typeText {
        color: #555555;
        font-weight: bold;
    }
    #timeText {
        color: #555555;
    }
    #gameLengthText {
        color: #555555;
        font-size: 11px;
    }
`;

export const matchInfoSimpleResultText = styled.span`
    color: ${(props: StyledProps) =>
        props.$result == "win" ? "#2c709b" : props.$result == "lose" ? "#d0021b" : "#000000"};
    font-size: 11px;
    font-weight: bold;
`;

export const matchInfoSimpleLine = styled.div`
    width: 80%;
    height: 1px;
    background-color: ${(props: StyledProps) =>
        props.$result == "win" ? "#94b9d6" : props.$result == "lose" ? "#d0a6a5" : "#94b9d6"};
`;
//
// champ&spell
export const matchInfoUserBox = styled.div`
    flex: 2;
    ${props => props.theme.flex.center};
    gap: 4px;
    flex-direction: column;
    margin: 0 10px 0 0;
`;

export const matchInfoUserContent = styled.div`
    ${props => props.theme.flex.center};
    flex-direction: row;
    height: 60%;
    gap: 2px;
`;

export const matchInfoUserChampIcon = styled.div`
    flex: 1;
    ${props => props.theme.flex.center};
    justify-content: flex-end;
    img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
    }
`;

export const matchInfoUserAbility = styled.div`
    flex: 1;
    height: 60%;
    ${props => props.theme.flex.center};
    flex-wrap: wrap;
    gap: 2px;
    #rune {
        border-radius: 50%;
    }
    img {
        width: 33%;
        height: auto;
        border-radius: 2px;
    }
`;

export const matchInfoUserChampName = styled.div`
    color: #555555;
    font-size: 11px;
    margin-top: 4px;
`;
//
// kda
export const matchInfoKdaBox = styled.div`
    flex: 1.5;
    ${props => props.theme.flex.center};
    gap: 6px;
    flex-direction: column;
    margin: 0 10px;
`;

export const matchInfoKdaText = styled.div`
    ${props => props.theme.flex.center};
    flex-direction: row;
    gap: 2px;
    font-size: 15px;
    color: #555e5e;
    font-weight: bold;
    #r {
        color: #d0021b;
    }
    #g {
        color: #879292;
    }
`;

export const matchInfoKdaPointText = styled.div`
    ${props => props.theme.flex.center};
    flex-direction: row;
    gap: 2px;
    font-weight: bold;
    font-size: 11px;
    #b {
        color: #333333;
    }
    #g {
        color: #555e5e;
    }
`;

export const matchInfoKdaBadge = styled.div`
    ${props => props.theme.flex.center};
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4px;
    width: 100%;
    div {
        width: auto;
        padding: 2px 6px;
        color: white;
        font-size: 10px;
        border-radius: 9px;
    }
    #r {
        background-color: #ec4f48;
        border: 1px solid #bf3b36;
    }
    #p {
        background-color: #8c51c5;
        border: 1px solid #7f3590;
    }
`;
//
// level & cs
export const matchInfoLevelBox = styled.div`
    flex: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin: 0 4px;
    div {
        font-size: 11px;
        letter-spacing: -0.42px;
        color: #555e5e;
    }
    #r {
        color: #d0021b;
    }
    #b {
        font-weight: bold;
        color: #333333;
    }
`;
//
// item
export const matchInfoItemBox = styled.div`
    flex: 2.2;
    ${props => props.theme.flex.center};
    flex-direction: column;
    gap: 4px;
    margin: 0 4px;
    padding-top: 6px;
    height: 100%;
`;

export const matchInfoItemList = styled.div`
    ${props => props.theme.flex.center};
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    gap: 2px;
    height: 70%;
`;

export const matchInfoItemImg = styled.div`
    ${props => props.theme.flex.center};
    width: 20%;
    height: 40%;
    background-color: ${(props: StyledProps) =>
        props.$result == "win" ? "#7aa5c3" : props.$result == "lose" ? "#cb9e9a" : "#979797"};
    img {
        border-radius: 2px;
        width: 100%;
    }
`;

export const matchInfoItemWard = styled.div`
    font-size: 11px;
`;
//
// Summoner Group
export const matchInfoSummonerBox = styled.div`
    flex: 4;
    height: 100%;
    ${props => props.theme.flex.center};
    flex-direction: row;
    gap: 8px;
    margin: 0 6px;
`;

export const matchInfoSummonerHalf = styled.div`
    flex: 1;
    ${props => props.theme.flex.center};
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
`;

export const matchInfoSummoner = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 16%;
    gap: 1px;
    img {
        width: 16px;
        height: 16px;
    }
    span {
        font-size: 11px;
        color: #555555;
    }
    cursor: pointer;
`;
//
export const matchInfoDetailArrowBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    width: auto;
    height: 100%;
    flex: 0.5;
    background-color: ${(props: StyledProps) =>
        props.$result == "win" ? "#7fb0e1" : props.$result == "lose" ? "#e89c95" : "#a7a7a7"};
    border: 1px solid;
    border-color: ${(props: StyledProps) =>
        props.$result == "win" ? "#549dc7" : props.$result == "lose" ? "#c8817c" : "#999999"};

    #arrow {
        box-sizing: border-box;
        height: 13px;
        width: 13px;
        border-style: solid;
        border-color: ${(props: StyledProps) =>
            props.$result == "win" ? "#04609e" : props.$result == "lose" ? "#c1433e" : "#555555"};
        border-width: 0px 1px 1px 0px;
        transform: rotate(45deg);
        margin-bottom: 10px;
    }

    cursor: pointer;
`;
