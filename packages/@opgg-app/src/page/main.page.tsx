import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    HeaderComp,
    UserInfoComp,
    RankInfoComp,
    MostInfoComp,
    MatchStasticsComp,
    MatchHistoryComp,
} from "../components";
import { GetItemJsonData } from "../common/action";
import * as S from "../style/main.styled";
import D from "../style/default.styled";

interface MainPageProps {}

const TestPage: React.FunctionComponent<MainPageProps> = (props: MainPageProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetItemJsonData());
    }, []);
    
    return (
        <>
            <HeaderComp />
            <S.contentContainer>
                <UserInfoComp />
                <S.line />
                <D.contentContainer>
                    <D.innerContainer style={{ display: "flex", gap: "10px" }}>
                        <S.leftBox>
                            <RankInfoComp />
                            <MostInfoComp />
                        </S.leftBox>
                        <S.rightBox>
                            <MatchStasticsComp />
                            <MatchHistoryComp />
                        </S.rightBox>
                    </D.innerContainer>
                </D.contentContainer>
            </S.contentContainer>
        </>
    );
};

export default TestPage;
