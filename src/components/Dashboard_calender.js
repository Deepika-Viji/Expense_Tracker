import React, { useState } from "react";
import DatePicker from "react-datepicker";
const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="shadow-lg">
      <input
        className="rounded-md"
        type="date"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default Calendar;
