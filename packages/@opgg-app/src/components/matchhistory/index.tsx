/******************************************************************************
 * last modify : jh.jeong
 ******************************************************************************/
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reducerState } from "../../common";
import { SearchUser } from "../../common/action";
import { Match, Champion, MatchSummary, MatchDetail, MatchStats } from "../../common/reducer";
import * as S from "./styled";

interface MatchHistoryCompProps {}

export const MatchHistoryComp: React.FunctionComponent<MatchHistoryCompProps> = props => {
    const dispatch = useDispatch();
    const matches: Match[] = useSelector((state: reducerState) => state.search.matches);
    const matchDetail: MatchDetail[] = useSelector(
        (state: reducerState) => state.search.matchDetails
    );
    const onClickUser = (summonerName: string) => {
        dispatch(SearchUser(summonerName, true));
    };

    if (matches.length == 0) return <>잠시만 기다려주세요..</>;
    return (
        <S.matchHistoryContainer>
            {matches.map((raw, idx) => {
                const detail = matchDetail[idx];
                const gameResult = raw.isWin == true ? "win" : "lose";
                const gameLengthMin = Math.floor(raw.gameLength / 60);
                const gameLengthSec = raw.gameLength % 60;
                const kill = raw.stats.general.kill;
                const assist = raw.stats.general.assist;
                const death = raw.stats.general.death;
                const kda = raw.stats.general.kdaString;
                const isLargeKill = raw.stats.general.largestMultiKillString.length > 0;
                const isAce = raw.stats.general.opScoreBadge.length > 0;
                return (
                    <S.matchHistoryItem $result={gameResult} key={"matchHistoryItem" + idx}>
                        <S.matchInfoSimple>
                            <span id="typeText">{raw.gameType}</span>
                            <span id="timeText">{"하루전?"}</span>
                            <S.matchInfoSimpleLine $result={gameResult} />
                            <S.matchInfoSimpleResultText $result={gameResult}>
                                {gameResult ? "승리" : "패배"}
                            </S.matchInfoSimpleResultText>
                            <span id="gameLengthText">
                                {gameLengthMin}분 {gameLengthSec}초
                            </span>
                        </S.matchInfoSimple>
                        <S.matchInfoUserBox>
                            <S.matchInfoUserContent>
                                <S.matchInfoUserChampIcon>
                                    <img src={raw.champion.imageUrl} />
                                </S.matchInfoUserChampIcon>
                                <S.matchInfoUserAbility>
                                    <img src={raw.spells[0].imageUrl} />
                                    <img id="#rune" src={raw.peak[0]} />
                                    <img src={raw.spells[1].imageUrl} />
                                    <img id="#rune" src={raw.peak[1]} />
                                </S.matchInfoUserAbility>
                            </S.matchInfoUserContent>
                            <S.matchInfoUserChampName>챔피언 이름</S.matchInfoUserChampName>
                        </S.matchInfoUserBox>
                        <S.matchInfoKdaBox>
                            <S.matchInfoKdaText>
                                {kill}
                                <span id="g">/</span>
                                <span id="r">{assist}</span>
                                <span id="g">/</span>
                                {death}
                            </S.matchInfoKdaText>
                            <S.matchInfoKdaPointText>
                                <span id="b">{kda}</span>
                                <span id="g">평점</span>
                            </S.matchInfoKdaPointText>
                            <S.matchInfoKdaBadge>
                                {isLargeKill && <div id="r">더블킬</div>}
                                {isAce && <div id="p">ACE</div>}
                            </S.matchInfoKdaBadge>
                        </S.matchInfoKdaBox>
                        <S.matchInfoLevelBox>
                            <div>레벨 {raw.champion.level}</div>
                            <div>
                                {raw.stats.general.cs} ({raw.stats.general.csPerMin}) CS
                            </div>
                            <div id="r">킬관여 {raw.stats.general.contributionForKillRate}</div>
                            <div>매치평균</div>
                            <div id="b">{raw.tierRankShort}</div>
                        </S.matchInfoLevelBox>
                        <S.matchInfoItemBox>
                            <S.matchInfoItemList>
                                {[...new Array(8)].map((id, itemIdx) => {
                                    let item = raw.items[itemIdx];
                                    if (itemIdx === raw.items.length - 1 && itemIdx < 8)
                                        item = { imageUrl: "" };
                                    if (itemIdx === 3) item = raw.items[raw.items.length - 1];
                                    return (
                                        <S.matchInfoItemImg
                                            key={"matchInfoItem" + itemIdx}
                                            $result={gameResult}
                                        >
                                            <img src={item ? item.imageUrl : ""} />
                                        </S.matchInfoItemImg>
                                    );
                                })}
                            </S.matchInfoItemList>
                            <S.matchInfoItemWard>
                                제어와드 {raw.stats.ward.sightWardsBought}
                            </S.matchInfoItemWard>
                        </S.matchInfoItemBox>
                        <S.matchInfoSummonerBox>
                            {detail &&
                                detail.teams.map((team, teamIdx) => {
                                    return (
                                        <S.matchInfoSummonerHalf>
                                            {team.players.map((player, playerIdx) => {
                                                return (
                                                    <S.matchInfoSummoner
                                                        onClick={onClickUser.bind(
                                                            this,
                                                            player.summonerName
                                                        )}
                                                        key={
                                                            "summonerTeam" +
                                                            teamIdx +
                                                            "" +
                                                            playerIdx
                                                        }
                                                    >
                                                        <img src={player.champion.imageUrl} />
                                                        <span>{player.summonerName}</span>
                                                    </S.matchInfoSummoner>
                                                );
                                            })}
                                        </S.matchInfoSummonerHalf>
                                    );
                                })}
                        </S.matchInfoSummonerBox>
                        <S.matchInfoDetailArrowBlock $result={gameResult}>
                            <div id="arrow"></div>
                        </S.matchInfoDetailArrowBlock>
                    </S.matchHistoryItem>
                );
            })}
        </S.matchHistoryContainer>
    );
};
