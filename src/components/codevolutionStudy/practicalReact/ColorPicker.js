import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ColorPicker() {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div>
      <button onClick={setShowColorPicker(showColorPicker => !showColorPicker)}>
        {showColorPicker ? "Close color picker" : "Pick a color"}
      </button>
      <ChromePicker
        color={color}
        onChange={updatedColor => setColor(updatedColor)}
      />
      <h2>You picked {color}</h2>
    </div>
  );
}

export default ColorPicker;
