/******************************************************************************
 * components
 * useAutoComplete
 * last modify : jh.jeong
 ******************************************************************************/
import React, { useState, useEffect } from "react";
import * as S from "./styled";
import D from "../../style/default.styled";
import { SearchHistoryComp } from "./search.history";
import { SearchKeywordComp } from "./search.keyword";

interface HeaderCompProps {}

export const HeaderComp: React.FunctionComponent<HeaderCompProps> = props => {
    const [isFocus, setIsFocus] = useState<boolean>(true);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {}, [searchText]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const isTyping = searchText.length > 0;
    return (
        <S.headerContainer>
            <D.innerContainer $section="header">
                <S.searchBox>
                    <S.searchInput
                        // onFocus={setIsFocus.bind(this, true)}
                        // onBlur={setIsFocus.bind(this, false)}
                        onChange={onChangeSearch}
                        placeholder="소환사명,챔피언…"
                        className="Text-Style-7"
                    />
                    <S.searchContainer>
                        <SearchHistoryComp active={isFocus && !isTyping} />
                        <SearchKeywordComp active={isFocus && isTyping} />
                    </S.searchContainer>
                    <S.searchBtn>.GG</S.searchBtn>
                </S.searchBox>
            </D.innerContainer>
        </S.headerContainer>
    );
};
