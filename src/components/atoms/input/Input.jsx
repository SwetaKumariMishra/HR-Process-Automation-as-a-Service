import PropTypes from "prop-types";
import "./input.css";
import { useState } from "react";
import { validatePassword } from "@/utils/constants";

const Input = ({
  size,
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
}) => {
  const [validation, setValidation] = useState("");
  return (
    <>
      <input
        className={`storybook--${size} ${className}`}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e);
          if (type === "password")
            setValidation(validatePassword(e.target.value));
        }}
      ></input>
      {validation}
    </>
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Input.defaultProps = {
  size: "medium",
  type: "text",
  placeholder: null,
  value: null,
  onChange: undefined,
};

export default Input;
