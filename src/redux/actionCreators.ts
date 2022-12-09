import {
  INCREMENT_INTERFACE_VALUE_TYPE,
  RESET_INTERFACE_VALUE_TYPE,
  SET_COUNTING_MODE_TYPE,
  SET_ERROR_TYPE,
  SET_INTERFACE_VALUES,
  SET_SETTINGS_MAX_VALUE_TYPE,
  SET_SETTINGS_MIN_VALUE_TYPE,
  SET_SETTINGS_VALUES_TYPE,
} from "./actionTypes";

// Interface

export type incrementInterfaceValueACT = ReturnType<
  typeof incrementInterfaceValueAC
>;
export type resetInterfaceValueACT = ReturnType<typeof resetInterfaceValueAC>;
export type setInterfaceValuesACT = ReturnType<typeof setInterfaceValuesAC>;

export const incrementInterfaceValueAC = () => {
  return {
    type: INCREMENT_INTERFACE_VALUE_TYPE,
    data: {},
  } as const;
};

export const resetInterfaceValueAC = () => {
  return {
    type: RESET_INTERFACE_VALUE_TYPE,
    data: {},
  } as const;
};

export const setInterfaceValuesAC = (minValue: number, maxValue: number) => {
  return {
    type: SET_INTERFACE_VALUES,
    data: {
      minValue,
      maxValue,
    },
  } as const;
};

// Settings

export type setSettingsMaxValueACT = ReturnType<typeof setSettingsMaxValueAC>;
export type setSettingsMinValueACT = ReturnType<typeof setSettingsMinValueAC>;
export type setSettingsValuesACT = ReturnType<typeof setSettingsLCValuesAC>;

export const setSettingsMaxValueAC = (value: number) => {
  return {
    type: SET_SETTINGS_MAX_VALUE_TYPE,
    data: {
      value,
    },
  } as const;
};

export const setSettingsMinValueAC = (value: number) => {
  return {
    type: SET_SETTINGS_MIN_VALUE_TYPE,
    data: {
      value,
    },
  } as const;
};

export const setSettingsLCValuesAC = (minValue: number, maxValue: number) => {
  return {
    type: SET_SETTINGS_VALUES_TYPE,
    data: {
      minValue,
      maxValue,
    },
  } as const;
};

// Page

export type setCountingModeACT = ReturnType<typeof setCountingModeAC>;
export type setErrorACT = ReturnType<typeof setErrorAC>;

export const setCountingModeAC = (value: boolean) => {
  return {
    type: SET_COUNTING_MODE_TYPE,
    data: {
      value,
    },
  } as const;
};

export const setErrorAC = (value: boolean) => {
  return {
    type: SET_ERROR_TYPE,
    data: {
      value,
    },
  } as const;
};
