import { combineReducers, createStore } from "redux";

import { interfaceReducer } from "./reducers/interfaceReducer";
import { pageReducer } from "./reducers/pageReducer";
import { settingsReducer } from "./reducers/settingsReducer";

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;

const rootReducer = combineReducers({
  settings: settingsReducer,
  interface: interfaceReducer,
  page: pageReducer,
});

export const store = createStore(rootReducer);
