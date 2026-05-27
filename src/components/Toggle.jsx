import React, { useState } from "react";

export const Toggle = ({enabledColor="bg-green-500", disabledColor="bg-gray-300"}) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative w-16 h-9 rounded-full transition-colors duration-300 ${
          enabled ? enabledColor : disabledColor
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            enabled ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </button>
    </>
  );
}