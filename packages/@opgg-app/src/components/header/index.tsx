/******************************************************************************
 * components
 * useAutoComplete
 * last modify : jh.jeong
 ******************************************************************************/
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchKeywordUsers, SearchUser, GetMostInfo, GetMatches, GetMatchDetail } from "../../common/action";
import { reducerState } from "../../common";
import * as S from "./styled";
import D from "../../style/default.styled";
import { SearchHistoryComp } from "./search.history";
import { SearchKeywordComp } from "./search.keyword";

interface HeaderCompProps {}

var searchTimer: NodeJS.Timeout | undefined = undefined;
export const HeaderComp: React.FunctionComponent<HeaderCompProps> = props => {
    const dispatch = useDispatch();
    const searched = useSelector((state: reducerState) => state.search.searched);
    const matches = useSelector((state: reducerState)=> state.search.matches);
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        if(searched){
            dispatch(GetMostInfo(searched.name));
            dispatch(GetMatches(searched.name));
        }
    }, [searched]);

    useEffect(() => {
        if(matches.length > 0){
            for(var match of matches){
                dispatch(GetMatchDetail(searched.name, match.gameId));
            }
        }
    }, [matches]);

    useEffect(() => {
        if (searchText.length > 0) {
            // timeout
            if (searchTimer) clearTimeout(searchTimer);
            searchTimer = setTimeout(() => {
                dispatch(SearchKeywordUsers(searchText));
            }, 500);
            return () => {
                if (searchTimer) clearTimeout(searchTimer);
            };
        }
    }, [searchText]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const onKeyupSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearch(true);
        }
    };

    const isTyping = searchText.length > 0;
    const onSearch = async (entered: boolean) => {
        if (isTyping) await dispatch(SearchUser(searchText, entered));
    };

    return (
        <S.headerContainer>
            <D.innerContainer $section="header">
                <S.searchBox
                    tabIndex={100}
                    onFocus={setIsFocus.bind(this, true)}
                    onBlur={setIsFocus.bind(this, false)}
                >
                    <S.searchInput
                        onChange={onChangeSearch}
                        onKeyUp={onKeyupSearch}
                        placeholder="소환사명,챔피언…"
                        className="Text-Style-7"
                    />
                    <S.searchContainer>
                        <SearchHistoryComp active={isFocus && !isTyping} />
                        <SearchKeywordComp active={isFocus && isTyping} />
                    </S.searchContainer>
                    <S.searchBtn onClick={onSearch.bind(this, true)}>.GG</S.searchBtn>
                </S.searchBox>
            </D.innerContainer>
        </S.headerContainer>
    );
};
