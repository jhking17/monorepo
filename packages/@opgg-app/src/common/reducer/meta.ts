import { AnyAction } from "redux";
import { GET_ITEM_JSON_DATA } from "../action";

export interface itemData {
    type: string;
    version: string;
    data: {
        [key: number]: {
            name: string;
            description: string;
            colloq: string;
            plaintext: string;
            into: number[];
        };
    }
}

export type metaState = {
    itemData ?: itemData;
};

const initialState: metaState = {
    itemData: undefined,
};

export const meta = (state: metaState = initialState, { type, payload }: AnyAction) => {
    switch (type) {
        case GET_ITEM_JSON_DATA:
            return {
                state,
                itemData: payload.data,
            };
        default:
            return state;
    }
};
