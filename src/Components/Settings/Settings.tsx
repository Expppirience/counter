import React, {FC, useEffect, useState} from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

// * Types
interface SettingsPropsType {
    setError: (value: boolean) => void;
    error: boolean;
    updateValues: (maxValue: number, startValue: number) => void;
    countingMode: boolean;
    setCountingMode: (value: boolean) => void;
}


// * Component
export const Settings: FC<SettingsPropsType> = (
    {error, setError, updateValues, countingMode, setCountingMode}) => {

    // * State
    const [maxValue, setMaxValue] = useState<number>(1);
    const [startValue, setStartValue] = useState<number>(0);


    // * Utils

    useEffect(() => {
        const storageMaxValue = localStorage.getItem('maxValue')
        const storageStartValue = localStorage.getItem('startValue')
        if(storageMaxValue && storageStartValue) {
            setMaxValue(JSON.parse(storageMaxValue))
            setStartValue(JSON.parse(storageStartValue))
        }
    }, []);


    const changeMaxValue = (value: string) => {
        countingMode && setCountingMode(false)
        setError(+value <= 0 || startValue < 0 || +value <= startValue)
        setMaxValue(+value)
    }
    const changeStartValue = (value: string) => {
        countingMode && setCountingMode(false)
        setError(maxValue <= 0 || +value < 0 || +value >= maxValue)
        setStartValue(+value)
    }

    const onSetHandler = () => {
        updateValues(maxValue, startValue)
        setCountingMode(true)
    }

    // * Return
    return (
        <div className='counter__settings settings-counter counter-border'>
            <div className="counter-fill settings-counter__nav">
                <div className="settings-counter__field">
                    <label className="settings-counter__label">Max value: </label>
                    <Input error={maxValue <= startValue || maxValue <= 0} type={'number'}
                           onChangeHandler={changeMaxValue}
                           className={'settings-counter__inp'}
                           value={maxValue}/>
                </div>
                <div className="settings-counter__field">
                    <label className="settings-counter__label">Start value: </label>
                    <Input error={startValue >= maxValue || startValue < 0} type={'number'}
                           onChangeHandler={changeStartValue}
                           className={'settings-counter__inp'}
                           value={startValue}/>
                </div>
            </div>
            <div className="counter__btns">
                <Button onClickHandler={onSetHandler} className={'counter__btn'}
                        isDisabled={error || countingMode}>
                    set
                </Button>
            </div>
        </div>
    );
};

