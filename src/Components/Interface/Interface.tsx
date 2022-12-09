import React, { FC, useCallback, useMemo } from "react";
import {
  incrementInterfaceValueAC,
  resetInterfaceValueAC,
} from "../../redux/actionCreators";
import { useAppDispatch, useTypedSelector } from "./../../hooks/index";

import { Button } from "../Button/Button";
import { InterfaceStateType } from "../../redux/reducers/interfaceReducer";
import { PageStateType } from "../../redux/reducers/pageReducer";
import { interfaceSelector } from "../../redux/selectors";
import { pageSelector } from "./../../redux/selectors/index";

// * Types
interface InterfacePropsType {}

// * Component
export const Interface: FC<InterfacePropsType> = React.memo(() => {
  // * Return

  const dispatch = useAppDispatch();
  const interfaceState =
    useTypedSelector<InterfaceStateType>(interfaceSelector);
  const pageState = useTypedSelector<PageStateType>(pageSelector);

  const memoDeps = [
    interfaceState.currentValue,
    interfaceState.maxValue,
    pageState.error,
    pageState.countingMode,
  ];

  const incDisabled = useMemo(() => {
    return (
      interfaceState.currentValue === interfaceState.maxValue ||
      pageState.error ||
      !pageState.countingMode
    );
  }, memoDeps);

  const resetDisabled = useMemo(() => {
    return (
      interfaceState.currentValue <= interfaceState.minValue ||
      pageState.error ||
      !pageState.countingMode
    );
  }, memoDeps);

  const isCurrentValueEvenMax = useMemo(() => {
    return interfaceState.currentValue === interfaceState.maxValue;
  }, memoDeps);

  const resetCounter = useCallback(() => {
    dispatch(resetInterfaceValueAC());
  }, [dispatch]);

  const incrementValue = useCallback(() => {
    dispatch(incrementInterfaceValueAC());
  }, [dispatch]);
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
});
