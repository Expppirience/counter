import React, {useState} from 'react';
import {Button} from "../Button/Button";
import './Counter.css'

export const Counter = () => {
    const [value, setValue] = useState<number>(0);
    const incrementValue = () => {
        if (value < 5) setValue(value + 1)
    }
    const resetCounter = () => {
        setValue(0)
    }
    return (
        <div className={'counter'}>
            <span className={`counter__value ${value === 5 ? 'counter-error' : ''}`}>
                {value}
            </span>
            <div className="counter__btns">
                <Button onClickHandler={incrementValue} className={'counter__btn'} isDisabled={value === 5}>
                    inc
                </Button>
                <Button onClickHandler={resetCounter} className={'counter__btn'} isDisabled={value < 1}>
                    reset
                </Button>
            </div>
        </div>
    );
};

