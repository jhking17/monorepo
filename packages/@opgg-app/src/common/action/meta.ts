import { FetchApiGet } from "../network";
import { actions } from "common_module/lib/action/creator";
import metaJson from "../item.json";

export const GET_ITEM_JSON_DATA = "GET_ITEM_JSON_DATA";
export const GetItemJsonData = actions(GET_ITEM_JSON_DATA, () => {
    return { payload: { data: metaJson } };
});
