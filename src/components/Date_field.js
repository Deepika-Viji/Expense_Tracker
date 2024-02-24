import React, { useState } from "react";
import DatePicker from "react-datepicker";
const Datefield = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <input
        type="date"
        onChange={(date) => setStartDate(date)}
        className="border-b border-gray-400  focus:outline-none"
      />
    </div>
  );
};

export default Datefield;
