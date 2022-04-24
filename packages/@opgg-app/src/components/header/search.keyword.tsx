/******************************************************************************
 * components
 * useAutoComplete
 * last modify : jh.jeong
 ******************************************************************************/
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reducerState } from "../../common";
import { SearchUser } from "../../common/action";
import { SummonerInfo } from "../../common/reducer";
import * as S from "./search.keyword.styled";

interface SearchKeywordCompProps {
    active: boolean;
}

export const SearchKeywordComp: React.FunctionComponent<SearchKeywordCompProps> = props => {
    const dispatch = useDispatch();
    const searchSelector = useSelector((state: reducerState) => state.search);
    const onClickUser = async (name: string) => {
        await dispatch(SearchUser(name, true));
    };

    const searchKeywordData = searchSelector.searchKeyword;
    return (
        <S.historyBox $active={props.active}>
            {searchKeywordData && searchKeywordData.length > 0 ? (
                searchKeywordData.map((raw: SummonerInfo, idx: number) => {
                    return (
                        <S.searchUserBlock
                            key={"search-keyword" + idx}
                            onClick={onClickUser.bind(this, raw.name)}
                        >
                            <S.searchUserIcon>
                                <img src={raw.profileImageUrl} />
                            </S.searchUserIcon>
                            <S.searchUserTextBlock>
                                <S.searchUserName>{raw.name}</S.searchUserName>
                                <S.searchUserLevel>
                                    {raw.leagues &&
                                        raw.leagues.length > 0 &&
                                        raw.leagues[0].tierRank["string"]}
                                </S.searchUserLevel>
                            </S.searchUserTextBlock>
                        </S.searchUserBlock>
                    );
                })
            ) : (
                <></>
            )}
        </S.historyBox>
    );
};
