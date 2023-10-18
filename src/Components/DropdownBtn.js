import React, { useState } from 'react';

const ColorDropdown = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState('white');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <div className="color-dropdown">
      <select>
        <option value="white">Black-White</option>
        <option value="lightblue">Light Grey</option>
        <option value="lightgreen">Light Green</option>
        <option value="lightpink">Light Pink</option>
      </select>
    </div>
  );
};

export default ColorDropdown;
