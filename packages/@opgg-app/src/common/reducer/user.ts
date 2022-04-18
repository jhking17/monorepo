import { AnyAction } from "redux";
import {
    HANDSHAKE,
} from "../action";

export type userState = {
    token?: string;
};

const initialState: userState = {
    token: "",
};

export const user = (state: userState = initialState, { type, payload }: AnyAction) => {
    switch (type) {
        case HANDSHAKE + "_LOADING":
            return {
                ...state,
                handshaking: true,
            };
        case HANDSHAKE + "_ERROR":
            return {
                ...state,
                handshaking: false,
                id: null,
                username: "",
                admin_level: -1,
                email: "",
                profile_img: "",
            };
        case HANDSHAKE:
            return {
                ...state,
                ...payload.data,
                handshaking: false,
            };
        default:
            return state;
    }
};
