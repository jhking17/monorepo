/******************************************************************************
 * components
 * useAutoComplete
 * last modify : jh.jeong
 ******************************************************************************/
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reducerState } from "../../common";
import { DeleteRecentUser, UpdateFavoriteUser, SearchUser } from "../../common/action";
import * as S from "./search.history.styled";

interface SearchHistoryCompProps {
    active: boolean;
}

const INFO_ICON_IMAGE =
    "https://s-lol-web.op.gg/static/images/site/common/icon-history-info.png?v=1650634188774";
const FAVORITE_ICON_IMAGE = "https://s-lol-web.op.gg/images/icon/icon-favorite-off.png";
export const SearchHistoryComp: React.FunctionComponent<SearchHistoryCompProps> = props => {
    const dispatch = useDispatch();
    const searchSelector = useSelector((state: reducerState) => state.search);
    const favoriteSelector = useSelector((state: reducerState) => state.favorite);
    const [selectedTab, setSelectedTab] = useState<"recent" | "favorite">("recent");

    const onClickDeleteRecentUser = (idx: number) => {
        dispatch(DeleteRecentUser(idx));
    };

    const onClickUpdateFavoriteUser = (name: string) => {
        dispatch(UpdateFavoriteUser(name));
    };

    const onClickUser = async (name: string) => {
        await dispatch(SearchUser(name, true));
    };

    const histories = searchSelector.history;
    const favorites = favoriteSelector.favorites;
    return (
        <S.historyBox $active={props.active}>
            <S.historyTabs>
                <S.historyTabBtnBlock>
                    <S.historyTabBtn
                        onClick={setSelectedTab.bind(this, "recent")}
                        $selected={selectedTab === "recent"}
                    >
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
                    {histories.length > 0 ? (
                        <S.historyList>
                            {histories.map((raw, idx) => {
                                const isFav = favorites.findIndex(fav => fav === raw.name) != -1;
                                return (
                                    <S.historyItem key={"historyItem" + idx}>
                                        <S.historyItemText
                                            onClick={onClickUser.bind(this, raw.name)}
                                        >
                                            {raw.name}
                                        </S.historyItemText>
                                        <S.historyItemBtn
                                            onClick={onClickUpdateFavoriteUser.bind(this, raw.name)}
                                            $btnType="favorite"
                                            $favorite={isFav}
                                        />
                                        <S.historyItemBtn
                                            onClick={onClickDeleteRecentUser.bind(this, idx)}
                                            $btnType="trash"
                                        />
                                    </S.historyItem>
                                );
                            })}
                        </S.historyList>
                    ) : (
                        <S.historyBlankBlock>
                            <img src={INFO_ICON_IMAGE} />
                            최근에 본 소환사가 없습니다.
                        </S.historyBlankBlock>
                    )}
                </S.historyTab>
                <S.historyTab $selected={selectedTab === "favorite"}>
                    {favoriteSelector.favorites.length > 0 ? (
                        <S.historyList>
                            {favorites.map((raw, idx) => {
                                return (
                                    <S.historyItem key={idx} onClick={onClickUser.bind(this, raw)}>
                                        <S.historyItemText>{raw}</S.historyItemText>
                                        <S.historyItemBtn
                                            onClick={onClickUpdateFavoriteUser.bind(this, raw)}
                                            $btnType="trash"
                                        />
                                    </S.historyItem>
                                );
                            })}
                        </S.historyList>
                    ) : (
                        <S.historyBlankBlock>
                            <img src={INFO_ICON_IMAGE} />
                            <div>
                                관심있는 소환사에 <img src={FAVORITE_ICON_IMAGE} /> 즐겨찾기를 하여
                                편리하게 정보를 받아보세요.
                            </div>
                        </S.historyBlankBlock>
                    )}
                </S.historyTab>
            </S.historyTabs>
        </S.historyBox>
    );
};
