import { FetchApiPost, FetchApiGet, FetchApiDelete } from "../network";
import { actions } from "common_module/lib/action/creator";

export const HANDSHAKE = "HANDSHAKE";
export const Handshake = actions(HANDSHAKE, async () => {
    return await FetchApiPost("/api/v1/auth/handshake");
});
