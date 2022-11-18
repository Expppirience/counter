import React, {FC} from 'react';


// * Types
interface InputPropsType {
    onChangeHandler: (value: string) => void
    className: string;
    value: number
    type: string
    error: boolean;
}


// * Component
export const Input: FC<InputPropsType> = ({type, onChangeHandler, className, value, error}) => {

    // * Utils
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(e.currentTarget.value)
    }


    // * Return
    return (
        <input type={type} value={value} onChange={inputChange}
               className={`${className} ${error ? 'counter-error' : ''}`}/>
    );
};

