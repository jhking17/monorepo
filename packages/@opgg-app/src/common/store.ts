import { createStore, applyMiddleware, Store, Action, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import { user, search, favorite } from "./reducer";

const rootReducer = combineReducers({
    user,
    search,
    favorite,
});

export type reducerState = ReturnType<typeof rootReducer>;

const persistConfig = {
    key: "TEST_SERVICE_PERSIST_KEY",
    storage,
    whitelist: ["search", "favorite"],
};

function configureStore() {
    const store = createStore(
        persistReducer(persistConfig, rootReducer),
        applyMiddleware(thunkMiddleware)
    );
    return store;
}

export const store = configureStore();
export const persistor = persistStore(store);
