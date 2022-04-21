/******************************************************************************
 * components
 * useAutoComplete
 * last modify : jh.jeong
 ******************************************************************************/
import { useState, useEffect } from "react";
import * as S from "./styled";
import D from "../../style/default.styled";

interface HeaderCompProps {}

export const HeaderComp: React.FunctionComponent<HeaderCompProps> = props => {
    return (
        <S.headerContainer>
            <D.innerContainer $section="header">
                <S.searchBox>
                    <S.searchInput placeholder="소환사명,챔피언…" className="Text-Style-7" />
                    <S.searchBtn>.GG</S.searchBtn>
                </S.searchBox>
            </D.innerContainer>
        </S.headerContainer>
    );
};
