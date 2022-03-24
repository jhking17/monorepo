---
to: packages/dashboard-app/src/common/action/<%=action%>.tsx
---

/******************************************************************************
 * Copyright (c) 2021.  Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of  Inc.                 *
 * actions 
    * Example : example description.
 ******************************************************************************/

import { FetchApiPost, FetchApiGet, FetchApiPut, FetchApiDelete } from "../../utils/network";
import actions from "./creator";

export const EXAMPLE = "EXAMPLE";
export const Example = actions(EXAMPLE, async()=>{
    return await FetchApiPost("/api/v1/example");
});