import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  const defaultStyle = `rounded-full p-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 ${className}`;
  return (
    <button onClick={onClick} className={defaultStyle}>
      {children}
    </button>
  );
};

export default Button;
