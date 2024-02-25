import TimePicker from "react-time-picker";
import React, { useState } from "react";

const TimeField = () => {
  const [value, onChange] = useState("10:00");

  return (
    <div>
      <input
        type="time"
        onChange={onChange}
        value={value}
        className=" border-b w-32 border-gray-400 border- focus:outline-none"
      />
    </div>
  );
};

export default TimeField;
