import {Button} from "../Button/Button";
import React, {FC} from "react";

// * Types
interface InterfacePropsType {
    value: number;
    incrementValue: () => void;
    resetCounter: () => void;
    maxValue: number;
    startValue: number;
    error: boolean;
    countingMode: boolean;
}


// * Component
export const Interface: FC<InterfacePropsType> = (
    {
        value,
        maxValue,
        startValue,
        incrementValue,
        resetCounter,
        error,
        countingMode
    }
) => {
    // * Return
    return (
        <div className='counter__interface counter-border'>
            <span className={`counter-fill counter__value ${value === maxValue ? 'counter-error' : ''}`}>
                {error ? 'Incorrect value' : !countingMode ? 'Enter the value' : value}
            </span>
            <div className="counter__btns">
                <Button onClickHandler={incrementValue} className={'counter__btn'}
                        isDisabled={value === maxValue || error}>
                    inc
                </Button>
                <Button onClickHandler={resetCounter} className={'counter__btn'}
                        isDisabled={value < startValue || error}>
                    reset
                </Button>
            </div>

        </div>

    )
}
