import styled from "styled-components";

type StyledProps = {
    $active?: boolean;
};

export const userInfoContainer = styled.div`
    padding-top : 20px;
    ${props => props.theme.flex.center};
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.gray};
    padding-bottom: 10px;
`;

export const prevTierBox = styled.div`
    ${props => props.theme.flex.center};
    justify-content: flex-start;
    flex-wrap : wrap;
    gap: 4px;
    width: 100%;
    height: auto;
    margin : 0 10px 20px 10px;
`;

export const prevTierItem = styled.div`
    ${props => props.theme.flex.center};
    width: fit-content;
    height: 20px;
    padding: 2px 6px;
    background: rgb(224, 227, 227);
    color: rgb(101, 112, 112);
    border: 1px solid rgb(206, 211, 211);
    border-radius: 3px;
    font-size : 11px;    
    b {
        font-weight: bold;
        margin-right : 2px;
    }
`;

export const userInfoBox = styled.div`
    ${props => props.theme.flex.center};
    align-items : flex-start;
    gap: 26px;
    margin : 0 10px;
`;

export const userIconBox = styled.div`
    ${props => props.theme.flex.center};
    height: 100%;
    position : relative;
`;

export const userIconBorder = styled.div`
    position: absolute;
    width: 120px;
    height: 120px;
    background-position: center bottom;
    background-repeat: no-repeat;
`;

export const userIconImg = styled.img`
    width: 100px;
    height: 100px;
`;

export const userIconLevelBox = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: -20px;
    margin-left: -22px;
    width: 44px;
    height: 24px;
    padding-top: 3px;
    box-sizing: border-box;
    line-height: 17px;
    font-family: Helvetica, AppleSDGothic, "Apple SD Gothic Neo", AppleGothic, Arial, Tahoma;
    font-size: 14px;
    text-align: center;
    color: rgb(234, 189, 86);
    background: url(https://s-lol-web.op.gg/static/images/site/summoner/bg-levelbox.png) 0% 0% /
        100%;
`;

export const userInfoTextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    gap : 4px;
`;

export const userInfoTextName = styled.div`
    color: #242929;
    font-size: 20px;
    font-weight : bold;
`;

export const userInfoTextRank = styled.div`
    color: #657070;
    font-size: 11px;
    b {
        font-weight: bold;
    }
`;
