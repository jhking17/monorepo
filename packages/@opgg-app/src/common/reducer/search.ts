import { AnyAction } from "redux";
import { SEARCH_USER, DELETE_RECENT_USER, SEARCH_KEYWORD_USERS, GET_MOST_INFO } from "../action";

export interface SummonerInfo {
    ladderRank: {
        rank: number;
        rankPercentOfTop: number;
    };
    leagues: {
        hasResults: true;
        losses: number;
        tierRank: {
            name: string;
            tier: string;
            tierDivision: string;
            string: string;
            shortString: string;
            tierRankPoint: number;
            lp: number;
            imageUrl: string;
        };
        wins: number;
    }[];
    previousTiers: {
        division: string;
        imageUrl: string;
        lp: number;
        name: string;
        season: number;
        shortString: string;
        string: string;
        tier: string;
        tierDivision: string;
        tierRankPoint: number;
    }[];
    level: number;
    name: string;
    profileBackgroundImageUrl: string;
    profileBorderImageUrl: string;
    profileImageUrl: string;
    url: string;
}

export interface Champion {
    assists: number;
    cs: number;
    deaths: number;
    games: number;
    id: number;
    imageUrl: string;
    key: string;
    kills: number;
    losses: number;
    name: string;
    rank: number;
    wins: number;
    kda : number;
    winRate : number;
}

export interface RecentWinRate {
    id: number;
    key: string;
    name: string;
    imageUrl: string;
    wins: number;
    losses: number;
    winRate : number;
}

export type searchState = {
    history: SummonerInfo[];
    searched?: SummonerInfo;
    searchKeyword?: SummonerInfo[];
    champions: Champion[];
    recentWinRates: RecentWinRate[];
};

const initialState: searchState = {
    history: [],
    searched: undefined,
    searchKeyword: [],
    champions: [],
    recentWinRates: [],
};

export const search = (state: searchState = initialState, { type, payload }: AnyAction) => {
    switch (type) {
        case SEARCH_USER + "_LOADING":
            return {
                ...state,
                searched: undefined,
            };
        case SEARCH_USER + "_ERROR":
            return {
                ...state,
                searched: undefined,
            };
        case SEARCH_USER:
            if (payload.entered && payload.data) {
                if (state.history.find(raw => raw.name === payload.data.name) == undefined)
                    state.history.push(payload.data);
            }
            return {
                ...state,
                searched: payload.data,
                history: [...state.history],
            };
        case DELETE_RECENT_USER:
            state.history.splice(payload.data, 1);
            return {
                ...state,
                history: [...state.history],
            };
        case SEARCH_KEYWORD_USERS:
            return {
                ...state,
                searchKeyword: payload.data ? [payload.data] : state.searchKeyword,
            };
        case GET_MOST_INFO:
            return {
                ...state,
                champions: payload.data.champions,
                recentWinRates: payload.data.recentWinRate,
            };
        default:
            return state;
    }
};
