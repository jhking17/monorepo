/******************************************************************************
 * components
 * useAutoComplete
 * last modify : jh.jeong
 ******************************************************************************/
import { useState, useEffect } from "react";
import * as S from "./search.history.styled";

interface SearchHistoryCompProps {
    active: boolean;
}

const INFO_ICON_IMAGE = "https://s-lol-web.op.gg/static/images/site/common/icon-history-info.png?v=1650634188774";
const FAVORITE_ICON_IMAGE = "https://s-lol-web.op.gg/images/icon/icon-favorite-off.png";
export const SearchHistoryComp: React.FunctionComponent<SearchHistoryCompProps> = props => {
    const [selectedTab, setSelectedTab] = useState<"recent" | "favorite">("recent");
    return (
        <S.historyBox $active={props.active}>
            <S.historyTabs>
                <S.historyTabBtnBlock>
                    <S.historyTabBtn onClick={setSelectedTab.bind(this, "recent")} $selected={selectedTab === "recent"}>
                        최근검색
                    </S.historyTabBtn>
                    <S.historyTabBtn
                        onClick={setSelectedTab.bind(this, "favorite")}
                        $selected={selectedTab === "favorite"}
                    >
                        즐겨찾기
                    </S.historyTabBtn>
                </S.historyTabBtnBlock>
                <S.historyTab $selected={selectedTab === "recent"}>
                    <S.historyBlankBlock>
                        <img src={INFO_ICON_IMAGE} />
                        최근에 본 소환사가 없습니다.
                    </S.historyBlankBlock>
                    <S.historyList>
                        <S.historyItem>
                            <S.historyItemText>HHHH</S.historyItemText>
                            <S.historyItemBtn $btnType="favorite" $favorite={true} />
                            <S.historyItemBtn $btnType="trash" />
                        </S.historyItem>
                        <S.historyItem>
                            <S.historyItemText>HHHH</S.historyItemText>
                            <S.historyItemBtn $btnType="favorite" $favorite={false} />
                            <S.historyItemBtn $btnType="trash" />
                        </S.historyItem>
                    </S.historyList>
                </S.historyTab>
                <S.historyTab $selected={selectedTab === "favorite"}>
                    <S.historyBlankBlock>
                        <img src={INFO_ICON_IMAGE} />
                        <div>
                            관심있는 소환사에 <img src={FAVORITE_ICON_IMAGE} /> 즐겨찾기를 하여 편리하게 정보를
                            받아보세요.
                        </div>
                    </S.historyBlankBlock>
                    <S.historyList>
                        <S.historyItem>
                            <S.historyItemText>HHHH</S.historyItemText>
                            <S.historyItemBtn $btnType="trash" />
                        </S.historyItem>
                        <S.historyItem>
                            <S.historyItemText>HHHH</S.historyItemText>
                            <S.historyItemBtn $btnType="trash" />
                        </S.historyItem>
                    </S.historyList>
                </S.historyTab>
            </S.historyTabs>
        </S.historyBox>
    );
};
