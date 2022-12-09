import {
  SET_SETTINGS_MAX_VALUE_TYPE,
  SET_SETTINGS_MIN_VALUE_TYPE,
  SET_SETTINGS_VALUES_TYPE,
} from "../actionTypes";
import {
  setSettingsMaxValueACT,
  setSettingsMinValueACT,
  setSettingsValuesACT,
} from "../actionCreators";

export interface SettingsStateType {
  maxValue: number;
  minValue: number;
}

export type SettingsAT =
  | setSettingsMaxValueACT
  | setSettingsMinValueACT
  | setSettingsValuesACT;
const initialState = {
  maxValue: 1,
  minValue: 0,
};

export const settingsReducer = (
  state: SettingsStateType = initialState,
  action: SettingsAT
) => {
  switch (action.type) {
    case SET_SETTINGS_MAX_VALUE_TYPE:
      return { ...state, maxValue: action.data.value };

    case SET_SETTINGS_MIN_VALUE_TYPE:
      return { ...state, minValue: action.data.value };

    case SET_SETTINGS_VALUES_TYPE:
      return {
        ...state,
        minValue: action.data.minValue,
        maxValue: action.data.maxValue,
      };

    default:
      return state;
  }
};
