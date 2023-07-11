import React from "react";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }
> = ({ children, ...props }) => {
  return (
    <button className="bg-red-600 flex items-center text-white" {...props}>
      {children}
    </button>
  );
};
