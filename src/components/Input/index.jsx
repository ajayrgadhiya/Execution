import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    gray_50: "bg-gray-50 text-bluegray-200",
    white_A700: "bg-white-A700 text-bluegray-200",
  },
};
const shapes = { square: "rounded-none", round: "rounded-md" };
const sizes = {
  xs: "pb-[7px] pt-[9px] px-[7px]",
  sm: "pl-[3px] pr-2.5 py-2.5",
  md: "pb-4 pt-[17px] px-4",
  lg: "pb-3 pt-[18px] px-3",
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
      shape = "round",
      size = "md",
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
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_50", "white_A700"]),
};

export { Input };
