import { DefaultTheme } from "styled-components";

const colors = {
    azure: "#1ea1f7",
};

const flex = {
    center: "display : flex; justify-content : center; align-items : center;",
};

const settings = {
    noneSelect: `-moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;`,
};

export const defaultTheme: DefaultTheme = {
    colors: colors,
    flex: flex,
    settings: settings,
};
