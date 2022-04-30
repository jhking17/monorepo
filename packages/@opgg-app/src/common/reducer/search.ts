import { AnyAction } from "redux";
import {
    SEARCH_USER,
    DELETE_RECENT_USER,
    SEARCH_KEYWORD_USERS,
    GET_MOST_INFO,
    GET_MATCH_DETAIL,
    GET_MATCHES,
} from "../action";

export interface MatchPosition {
    games: number;
    losses: number;
    position: "TOP"|"JNG"|"MID"|"ADC"|"SUP";
    positionName: string;
    wins: number;
}

export interface MatchSummary {
    assists: number;
    deaths: number;
    kills: number;
    losses: number;
    wins: number;
}

export interface MatchDetail {
    gameId: number;
    teams: {
        teamId: number;
        players: {
            champion: { imageUrl: string; level: number };
            summonerId: string;
            summonerName: string;
        }[];
    }[];
}

export interface Match {
    mmr: number;
    champion: {
        imageUrl: string;
        level: number;
    };
    spells: {
        imageUrl: string;
    }[];
    items: { imageUrl: string }[];
    needRenew: boolean;
    gameId: string;
    createDate: number;
    gameLength: number;
    gameType: string;
    summonerId: string;
    summonerName: string;
    tierRankShort: string;
    stats: MatchStats;
    mapInfo: string;
    peak: string[];
    isWin: boolean;
}

export interface MatchStats {
    general: {
        kill: number;
        death: number;
        assist: number;
        kdaString: string;
        cs: number;
        csPerMin: number;
        contributionForKillRate: string;
        goldEarned: number;
        totalDamageDealtToChampions: number;
        largestMultiKillString: string;
        opScoreBadge: string;
    };
    ward: {
        sightWardsBought: number;
        visionWardsBought: number;
    };
}

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
    kda: number;
    winRate: number;
}

export interface RecentWinRate {
    id: number;
    key: string;
    name: string;
    imageUrl: string;
    wins: number;
    losses: number;
    winRate: number;
}

export type searchState = {
    history: SummonerInfo[];
    searched?: SummonerInfo;
    searchKeyword?: SummonerInfo[];
    champions: Champion[];
    recentWinRates: RecentWinRate[];
    matchDetails: MatchDetail[];
    matches: Match[];
    matchChampions: Champion[];
    matchPositions : MatchPosition[];
    matchSummary ?: MatchSummary;
};

const initialState: searchState = {
    history: [],
    searched: undefined,
    searchKeyword: [],
    champions: [],
    recentWinRates: [],
    matchDetails: [],
    matches: [],
    matchChampions: [],
    matchPositions : [],
    matchSummary : undefined
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
        case GET_MATCHES:
            if(payload.data){
                return {
                    ...state,
                    matches: payload.data.games,
                    matchPositions : payload.data.positions,
                    matchSummary : payload.data.summary,
                    matchChampions : payload.data.champions,
                    matchDetails: [],
                };
            }
            return {
                ...state,
                matches : [],
                matchDetails: [],
            }
        case GET_MATCH_DETAIL:
            if (payload.data) {
                let matchIdx = state.matchDetails.findIndex(
                    raw => raw.gameId === payload.data.gameId
                );
                if (matchIdx != -1) {
                    state.matchDetails[matchIdx] = payload.data;
                } else {
                    state.matchDetails.push(payload.data);
                }
            }
            return {
                ...state,
                matchDetails: [...state.matchDetails],
            };
        default:
            return state;
    }
};
