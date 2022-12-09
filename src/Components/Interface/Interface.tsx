import React, { FC } from "react";
import {
  incrementInterfaceValueAC,
  resetInterfaceValueAC,
} from "../../redux/actionCreators";

import { Button } from "../Button/Button";
import { InterfaceStateType } from "../../redux/reducers/interfaceReducer";
import { PageStateType } from "../../redux/reducers/pageReducer";
import { interfaceSelector } from "../../redux/selectors";
import { pageSelector } from "./../../redux/selectors/index";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./../../hooks/index";

// * Types
interface InterfacePropsType {}

// * Component
export const Interface: FC<InterfacePropsType> = () => {
  // * Return

  const dispatch = useDispatch();
  const interfaceState =
    useTypedSelector<InterfaceStateType>(interfaceSelector);
  const pageState = useTypedSelector<PageStateType>(pageSelector);

  const incDisabled =
    interfaceState.currentValue === interfaceState.maxValue ||
    pageState.error ||
    !pageState.countingMode;
  const resetDisabled =
    interfaceState.currentValue <= interfaceState.minValue ||
    pageState.error ||
    !pageState.countingMode;
  const isCurrentValueEvenMax =
    interfaceState.currentValue === interfaceState.maxValue;

  const resetCounter = () => {
    dispatch(resetInterfaceValueAC());
  };

  const incrementValue = () => {
    dispatch(incrementInterfaceValueAC());
  };
  return (
    <div className="counter__interface counter-border">
      <span
        className={`counter-fill counter__value ${
          isCurrentValueEvenMax ? "counter-error" : ""
        }`}
      >
        {pageState.error
          ? "Incorrect value"
          : !pageState.countingMode
          ? "Enter the value"
          : interfaceState.currentValue}
      </span>
      <div className="counter__btns">
        <Button
          onClickHandler={incrementValue}
          className={"counter__btn"}
          isDisabled={incDisabled}
        >
          inc
        </Button>
        <Button
          onClickHandler={resetCounter}
          className={"counter__btn"}
          isDisabled={resetDisabled}
        >
          reset
        </Button>
      </div>
    </div>
  );
};
