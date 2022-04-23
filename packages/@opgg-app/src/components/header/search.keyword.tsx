/******************************************************************************
 * components
 * useAutoComplete
 * last modify : jh.jeong
 ******************************************************************************/
import { useState, useEffect } from "react";
import * as S from "./search.keyword.styled";

interface SearchKeywordCompProps {
    active: boolean;
}

export const SearchKeywordComp: React.FunctionComponent<SearchKeywordCompProps> = props => {
    return (
        <S.historyBox $active={props.active}>
            <S.searchUserBlock>
                <S.searchUserIcon>
                    <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon6.jpg?image=q_auto&image=q_auto,f_webp,w_72&v=1650634188774" />
                </S.searchUserIcon>
                <S.searchUserTextBlock>
                    <S.searchUserName>Hide on bush</S.searchUserName>
                    <S.searchUserLevel>Challenger 1 - 716LP</S.searchUserLevel>
                </S.searchUserTextBlock>
            </S.searchUserBlock>
        </S.historyBox>
    );
};
