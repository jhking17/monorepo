import { FetchApiPost, FetchApiGet, FetchApiDelete } from "../network";
import { actions } from "common_module/lib/action/creator";
import { Champion, RecentWinRate } from "../reducer";
export const SEARCH_USER = "SEARCH_USER";
export const SearchUser = actions(
    SEARCH_USER,
    async (searchText: string, entered: boolean = false) => {
        let res = await FetchApiGet(`/api/summoner/${searchText}`);
        return {
            payload: {
                data: res.summoner != undefined ? res.summoner : null,
                keyword: searchText,
                entered: entered,
            },
        };
    }
);

export const SEARCH_KEYWORD_USERS = "SEARCH_KEYWORD_USERS";
export const SearchKeywordUsers = actions(
    SEARCH_KEYWORD_USERS,
    async (searchText: string, entered: boolean = false) => {
        // TODO :: keyword search api need.
        let res = await FetchApiGet(`/api/summoner/${searchText}`);
        return {
            payload: {
                data: res.summoner != undefined ? res.summoner : null,
                keyword: searchText,
                entered: entered,
            },
        };
    }
);

export const DELETE_RECENT_USER = "DELETE_RECENT_USER";
export const DeleteRecentUser = actions(DELETE_RECENT_USER, (idx: number) => {
    return { payload: { data: idx } };
});

export const GET_MOST_INFO = "GET_MOST_INFO";
export const GetMostInfo = actions(GET_MOST_INFO, async (summonerName: string) => {
    let res = await FetchApiGet(`/api/summoner/${summonerName}/mostInfo`);
    let champions: Champion[] = res.champions;
    let recentWinRates: RecentWinRate[] = res.recentWinRate;
    if (champions && champions.length > 0) {
        for (var champ of champions) {
            const kda = (champ.kills + champ.assists) / champ.deaths;
            const winRate = Math.floor((champ.wins / (champ.wins + champ.losses)) * 100);
            Object.assign(champ, {
                kda: kda,
                winRate: winRate,
            });
        }
        champions.sort((a, b) => b.wins + b.losses - (a.wins + a.losses));
    }
    if (recentWinRates && recentWinRates.length > 0) {
        for (var recent of recentWinRates) {
            const winRate = Math.floor((recent.wins / (recent.wins + recent.losses)) * 100);
            Object.assign(recent, {
                winRate: winRate,
            });
        }
        recentWinRates.sort((a, b) => b.wins + b.losses - (a.wins + a.losses));
    }
    return {
        payload: {
            data: {
                champions: champions != undefined ? champions : null,
                recentWinRate: recentWinRates != undefined ? recentWinRates : null,
            },
        },
    };
});
