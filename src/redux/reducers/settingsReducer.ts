import {
  SET_SETTINGS_MAX_VALUE_TYPE,
  SET_SETTINGS_MIN_VALUE_TYPE,
} from "../actionTypes";
import {
  setSettingsMaxValueACT,
  setSettingsMinValueACT,
} from "../actionCreators";

export interface SettingsStateType {
  maxValue: number;
  minValue: number;
}

export type SettingsActionType =
  | setSettingsMaxValueACT
  | setSettingsMinValueACT;

const initialState = {
  maxValue: 1,
  minValue: 0,
};

export const settingsReducer = (
  state: SettingsStateType = initialState,
  action: SettingsActionType
) => {
  switch (action.type) {
    case SET_SETTINGS_MAX_VALUE_TYPE:
      return { ...state, maxValue: action.data.value };

    case SET_SETTINGS_MIN_VALUE_TYPE:
      return { ...state, minValue: action.data.value };
    default:
      return state;
  }
};
