import React from "react";
import "./Key.scss";

interface label {
  label: string;
  operation: any;
}

interface KeyProps {
  block: label;
  color?: "light-blue" | "blue" | "white" | "grey";
  fontColor?: "cyan";
  onClick: (obj:any) => void;
}

const Key: React.FC<KeyProps> = ({ block, color, fontColor, onClick }) => {
  return (
    <button
      className={`key-wrapper ${color}`}
      onClick={() => onClick(block)}
      style={{ color: fontColor }}
    >
      {block.label}
    </button>
  );
};

export default Key;
