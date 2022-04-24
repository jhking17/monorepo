/******************************************************************************
 * components
 * useAutoComplete
 * last modify : jh.jeong
 ******************************************************************************/
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { reducerState } from "../../common";
import { SummonerInfo } from "../../common/reducer";
import * as S from "./styled";

interface RankInfoCompProps {}

export const RankInfoComp: React.FunctionComponent<RankInfoCompProps> = props => {
    const searchSelector = useSelector((state: reducerState) => state.search);

    const summoner: SummonerInfo = searchSelector.searched;
    const league1 = summoner && summoner.leagues[0] ? summoner.leagues[0] : null;
    const league2 = summoner && summoner.leagues[1] ? summoner.leagues[1] : null;
    return (
        <S.rankInfoContainer>
            {summoner ? (
                <>
                    {league1 && (
                        <S.rankBox>
                            <S.rankIcon src={league1.tierRank.imageUrl} />
                            <S.rankInfoTextBox>
                                <S.rankInfoTypeText>{league1.tierRank.name}</S.rankInfoTypeText>
                                <S.rankInfoPosText>
                                    <b>탑</b>(총 27게임)
                                </S.rankInfoPosText>
                                <S.rankInfoTierText>{league1.tierRank.string}</S.rankInfoTierText>
                                <S.rankInfoPointText>
                                    <b>{league1.tierRank.lp}LP</b> / {league1.wins}승{" "}
                                    {league1.losses}패
                                </S.rankInfoPointText>
                                <S.rankInfoRateText>
                                    승률{" "}
                                    {(
                                        (league1.wins / (league1.wins + league1.losses)) *
                                        100
                                    ).toFixed(0)}
                                    %
                                </S.rankInfoRateText>
                            </S.rankInfoTextBox>
                        </S.rankBox>
                    )}
                    {league2 && (
                        <S.rankBox>
                        <S.rankIcon src={league2.tierRank.imageUrl} />
                        <S.rankInfoTextBox>
                            <S.rankInfoTypeText>{league2.tierRank.name}</S.rankInfoTypeText>
                            <S.rankInfoPosText>
                                <b>탑</b>(총 27게임)
                            </S.rankInfoPosText>
                            <S.rankInfoTierText>{league2.tierRank.string}</S.rankInfoTierText>
                            <S.rankInfoPointText>
                                <b>{league2.tierRank.lp}LP</b> / {league2.wins}승{" "}
                                {league2.losses}패
                            </S.rankInfoPointText>
                            <S.rankInfoRateText>
                                승률{" "}
                                {(
                                    (league2.wins / (league2.wins + league2.losses)) *
                                    100
                                ).toFixed(0)}
                                %
                            </S.rankInfoRateText>
                        </S.rankInfoTextBox>
                    </S.rankBox>
                    )}
                </>
            ) : (
                <S.rankBox></S.rankBox>
            )}
        </S.rankInfoContainer>
    );
};
