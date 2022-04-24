import axios from "axios";

export const domain = process.env.NODE_ENV === "development" ? "https://codingtest.op.gg" : "";

/**
 * 빈 값 여부를 확인한다.
 * @param value
 */
export const isEmpty = (value: any) => {
    if (value != undefined && value != null) {
        return false;
    } else {
        return true;
    }
};

/**
 * API 호출 기본 모듈
 * @param url API URL
 * @param params Parameter
 */
export const FetchApiGet = async (url: any, params?: any, withoutErr: boolean = false) => {
    try {
        const response = await axios({
            method: "GET",
            url: domain + url,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            params: {
                ...params,
            },
            // withCredentials: true,
        });
        // console.log("RESPONSE", response.data);

        // console.log(response.resultCode);

        if (response.status != 200) {
            throw "something error" + response.data;
        }

        return response.data;
    } catch (error: any) {
        if (!withoutErr)
            console.log(
                error != ""
                    ? error
                    : `
                시스템 오류가 발생하였습니다.
                관리자에게 문의해주세요.
            `
            );
        return { resultCode: 9999, errorMessage: error };
    }
};

/**
 * API 호출 기본 모듈
 * @param url API URL
 * @param params Parameter
 */
export const FetchApiPost = async (url: any, params?: any) => {
    try {
        const access_token = window.localStorage.getItem("access_token");
        const refresh_token = window.localStorage.getItem("refresh_token");
        if (access_token == null && url.indexOf("login") == -1 && url.indexOf("signup") == -1) throw new Error("");
        if (params == undefined) params = {};
        Object.assign(params, { access_token });
        Object.assign(params, { refresh_token });

        const response = await axios({
            method: "POST",
            url: domain + url,
            data: params,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            // withCredentials: true,
        });

        if (response.status != 200) {
            throw "something error" + response.data;
        }

        return response.data;
    } catch (error: any) {
        // console.log(error);
        console.log(
            error != ""
                ? error
                : `
            시스템 오류가 발생하였습니다.
            관리자에게 문의해주세요.
        `
        );
        return { resultCode: 9999, errorMessage: error };
    }
};

/**
 * API 호출 기본 모듈
 * @param url API URL
 * @param params Parameter
 */
export const FetchApiPostWithFiles = async (url: any, files?: any, params?: any) => {
    try {
        let formData = new FormData();
        if (params)
            Object.keys(params).forEach(key => {
                if (typeof params[key] == "object") {
                    formData.append(key, JSON.stringify(params[key]));
                } else {
                    formData.append(key, params[key]);
                }
            });

        const access_token = window.localStorage.getItem("access_token");
        const refresh_token = window.localStorage.getItem("refresh_token");
        if (access_token == null) throw new Error("access token is null");
        formData.append("access_token", access_token ? access_token : "");
        formData.append("refresh_token", refresh_token ? refresh_token : "");
        for (var key of Object.keys(files)) {
            if (files[key]) {
                formData.append("file", files[key]);
            }
        }
        const response = await axios({
            method: "POST",
            url: domain + url,
            data: formData,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
        });

        if (response.status != 200) {
            throw "something error" + response.data;
        }

        return response.data;
    } catch (error: any) {
        console.log(
            error != ""
                ? error
                : `
            시스템 오류가 발생하였습니다.
            관리자에게 문의해주세요.
        `
        );
        return { resultCode: 9999, errorMessage: error };
    }
};

/**
 * API 호출 기본 모듈
 * @param url API URL
 * @param params Parameter
 */
export const FetchApiPut = async (url: any, params?: any) => {
    try {
        const access_token = window.localStorage.getItem("access_token");
        const refresh_token = window.localStorage.getItem("refresh_token");
        if (access_token == null) throw new Error("");
        Object.assign(params, { access_token: access_token ? access_token : "" });
        Object.assign(params, { refresh_token: refresh_token ? refresh_token : "" });

        const response = await axios({
            method: "PUT",
            url: domain + url,
            params: params,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });

        if (response.status != 200) {
            throw "something error" + response.data;
        }
        return response.data;
    } catch (error) {
        console.log(`
            시스템 오류가 발생하였습니다.
            관리자에게 문의해주세요.
        `);
        return { resultCode: 9999, errorMessage: error };
    }
};

/**
 * API 호출 기본 모듈
 * @param url API URL
 * @param params Parameter
 */
export const FetchApiDelete = async (url: any, params?: any) => {
    try {
        const access_token = window.localStorage.getItem("access_token");
        const refresh_token = window.localStorage.getItem("refresh_token");
        if (access_token == null) throw new Error("");
        Object.assign(params, { access_token: access_token ? access_token : "" });
        Object.assign(params, { refresh_token: refresh_token ? refresh_token : "" });

        const response = await axios({
            method: "DELETE",
            url: domain + url,
            params: params,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
        });

        if (response.status != 200) {
            throw "something error" + response.data;
        }
        return response.data;
    } catch (error) {
        console.log(`
            시스템 오류가 발생하였습니다.
            관리자에게 문의해주세요.
        `);
        return { resultCode: 9999, errorMessage: error };
    }
};
