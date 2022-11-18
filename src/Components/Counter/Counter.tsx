import React, {useEffect, useState} from 'react';
import './Counter.css'
import {Interface} from "../Interface/Interface";
import {Settings} from "../Settings/Settings";


// * Component
export const Counter = () => {

    // * State
    const [inputValue, setInputValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(1);
    const [startValue, setStartValue] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [countingMode, setCountingMode] = useState<boolean>(false);

    // * Utils
    const incrementValue = () => {
        if (inputValue <= maxValue) setInputValue(inputValue + 1)
    }
    const resetCounter = () => setInputValue(startValue)




    useEffect(() => {
        const currentValue = localStorage.getItem('currentValue')
        const storageMaxValue = localStorage.getItem('maxValue')
        const storageStartValue = localStorage.getItem('startValue')
        if (currentValue && storageMaxValue && storageStartValue) {
            setInputValue(JSON.parse(currentValue))
            setStartValue(JSON.parse(storageStartValue))
            setMaxValue(JSON.parse(storageMaxValue))
            setCountingMode(true)
        }

    }, []);

    useEffect(() => {
        const newValue2 = inputValue
        localStorage.setItem('currentValue', JSON.stringify(inputValue))
    }, [inputValue]);


    const updateValues = (maxValue: number, startValue: number) => {
        if (inputValue < startValue) setInputValue(startValue)
        setMaxValue(maxValue)
        setStartValue(startValue)
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    // * Return
    return (
        <div className={'counter'}>
            <Settings countingMode={countingMode} setCountingMode={setCountingMode} setError={setError}
                      updateValues={updateValues} error={error}/>
            <Interface countingMode={countingMode} error={error} maxValue={maxValue} startValue={startValue}
                       resetCounter={resetCounter}
                       incrementValue={incrementValue} value={inputValue}/>
        </div>
    );
};

