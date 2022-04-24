import { FetchApiPost, FetchApiGet, FetchApiDelete } from "../network";
import { actions } from "common_module/lib/action/creator";

export const UPDATE_FAVORITE_USER = "UPDATE_FAVORITE_USER";
export const UpdateFavoriteUser = actions(UPDATE_FAVORITE_USER, (name: string) => {
    return { payload: { data: { name: name } } };
});
