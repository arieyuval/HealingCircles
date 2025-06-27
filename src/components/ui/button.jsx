import React from "react";
import classNames from "classnames";

export const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700",
    ghost: "bg-transparent hover:bg-stone-100",
    outline: "border border-stone-300 text-stone-700 hover:bg-stone-50",
  };

  return (
    <button
      className={classNames(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
