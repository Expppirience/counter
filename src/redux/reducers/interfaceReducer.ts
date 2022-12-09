import {
  INCREMENT_INTERFACE_VALUE_TYPE,
  RESET_INTERFACE_VALUE_TYPE,
  SET_INTERFACE_VALUES,
} from "../actionTypes";
import {
  incrementInterfaceValueACT,
  resetInterfaceValueACT,
  setInterfaceValuesACT,
} from "../actionCreators";

export interface InterfaceStateType {
  maxValue: number;
  minValue: number;
  currentValue: number;
}

export type InterfaceAT =
  | incrementInterfaceValueACT
  | resetInterfaceValueACT
  | setInterfaceValuesACT;

const initialState = {
  maxValue: 1,
  minValue: 0,
  currentValue: 0,
};

export const interfaceReducer = (
  state: InterfaceStateType = initialState,
  action: InterfaceAT
) => {
  switch (action.type) {
    case INCREMENT_INTERFACE_VALUE_TYPE:
      return { ...state, currentValue: state.currentValue + 1 };
    case RESET_INTERFACE_VALUE_TYPE:
      return { ...state, currentValue: state.minValue };
    case SET_INTERFACE_VALUES:
      return {
        ...state,
        minValue: action.data.minValue,
        maxValue: action.data.maxValue,
        currentValue: action.data.minValue,
      };
    default:
      return state;
  }
};
