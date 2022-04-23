import React from "react";
import { HeaderComp } from "../components";
import * as S from "../style/main.styled";

interface MainPageProps {}

const TestPage: React.FunctionComponent<MainPageProps> = (props: MainPageProps) => {
    return (
        <>
            <HeaderComp />
            <S.contentContainer>
                
            </S.contentContainer>
        </>
    );
};

export default TestPage;
