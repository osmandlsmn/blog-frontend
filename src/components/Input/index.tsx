import React from "react";

interface IInputProps {
  placeholder?: string;
  value?: string;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}

const Input: React.FC<IInputProps> = ({ value, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
