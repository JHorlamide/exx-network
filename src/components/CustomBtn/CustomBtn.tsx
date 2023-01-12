import React from "react";

export interface CustomBtnProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  className?: string;
  iserror?: boolean;
  isloading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const CustomBtn = ({
  className,
  isloading,
  iserror,
  leftIcon,
  rightIcon,
  children,
  ...rest
}: CustomBtnProps) => {
  return (
    <button className={className} {...rest}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export default CustomBtn;
