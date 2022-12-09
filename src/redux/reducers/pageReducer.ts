import { SET_COUNTING_MODE_TYPE, SET_ERROR_TYPE } from "../actionTypes";
import { setCountingModeACT, setErrorACT } from "../actionCreators";

export interface PageStateType {
  error: boolean;
  countingMode: boolean;
}

export type PageActionType = setCountingModeACT | setErrorACT;

const initialState = {
  error: false,
  countingMode: false,
};

export const pageReducer = (
  state: PageStateType = initialState,
  action: PageActionType
) => {
  switch (action.type) {
    case SET_COUNTING_MODE_TYPE:
      return { ...state, countingMode: action.data.value };
    case SET_ERROR_TYPE:
      return { ...state, error: action.data.value };
    default:
      return state;
  }
};
