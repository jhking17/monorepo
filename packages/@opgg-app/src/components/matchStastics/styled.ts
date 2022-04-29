import styled from "styled-components";

type StyledProps = {
    $active?: boolean;
    $loseRateDeg?: number;
};

export const matchStasticsContainer = styled.div`
    ${props => props.theme.flex.center};
    width: 100%;
    height: auto;
    flex-direction: column;
    border: 1px solid #cdd2d2;
    background-color: #ededed;
    min-width: 690px;
`;

export const matchTypeSelectBox = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    height: 36px;
    display: flex;
    gap: 20px;
    font-size: 12px;
    letter-spacing: 0;
`;

export const vLine = styled.div`
    width: 100%;
    background-color: #cdd2d2;
    height: 1px;
`;

export const hLine = styled.div`
    width: 1px;
    background-color: #cdd2d2;
    height: 100%;
`;

export const matchTypeSelectBtn = styled.div`
    ${props => props.theme.flex.center};
    height: 96%;
    color: ${(props: StyledProps) => (props.$active ? "#1f8ecd" : "#555555")};
    border-bottom: ${(props: StyledProps) => (props.$active ? "2px solid #1f8ecd" : "none")};
    font-size: 12px;
    cursor: pointer;
    &:hover {
        font-size: 13px;
    }
    &:first-child {
        padding-left: 20px;
    }
`;

export const matchInfoContainer = styled.div`
    ${props => props.theme.flex.center};
    width: 100%;
    height: 240px;
`;

export const matchInfoRecordBox = styled.div`
    flex: 5;
    ${props => props.theme.flex.center};
    height: 100%;
    gap: 20px;
    max-width: 300px;
`;

export const matchInfoRecordHalf = styled.div`
    ${props => props.theme.flex.center};
    flex: 1;
    flex-direction: column;
    height: 100%;
`;

export const matchInfoRecordText = styled.div`
    font-size: 12px;
    color: #666666;
    padding-bottom: 12px;
`;

export const matchInfoRecordDonut = styled.div`
    ${props => props.theme.flex.center};
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background: ${(props: StyledProps) =>
        props.$loseRateDeg != undefined
            ? `
        conic-gradient(
            #ee5a52 0deg ${props.$loseRateDeg}deg,
            #1f8ecd ${props.$loseRateDeg}deg 360deg
        )
    `
            : "none"};
`;

export const matchInfoRecordDonutCenter = styled.div`
    ${props => props.theme.flex.center};
    position: absolute;
    background-color: #ededed;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    span {
        font-size: 14px;
        font-weight: bold;
        color: #555555;
    }
`;

export const matchInfoRecordKDABox = styled.div`
    ${props => props.theme.flex.center};
    font-size: 11px;
    gap: 2px;
    margin-bottom: 10px;
    font-weight: bold;
    #b {
        color: #333333;
    }
    #g {
        color: #999999;
    }
    #r {
        color: #c6443e;
    }
`;

export const matchInfoRecordPercentBox = styled.div`
    ${props => props.theme.flex.center};
    font-size: 16px;
    gap: 2px;
    #b {
        color: #333333;
    }
    #g {
        color: #2daf7f;
        font-weight: bold;
    }
    #r {
        color: #c6443e;
    }
`;

//
export const matchInfoChampBox = styled.div`
    flex: 4;
    height: 100%;
    ${props => props.theme.flex.center};
    flex-direction: column;
    margin-left: 6px;
    gap: 6px;
    max-width: 270px;
`;

export const matchInfoChampItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24%;
    gap: 6px;
`;

export const matchInfoChampItemIcon = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 12px;
`;

export const matchInfoChampItemTextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const matchInfoChampItemName = styled.div`
    font-size: 14px;
    color: ${(props: StyledProps) => (props.$active === false ? "#999999" : "#333333")};
`;

export const matchInfoChampItemText = styled.div`
    display: flex;
    font-size: 11px;
    gap: 2px;
    #r {
        font-weight: bold;
        color: #c6443e;
    }
    #b {
        color: #555555;
    }
    #y {
        font-weight: bold;
        color: #e19205;
    }
    #s {
        color: #cdd2d2;
    }
`;

//
export const matchInfoPositionBox = styled.div`
    flex: 3;
    ${props => props.theme.flex.center};
    flex-direction: column;
    height: 100%;
    margin-left: 16px;
    max-width: 240px;
    gap : 20px;
`;

export const matchInfoPositionText = styled.div`
    font-size : 12px;
    color : #666666;
    width : 100%;
    padding-left : 2px;
`;

export const matchInfoPositionDetail = styled.div`
    ${props => props.theme.flex.center};
    justify-content : flex-start;
    width : 100%;
    height : 24%;
`;

export const matchInfoPositionIcon = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 4px;
`;

export const matchInfoPositionTextBox = styled.div`
    display : flex;
    justify-content : center;
    align-items : flex-start;
    flex-direction : column;
    height : 100%;
    gap : 3px;
`;

export const matchInfoPositionTextTop = styled.div`
    color : #333333;
    font-size : 14px;
`;

export const matchInfoPositionTextBtm = styled.div`
    display : flex;
    color : #333333;
    font-size : 11px;
    gap : 6px;
    #grey {
        font-weight : bold;
        color : #666666;
    }
    #blue {
        font-weight : bold;
        color : #1f8ecd;
    }
    #s {
        color : #cdd2d2;
    }
`;
