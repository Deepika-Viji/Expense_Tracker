import { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";

const CalendarBox = () => {
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formattedDate = `${value.getDate()}/${
    value.getMonth() + 1
  }/${value.getFullYear()}`;

  return (
    <div className="relative">
      <div className="flex items-center border bg-side-color border-white rounded-lg p-2">
        <div className="flex-grow">{formattedDate}</div>
        <div
          className="ml-2 cursor-pointer"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute top-12 right-0 z-10 bg-white border border-white rounded-lg shadow-md"
        >
          <Calendar
            onChange={onChange}
            value={value}
            activeStartDate={new Date()}
            showDoubleView
          />
        </div>
      )}
    </div>
  );
};

export default CalendarBox;
