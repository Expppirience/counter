import {} from "../../redux/store";

import React, { FC } from "react";
import { pageSelector, settingsSelector } from "./../../redux/selectors/index";
import {
  setCountingModeAC,
  setErrorAC,
  setInterfaceValuesAC,
  setSettingsMaxValueAC,
  setSettingsMinValueAC,
} from "../../redux/actionCreators";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { PageStateType } from "../../redux/reducers/pageReducer";
import { SettingsStateType } from "../../redux/reducers/settingsReducer";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./../../hooks/index";

// * Types
interface SettingsPropsType {}

// * Component
export const Settings: FC<SettingsPropsType> = () => {
  // * State

  const dispatch = useDispatch();
  const settingsState = useTypedSelector<SettingsStateType>(settingsSelector);
  const pageState = useTypedSelector<PageStateType>(pageSelector);

  const changeMaxValue = (value: string) => {
    pageState.countingMode && dispatch(setCountingModeAC(false));
    const error =
      +value <= 0 ||
      settingsState.minValue < 0 ||
      +value <= settingsState.minValue;
    dispatch(setErrorAC(error));
    dispatch(setSettingsMaxValueAC(+value));
  };

  const changeStartValue = (value: string) => {
    pageState.countingMode && dispatch(setCountingModeAC(false));
    const error =
      settingsState.maxValue <= 0 ||
      +value < 0 ||
      +value >= settingsState.maxValue;
    dispatch(setErrorAC(error));
    dispatch(setSettingsMinValueAC(+value));
  };

  const onSetHandler = () => {
    dispatch(
      setInterfaceValuesAC(settingsState.minValue, settingsState.maxValue)
    );
    dispatch(setCountingModeAC(true));
  };

  const isMaxValueDisabled =
    settingsState.maxValue <= settingsState.minValue ||
    settingsState.maxValue <= 0;

  const isMinValueDisabled =
    settingsState.minValue >= settingsState.maxValue ||
    settingsState.minValue < 0;

  const isSettingButtonDisabled = pageState.error || pageState.countingMode;

  // * Return
  return (
    <div className="counter__settings settings-counter counter-border">
      <div className="counter-fill settings-counter__nav">
        <div className="settings-counter__field">
          <label className="settings-counter__label">Max value: </label>
          <Input
            error={isMaxValueDisabled}
            type={"number"}
            onChangeHandler={changeMaxValue}
            className={"settings-counter__inp"}
            value={settingsState.maxValue}
          />
        </div>
        <div className="settings-counter__field">
          <label className="settings-counter__label">Start value: </label>
          <Input
            error={isMinValueDisabled}
            type={"number"}
            onChangeHandler={changeStartValue}
            className={"settings-counter__inp"}
            value={settingsState.minValue}
          />
        </div>
      </div>
      <div className="counter__btns">
        <Button
          onClickHandler={onSetHandler}
          className={"counter__btn"}
          isDisabled={isSettingButtonDisabled}
        >
          set
        </Button>
      </div>
    </div>
  );
};
