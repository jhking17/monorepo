import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./style/theme";

const MainPage = lazy(() => import("./page/main.page"));

const App: React.FunctionComponent<any> = props => {
    const AppRoutes = () => {
        return useRoutes([{ path: "/", element: <MainPage /> }]);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Suspense fallback={<div>로딩중...</div>}>
                <Router>
                    <AppRoutes />
                </Router>
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
