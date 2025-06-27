import React from "react";
import classNames from "classnames";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={classNames(
        "rounded-xl border bg-white text-stone-900 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }) {
  return (
    <div className={classNames("px-6 py-4 border-b", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children, ...props }) {
  return (
    <h3 className={classNames("text-xl font-semibold", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={classNames("px-6 py-4", className)} {...props}>
      {children}
    </div>
  );
}
