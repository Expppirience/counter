import { AppStateType } from "../store";

export const pageSelector = (state: AppStateType) => state.page;
export const interfaceSelector = (state: AppStateType) => state.interface;
export const settingsSelector = (state: AppStateType) => state.settings;
