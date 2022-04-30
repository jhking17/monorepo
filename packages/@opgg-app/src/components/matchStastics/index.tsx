/******************************************************************************
 * last modify : jh.jeong
 ******************************************************************************/
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reducerState } from "../../common";
import { GetMatches } from "../../common/action";
import { Match, MatchPosition, MatchSummary, Champion, SummonerInfo } from "../../common/reducer";
import * as S from "./styled";
import IconAdc from "../../image/icon-adc.svg";
import IconMid from "../../image/icon-mid.svg";
import IconTop from "../../image/icon-top.svg";
import IconJng from "../../image/icon-jng.svg";
import IconSup from "../../image/icon-sup.svg";

interface MatchStasticsCompProps {}

const BLANK_CHAMPION_ICON =
    "https://s-lol-web.op.gg/static/images/icon/common/icon-championimg.png";
const POSITION_ICON_IMG = { ADC: IconAdc, MID: IconMid, TOP: IconTop, JNG: IconJng, SUP: IconSup };
type MATCH_TYPE = "ALL" | "SOLO" | "FREE";
export const MatchStasticsComp: React.FunctionComponent<MatchStasticsCompProps> = props => {
    const dispatch = useDispatch();
    const matches: Match[] = useSelector((state: reducerState) => state.search.matches);
    const matchPositions: MatchPosition[] = useSelector(
        (state: reducerState) => state.search.matchPositions
    );
    const matchChampions: Champion[] = useSelector(
        (state: reducerState) => state.search.matchChampions
    );
    const matchSummary: MatchSummary = useSelector(
        (state: reducerState) => state.search.matchSummary
    );

    const summoner: SummonerInfo = useSelector((state: reducerState) => state.search.searched);
    const [selectedTab, setSelectedTab] = useState<MATCH_TYPE>("SOLO");

    const onClickTab = async (type: MATCH_TYPE) => {
        await dispatch(GetMatches(summoner.name, type));
        setSelectedTab(type);
    };

    if (matches.length == 0) return <>잠시만 기다려주세요..</>;
    let total = matchSummary.wins + matchSummary.losses;
    let losePer = matchSummary.losses / total;
    let winPer = matchSummary.wins / total;
    let kda = (matchSummary.kills + matchSummary.assists) / matchSummary.deaths;
    return (
        <S.matchStasticsContainer>
            <S.matchTypeSelectBox>
                <S.matchTypeSelectBtn
                    onClick={onClickTab.bind(this, "ALL")}
                    $active={selectedTab === "ALL"}
                >
                    전체
                </S.matchTypeSelectBtn>
                <S.matchTypeSelectBtn
                    onClick={onClickTab.bind(this, "SOLO")}
                    $active={selectedTab === "SOLO"}
                >
                    솔로게임
                </S.matchTypeSelectBtn>
                <S.matchTypeSelectBtn
                    onClick={onClickTab.bind(this, "FREE")}
                    $active={selectedTab === "FREE"}
                >
                    자유랭크
                </S.matchTypeSelectBtn>
            </S.matchTypeSelectBox>
            <S.vLine />
            <S.matchInfoContainer>
                <S.matchInfoRecordBox>
                    <S.matchInfoRecordHalf>
                        <S.matchInfoRecordText>
                            {total}전 {matchSummary.wins}승 {matchSummary.losses}패
                        </S.matchInfoRecordText>
                        <S.matchInfoRecordDonut $loseRateDeg={Math.round(losePer * 360)}>
                            <S.matchInfoRecordDonutCenter>
                                <span>{(winPer * 100).toFixed(0)}%</span>
                            </S.matchInfoRecordDonutCenter>
                        </S.matchInfoRecordDonut>
                    </S.matchInfoRecordHalf>
                    <S.matchInfoRecordHalf>
                        <S.matchInfoRecordKDABox>
                            <span id="b">{matchSummary.kills}</span>
                            <span id="g">/</span>
                            <span id="r">{matchSummary.assists}</span>
                            <span id="g">/</span>
                            <span id="b">{matchSummary.deaths}</span>
                        </S.matchInfoRecordKDABox>
                        <S.matchInfoRecordPercentBox>
                            <span id={kda > 6.0 ? "g" : "b"}>{kda.toFixed(2)}:1</span>
                            <span id={kda > 6.0 ? "r" : "b"}>(58%)</span>
                        </S.matchInfoRecordPercentBox>
                    </S.matchInfoRecordHalf>
                </S.matchInfoRecordBox>
                <S.hLine />
                <S.matchInfoChampBox>
                    {matchChampions.map((raw, idx) => {
                        let winRate = Math.round((raw.wins / (raw.wins + raw.losses)) * 100);
                        let kda = (raw.kills + raw.assists) / raw.deaths;
                        return (
                            <S.matchInfoChampItem key={"matchChampion" + idx}>
                                <S.matchInfoChampItemIcon src={raw.imageUrl} />
                                <S.matchInfoChampItemTextBox>
                                    <S.matchInfoChampItemName>{raw.name}</S.matchInfoChampItemName>
                                    <S.matchInfoChampItemText>
                                        <span id={winRate > 60 ? "r" : "b"}>{winRate}%</span>
                                        <span id="b">
                                            ({raw.wins}승 {raw.losses}패)
                                        </span>
                                        <span id="s">|</span>
                                        <span
                                            id={
                                                kda > 5
                                                    ? "y"
                                                    : kda > 4
                                                    ? "blue"
                                                    : kda > 3
                                                    ? "g"
                                                    : "b"
                                            }
                                        >
                                            {kda.toFixed(2)} 평점
                                        </span>
                                    </S.matchInfoChampItemText>
                                </S.matchInfoChampItemTextBox>
                            </S.matchInfoChampItem>
                        );
                    })}
                    {matchChampions.length < 3 &&
                        [new Array(3 - matchChampions.length)].map((raw, idx) => {
                            return (
                                <S.matchInfoChampItem key={"matchChampionBlank" + idx}>
                                    <S.matchInfoChampItemIcon src={BLANK_CHAMPION_ICON} />
                                    <S.matchInfoChampItemTextBox>
                                        <S.matchInfoChampItemName>
                                            챔피언 정보가 없습니다.
                                        </S.matchInfoChampItemName>
                                        <S.matchInfoChampItemText></S.matchInfoChampItemText>
                                    </S.matchInfoChampItemTextBox>
                                </S.matchInfoChampItem>
                            );
                        })}
                </S.matchInfoChampBox>
                <S.hLine />
                <S.matchInfoPositionBox>
                    <S.matchInfoPositionText>선호 포지션(랭크)</S.matchInfoPositionText>
                    {matchPositions.map((raw, idx) => {
                        const winRate = Math.round((raw.wins / raw.games) * 100) / 100;
                        return (
                            <S.matchInfoPositionDetail key={"matchPosition" + idx}>
                                <S.matchInfoPositionIcon src={POSITION_ICON_IMG[raw.position]} />
                                <S.matchInfoPositionTextBox>
                                    <S.matchInfoPositionTextTop>
                                        {raw.positionName}
                                    </S.matchInfoPositionTextTop>
                                    <S.matchInfoPositionTextBtm>
                                        <span id="blue">{Math.round(winRate * 100)}%</span>
                                        <span id="s">|</span>
                                        <span>
                                            승률 <span id="grey">{winRate}</span>%
                                        </span>
                                    </S.matchInfoPositionTextBtm>
                                </S.matchInfoPositionTextBox>
                            </S.matchInfoPositionDetail>
                        );
                    })}
                </S.matchInfoPositionBox>
            </S.matchInfoContainer>
        </S.matchStasticsContainer>
    );
};
