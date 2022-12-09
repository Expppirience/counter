import { AppStateType } from "../redux/store";

export const getStateFromLC = () => {
  try {
    const LCAppState = localStorage.getItem("AppState");
    if (LCAppState === null) return undefined;
    return JSON.parse(LCAppState);
  } catch (e) {
    return undefined;
  }
};

export const saveStateToLC = (state: AppStateType) => {
  try {
    localStorage.setItem("AppState", JSON.stringify(state));
  } catch (e) {
    return;
  }
};
