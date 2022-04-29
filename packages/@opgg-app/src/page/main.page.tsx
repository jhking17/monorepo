import React from "react";
import { HeaderComp, UserInfoComp, RankInfoComp, MostInfoComp, MatchStasticsComp } from "../components";
import * as S from "../style/main.styled";
import D from "../style/default.styled";

interface MainPageProps {}

const TestPage: React.FunctionComponent<MainPageProps> = (props: MainPageProps) => {
    return (
        <>
            <HeaderComp />
            <S.contentContainer>
                <UserInfoComp />
                <S.line />
                <D.contentContainer>
                    <D.innerContainer style={{display : "flex", gap : "10px"}}>
                        <S.leftBox>
                            <RankInfoComp />
                            <MostInfoComp />
                        </S.leftBox>
                        <S.rightBox>
                            <MatchStasticsComp />
                            <div>전체 솔로게임 자유랭크.....</div>
                        </S.rightBox>
                    </D.innerContainer>
                </D.contentContainer>
            </S.contentContainer>
        </>
    );
};

export default TestPage;
