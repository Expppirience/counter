import { applyMiddleware, combineReducers, createStore } from "redux";

import { getStateFromLC } from "./../utils/localStorage";
import { interfaceReducer } from "./reducers/interfaceReducer";
import { pageReducer } from "./reducers/pageReducer";
import { saveStateToLC } from "../utils/localStorage";
import { settingsReducer } from "./reducers/settingsReducer";
import thunk from "redux-thunk";

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;

const rootReducer = combineReducers({
  settings: settingsReducer,
  interface: interfaceReducer,
  page: pageReducer,
});

let preloadedState = getStateFromLC();
export const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveStateToLC(store.getState());
});

//@ts-ignore
window.store = store;
