import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const TestPage = lazy(() => import("./page/TestPage"));

const App: React.FunctionComponent<any> = (props) => {
    const AppRoutes = () => {
        return useRoutes([{ path: "/", element: <TestPage /> }]);
    };

    return (
        <Suspense fallback={<div>로딩중...</div>}>
            <Router>
                <AppRoutes />
            </Router>
        </Suspense>
    );
};

export default App;
