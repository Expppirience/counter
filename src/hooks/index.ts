import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../redux/store";

export type ThunkAppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>;

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;
export const useAppDispatch = useDispatch<ThunkAppDispatchType>;
