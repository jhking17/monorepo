import { AnyAction } from "redux";
import { UPDATE_FAVORITE_USER } from "../action";

export type favoriteState = {
    favorites: string[];
};

const initialState: favoriteState = {
    favorites: [],
};

export const favorite = (state: favoriteState = initialState, { type, payload }: AnyAction) => {
    switch (type) {
        case UPDATE_FAVORITE_USER:
            const favIdx = state.favorites.findIndex(raw => raw === payload.data.name);
            if (favIdx == -1) {
                state.favorites.push(payload.data.name);
            } else {
                state.favorites.splice(favIdx, 1);
            }
            return {
                state,
                favorites: [...state.favorites],
            };
        default:
            return state;
    }
};
