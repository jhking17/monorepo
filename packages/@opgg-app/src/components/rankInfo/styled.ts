import styled from "styled-components";

type StyledProps = {
    $section?: string;
};

export const rankInfoContainer = styled.div`
    padding-top: 20px;
    ${props => props.theme.flex.center};
    flex-direction: column;
    width: 100%;
    height: auto;
    padding-bottom: 10px;
`;

export const rankBox = styled.div`
    width: 100%;
    ${props => props.theme.flex.center};
    justify-content : flex-start;
    flex-direction: row;
    background-color: white;
    border: 1px solid #cdd2d2;
    padding : 10px 0;
    margin-bottom : 10px;
`;

export const rankIcon = styled.img`
    width: 104px;
    height: 104px;
`;

export const rankInfoTextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
    flex : 1;
    padding-left : 10px;
`;

export const rankInfoTypeText = styled.div`
    color: #879292;
    font-size: 11px;
`;

export const rankInfoPosText = styled.div`
    color: #353a3a;
    font-size: 12px;
    b {
        font-weight: bold;
    }
`;

export const rankInfoTierText = styled.div`
    color: #1f8ecd;
    font-size: 15px;
    font-weight : bold;
`;

export const rankInfoPointText = styled.div`
    color: #879292;
    font-size: 12px;
    b {
        color: #555e5e;
        font-weight: bold;
    }
`;

export const rankInfoRateText = styled.div`
    color: #879292;
    font-size: 12px;
`;

export const rankIconSecond = styled.img`
    width: 64px;
    height: 64px;
    padding : 0 20px;
`;

export const rankInfoUnrankText = styled.div`
    color: #cdd2d2;
    font-size: 13px;
`;
