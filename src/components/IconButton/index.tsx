import React from "react";

interface IconButtonProsp {
  children: React.ReactNode;
  onClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const IconButton: React.FC<IconButtonProsp> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default IconButton;
