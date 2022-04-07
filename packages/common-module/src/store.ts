import { createStore , applyMiddleware, Store, Action, combineReducers } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { ActionType } from "./action";
import { user } from "./reducer/user";

const reducer = combineReducers({
    // reducer add
    user,
});

export type reducerState = ReturnType<typeof reducer>;

// const persistConfig = {
//     key : '',
//     storage,
//     whitelist : ["user"]
// }

// function configureStore (){
//     const store = createStore(
//         persistReducer(persistConfig , reducer),
//         applyMiddleware(thunkMiddleware),
//     );
//     return store;
// }

// export const store:Store = configureStore();
// export const persistor = persistStore(store);