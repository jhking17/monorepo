import { FetchApiPost, FetchApiGet, FetchApiDelete } from "../network";
import { actions } from "common_module/lib/action/creator";

export const SEARCH_USER = "SEARCH_USER";
export const SearchUser = actions(SEARCH_USER, async () => {
    return await FetchApiPost("");
});
