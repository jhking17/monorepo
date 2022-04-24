/******************************************************************************
 * components
 * useAutoComplete
 * last modify : jh.jeong
 ******************************************************************************/
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../common";
import { SummonerInfo } from "../../common/reducer";
import { SearchUser } from "../../common/action";
import D from "../../style/default.styled";
import * as S from "./styled";

interface UserInfoCompProps {}

export const UserInfoComp: React.FunctionComponent<UserInfoCompProps> = props => {
    const dispatch = useDispatch();
    const searchSelector = useSelector((state: reducerState) => state.search);
    useEffect(() => {
        if (searchSelector.searched == null) {
            dispatch(SearchUser("Hide on bush"));
        }
    }, []);

    const summoner: SummonerInfo = searchSelector.searched;
    return (
        <S.userInfoContainer>
            <D.innerContainer style={{ width: "94%" }}>
                {summoner ? (
                    <>
                        <S.prevTierBox>
                            {summoner.previousTiers.map((raw, idx) => {
                                return (
                                    <S.prevTierItem key={"prevTierItem" + idx}>
                                        <b>{raw.shortString}</b>
                                        {raw.tier}
                                    </S.prevTierItem>
                                );
                            })}
                        </S.prevTierBox>
                        <S.userInfoBox>
                            <S.userIconBox>
                                <S.userIconBorder
                                    style={{
                                        backgroundImage: `url(${summoner.profileBorderImageUrl})`,
                                    }}
                                >
                                    <S.userIconLevelBox>{summoner.level}</S.userIconLevelBox>
                                </S.userIconBorder>
                                <S.userIconImg src={summoner.profileImageUrl} />
                            </S.userIconBox>
                            <S.userInfoTextBox>
                                <S.userInfoTextName>{summoner.name}</S.userInfoTextName>
                                <S.userInfoTextRank>
                                    래더 랭킹 <b>{summoner.ladderRank.rank}</b> 위 (상위{" "}
                                    {summoner.ladderRank.rankPercentOfTop})
                                </S.userInfoTextRank>
                            </S.userInfoTextBox>
                        </S.userInfoBox>
                    </>
                ) : (
                    <div>표시할 정보가 없습니다.</div>
                )}
            </D.innerContainer>
        </S.userInfoContainer>
    );
};
