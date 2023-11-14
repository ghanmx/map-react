import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0.5px]",
  round: "rounded-md",
};
const variants = {
  outline: {
    blue_A700: "border border-blue-A700 border-solid text-blue-A700",
    blue_gray_100: "border border-blue_gray-100 border-solid",
    blue_gray_400: "border border-blue_gray-400 border-solid text-black-900_01",
    blue_gray_100_01: "border border-blue_gray-100_01 border-solid",
  },
  fill: {
    white_A700: "bg-white-A700",
    white_A700_b2: "bg-white-A700_b2 text-black-900_e4",
    blue_A200_02: "bg-blue-A200_02 text-white-A700",
    blue_gray_100_01: "bg-blue_gray-100_01 text-black-900_01",
    gray_50_02: "bg-gray-50_02 text-gray-600",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
};
const sizes = {
  xs: "pr-px py-px",
  sm: "p-1",
  md: "p-[7px]",
  lg: "p-2.5",
  xl: "p-[13px]",
  "2xl": "p-4",
  "3xl": "p-[19px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_A700",
    "blue_gray_100",
    "blue_gray_400",
    "blue_gray_100_01",
    "white_A700",
    "white_A700_b2",
    "blue_A200_02",
    "gray_50_02",
  ]),
};

export { Button };
