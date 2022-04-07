import { FetchApiPost, FetchApiGet } from "utils_ts/lib";
import { actions } from "./creator";

export const HANDSHAKE = "HANDSHAKE";
export const Handshake = actions(HANDSHAKE, async () => {
    return await FetchApiPost("/api/v1/auth/handshake");
});
