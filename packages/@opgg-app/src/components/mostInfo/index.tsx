/******************************************************************************
 * last modify : jh.jeong
 ******************************************************************************/
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { reducerState } from "../../common";
import { Champion, RecentWinRate } from "../../common/reducer";
import * as S from "./styled";

interface MostInfoCompProps {}

export const MostInfoComp: React.FunctionComponent<MostInfoCompProps> = props => {
    const searchSelector = useSelector((state: reducerState) => state.search);

    const [selectedTab, setSelectedTab] = useState<"champ" | "week">("champ");

    const champions: Champion[] = searchSelector.champions;
    const recentWinRate: RecentWinRate[] = searchSelector.recentWinRates;
    return (
        <S.mostInfoContainer>
            <S.mostInfoBox>
                <S.champTabs>
                    <S.champTabBtnBlock>
                        <S.champTabBtn
                            onClick={setSelectedTab.bind(this, "champ")}
                            $selected={selectedTab === "champ"}
                        >
                            챔피언 승률
                        </S.champTabBtn>
                        <S.champTabBtn
                            onClick={setSelectedTab.bind(this, "week")}
                            $selected={selectedTab === "week"}
                        >
                            7일간 랭크 승률
                        </S.champTabBtn>
                    </S.champTabBtnBlock>
                    {selectedTab == "champ" ? (
                        <S.champList>
                            {champions &&
                                champions.map((raw, idx) => {
                                    const kdaColor =
                                        raw.kda > 5
                                            ? "#e19205"
                                            : raw.kda > 4
                                            ? "#1f8ecd"
                                            : raw.kda > 3
                                            ? "#2daf7f"
                                            : "#5e5e5e";
                                    const winRateColor = raw.winRate > 60 ? "#c6443e" : "#5e5e5e";
                                    return (
                                        <S.champItem key={"champion" + idx}>
                                            <S.champItemIcon src={raw.imageUrl} />
                                            <S.champItemTextBlock $flex={2} $textLeft>
                                                <S.champItemTextFirst>
                                                    {raw.name}
                                                </S.champItemTextFirst>
                                                <S.champItemTextSecond>
                                                    CS {raw.cs}
                                                </S.champItemTextSecond>
                                            </S.champItemTextBlock>
                                            <S.champItemTextBlock $flex={2}>
                                                <S.champItemTextFirst style={{ color: kdaColor }}>
                                                    {raw.kda.toFixed(1)}
                                                    :1 평점
                                                </S.champItemTextFirst>
                                                <S.champItemTextSecond>
                                                    {raw.kills} / {raw.assists} / {raw.deaths}
                                                </S.champItemTextSecond>
                                            </S.champItemTextBlock>
                                            <S.champItemTextBlock $flex={1}>
                                                <S.champItemTextFirst
                                                    style={{ color: winRateColor }}
                                                >
                                                    {raw.winRate}%
                                                </S.champItemTextFirst>
                                                <S.champItemTextSecond>
                                                    {raw.wins + raw.losses}게임
                                                </S.champItemTextSecond>
                                            </S.champItemTextBlock>
                                        </S.champItem>
                                    );
                                })}
                        </S.champList>
                    ) : (
                        <S.champList>
                            {recentWinRate.map((raw, idx) => {
                                return (
                                    <S.champItem key={idx}>
                                        <S.champItemIconSmall src={raw.imageUrl} />
                                        <S.champItemTextBlock $flex={2}>
                                            <S.champItemTextFirst>{raw.name}</S.champItemTextFirst>
                                        </S.champItemTextBlock>
                                        <S.champItemTextBlock $flex={1}>
                                            <S.champItemTextSecond style={{ fontSize: "13px" }}>
                                                {raw.winRate}%
                                            </S.champItemTextSecond>
                                        </S.champItemTextBlock>
                                        <S.champItemGraphBlock $flex={3}>
                                            <S.champItemGraph $winPercent={raw.winRate}>
                                                <S.champItemGraphValue $left>
                                                    {raw.wins}승
                                                </S.champItemGraphValue>
                                                <S.champItemGraphValue>{raw.losses}패</S.champItemGraphValue>
                                            </S.champItemGraph>
                                        </S.champItemGraphBlock>
                                    </S.champItem>
                                );
                            })}
                        </S.champList>
                    )}
                </S.champTabs>
            </S.mostInfoBox>
        </S.mostInfoContainer>
    );
};
