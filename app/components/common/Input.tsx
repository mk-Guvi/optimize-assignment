import React, { forwardRef } from "react";

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "filled" | "flushed";
  inputSize?: "sm" | "md" | "lg";
  error?: boolean;
}
const sizes: Record<"sm" | "md" | "lg", string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const baseStyles =
  "outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      inputSize = "md",
      error = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const variants = {
      default: `border rounded-lg ${
        error
          ? "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          : "border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      }`,
      filled: `border-0 rounded-lg ${
        error
          ? "bg-red-50 focus:ring-2 focus:ring-red-500"
          : "bg-gray-100 focus:bg-white focus:ring-2 focus:ring-purple-500"
      }`,
      flushed: `border-0 border-b-2 rounded-none ${
        error
          ? "border-red-500 focus:border-red-600"
          : "border-gray-300 focus:border-purple-500"
      }`,
    };
    const classes = `${baseStyles} ${variants[variant]} ${sizes[inputSize]} ${className}`;

    return <input ref={ref} className={classes} {...props} />;
  }
);

Input.displayName = "Input";

export { Input };
