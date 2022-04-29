/******************************************************************************
 * last modify : jh.jeong
 ******************************************************************************/
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { reducerState } from "../../common";
import * as S from "./styled";
import IconAdc from "../../image/icon-adc.svg";
import IconMid from "../../image/icon-mid.svg";
import IconTop from "../../image/icon-top.svg";
import IconJng from "../../image/icon-jng.svg";
import IconSup from "../../image/icon-sup.svg";

interface MatchStasticsCompProps {}

const BLANK_CHAMPION_ICON =
    "https://s-lol-web.op.gg/static/images/icon/common/icon-championimg.png";
export const MatchStasticsComp: React.FunctionComponent<MatchStasticsCompProps> = props => {
    const searchSelector = useSelector((state: reducerState) => state.search);

    const [selectedTab, setSelectedTab] = useState<"ALL" | "SOLO" | "FREE">("SOLO");
    const winRate = 78;
    const winPoint = 6.45;
    return (
        <S.matchStasticsContainer>
            <S.matchTypeSelectBox>
                <S.matchTypeSelectBtn $active={selectedTab === "ALL"}>전체</S.matchTypeSelectBtn>
                <S.matchTypeSelectBtn $active={selectedTab === "SOLO"}>
                    솔로게임
                </S.matchTypeSelectBtn>
                <S.matchTypeSelectBtn $active={selectedTab === "FREE"}>
                    자유랭크
                </S.matchTypeSelectBtn>
            </S.matchTypeSelectBox>
            <S.vLine />
            <S.matchInfoContainer>
                <S.matchInfoRecordBox>
                    <S.matchInfoRecordHalf>
                        <S.matchInfoRecordText>20전 11승 9패</S.matchInfoRecordText>
                        <S.matchInfoRecordDonut $loseRateDeg={Math.round((45 / 100) * 360)}>
                            <S.matchInfoRecordDonutCenter>
                                <span>40%</span>
                            </S.matchInfoRecordDonutCenter>
                        </S.matchInfoRecordDonut>
                    </S.matchInfoRecordHalf>
                    <S.matchInfoRecordHalf>
                        <S.matchInfoRecordKDABox>
                            <span id="b">25.9</span>
                            <span id="g">/</span>
                            <span id="r">15.8</span>
                            <span id="g">/</span>
                            <span id="b">14.1</span>
                        </S.matchInfoRecordKDABox>
                        <S.matchInfoRecordPercentBox>
                            <span id={winPoint > 6.0 ? "g" : "b"}>3.45:1</span>
                            <span id={winRate > 60 ? "r" : "b"}>(58%)</span>
                        </S.matchInfoRecordPercentBox>
                    </S.matchInfoRecordHalf>
                </S.matchInfoRecordBox>
                <S.hLine />
                <S.matchInfoChampBox>
                    <S.matchInfoChampItem>
                        <S.matchInfoChampItemIcon
                            src={
                                "https://opgg-static.akamaized.net/images/lol/champion/Xerath.png?image=q_auto,f_webp,w_auto&v=1651226741046"
                            }
                        />
                        <S.matchInfoChampItemTextBox>
                            <S.matchInfoChampItemName>룰루</S.matchInfoChampItemName>
                            <S.matchInfoChampItemText>
                                <span id="r">70%</span>
                                <span id="b">(70승 3패)</span>
                                <span id="s">|</span>
                                <span id="y">13.01 평점</span>
                            </S.matchInfoChampItemText>
                        </S.matchInfoChampItemTextBox>
                    </S.matchInfoChampItem>
                    <S.matchInfoChampItem>
                        <S.matchInfoChampItemIcon
                            src={
                                "https://opgg-static.akamaized.net/images/lol/champion/Xerath.png?image=q_auto,f_webp,w_auto&v=1651226741046"
                            }
                        />
                        <S.matchInfoChampItemTextBox>
                            <S.matchInfoChampItemName>룰루</S.matchInfoChampItemName>
                            <S.matchInfoChampItemText>
                                <span id="r">70%</span>
                                <span id="b">(70승 3패)</span>
                                <span id="s">|</span>
                                <span id="y">13.01 평점</span>
                            </S.matchInfoChampItemText>
                        </S.matchInfoChampItemTextBox>
                    </S.matchInfoChampItem>
                    <S.matchInfoChampItem>
                        <S.matchInfoChampItemIcon src={BLANK_CHAMPION_ICON} />
                        <S.matchInfoChampItemTextBox>
                            <S.matchInfoChampItemName>
                                챔피언 정보가 없습니다.
                            </S.matchInfoChampItemName>
                            <S.matchInfoChampItemText></S.matchInfoChampItemText>
                        </S.matchInfoChampItemTextBox>
                    </S.matchInfoChampItem>
                </S.matchInfoChampBox>
                <S.hLine />
                <S.matchInfoPositionBox>
                    <S.matchInfoPositionText>선호 포지션(랭크)</S.matchInfoPositionText>
                    <S.matchInfoPositionDetail>
                        <S.matchInfoPositionIcon src={IconTop} />
                        <S.matchInfoPositionTextBox>
                            <S.matchInfoPositionTextTop>탑</S.matchInfoPositionTextTop>
                            <S.matchInfoPositionTextBtm>
                                <span id="blue">70%</span>
                                <span id="s">|</span>
                                <span>
                                    Win Rate <span id="grey">53</span>%
                                </span>
                            </S.matchInfoPositionTextBtm>
                        </S.matchInfoPositionTextBox>
                    </S.matchInfoPositionDetail>
                    <S.matchInfoPositionDetail>
                        <S.matchInfoPositionIcon src={IconJng} />
                        <S.matchInfoPositionTextBox>
                            <S.matchInfoPositionTextTop>정글</S.matchInfoPositionTextTop>
                            <S.matchInfoPositionTextBtm>
                                <span id="blue">70%</span>
                                <span id="s">|</span>
                                <span>
                                    승률 <span id="grey">53</span>%
                                </span>
                            </S.matchInfoPositionTextBtm>
                        </S.matchInfoPositionTextBox>
                    </S.matchInfoPositionDetail>
                </S.matchInfoPositionBox>
            </S.matchInfoContainer>
        </S.matchStasticsContainer>
    );
};
