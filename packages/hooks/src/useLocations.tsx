/******************************************************************************
 * Copyright (c) 2021.  Inc. Rights reserved.                          *
 * Data modelings and methods used are assets of  Inc.                 *
 ******************************************************************************/

import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

type useLocationType = {
    path?: string;
    existBack: boolean;
    back: Function;
    pushHistory: Function;
    searchParam?: string;
    locKey?: string;
};

export const useLocations = (): useLocationType => {
    const history = useHistory();
    const location = useLocation();
    const [path, setPath] = useState<string | undefined>(undefined);
    const [existBack, setExistBack] = useState<boolean>(false);
    const [searchParam, setSearchParam] = useState<string | undefined>(
        undefined
    );
    const [locKey, setLocKey] = useState<string | undefined>("");

    useEffect(() => {
        setPath(location.pathname);
        setExistBack(location.state ? true : false);
        setSearchParam(location.search);
        setLocKey(location.key);
    }, [location.pathname]);

    const pushHistory = (path: string) => {
        history.push(path, { from: location.pathname });
    };

    const back = () => {
        if (existBack) return history.goBack();
    };

    return {
        path,
        existBack,
        back,
        pushHistory,
        searchParam,
        locKey,
    };
};
