import { AnyAction } from "redux";
import {
    SEARCH_USER,
} from "../action";

export type userState = {
    history: string[];
    searched : any;
};

const initialState: userState = {
    history: [],
    searched : null
};

export const user = (state: userState = initialState, { type, payload }: AnyAction) => {
    switch (type) {
        case SEARCH_USER + "_LOADING":
            return {
                ...state,
                searched: null,
            };
        case SEARCH_USER + "_ERROR":
            return {
                ...state,
                searched: null,
            };
        case SEARCH_USER:
            return {
                ...state,
                searched : payload.data
            };
        default:
            return state;
    }
};
