import React, {FC} from 'react';

export interface ButtonPropsType {
    children: React.ReactNode
    onClickHandler: () => void
    className?: string
    isDisabled: boolean
}

export const Button: FC<ButtonPropsType> = ({children, onClickHandler, className, isDisabled}) => {
    return (
        <button disabled={isDisabled} onClick={onClickHandler} className={className ? className : ''}>
            {children}
        </button>
    );
};

