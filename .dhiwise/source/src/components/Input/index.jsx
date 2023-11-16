import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    blue_A200_02: "bg-blue-A200_02 text-white-A700",
    gray_50: "bg-gray-50 text-blue_gray-300",
    white_A700: "bg-white-A700 text-black-900_01",
  },
  underline: {
    blue_gray_100_01: "border-b border-blue_gray-100_01 text-black-900_01",
  },
};
const shapes = { square: "rounded-none", round: "rounded-md" };
const sizes = {
  xs: "pb-3.5 pl-3 pr-[13px] pt-[13px]",
  md: "pb-[13px] pl-3 pr-[13px] pt-[18px]",
  lg: "pb-[35px] pl-[22px] pr-6 pt-6 sm:px-5",
  xl: "pr-4 py-[27px]",
  "2xl": "pb-8 sm:pr-5 pr-[31px] pt-[31px]",
  sm: "pb-[17px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "sm",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "md", "lg", "xl", "2xl", "sm"]),
  variant: PropTypes.oneOf(["fill", "underline"]),
  color: PropTypes.oneOf([
    "blue_A200_02",
    "gray_50",
    "white_A700",
    "blue_gray_100_01",
  ]),
};

export { Input };
