import React, { FC } from "react";

// * Types
export interface ButtonPropsType {
  children: React.ReactNode;
  onClickHandler: () => void;
  className?: string;
  isDisabled: boolean;
}

// * Component
export const Button: FC<ButtonPropsType> = React.memo(
  ({ children, onClickHandler, className, isDisabled }) => {
    return (
      <button
        disabled={isDisabled}
        onClick={onClickHandler}
        className={className ? className : ""}
      >
        {children}
      </button>
    );
  }
);
