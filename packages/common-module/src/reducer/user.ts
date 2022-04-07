import { AnyAction } from "redux";
import { jwtdecode } from "utils_ts/lib";
import {
    ActionType,
    HANDSHAKE,
} from '../action';

export type userState = {
    token ?: string;
}

const initialState : userState = {
    token : "",
}

export const user = (state:userState=initialState, {type, payload} : AnyAction)=>{
    switch(type){
        case HANDSHAKE :
            return {
                ...state,
                id : payload.id,
            }
        case HANDSHAKE + "_LOADING" :
            return {
                ...state,
                handshaking : true
            }
        case HANDSHAKE + "_ERROR" : 
            return {
                ...state,
                handshaking : false,
            }
        default : 
            return state;
    }
}