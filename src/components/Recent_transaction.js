import React, { useState, useEffect } from "react";
import { infodata } from "../assets/data/data";

const Recent_transaction = () => {
  const [data, setData] = useState(infodata);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (index) => {
    const isSelected = selectedRows.includes(index);

    if (isSelected) {
      setSelectedRows((prev) => prev.filter((item) => item !== index));
    } else {
      setSelectedRows((prev) => [...prev, index]);
    }
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(Array.from({ length: data.length }, (_, i) => i));
    }

    setSelectAll((prev) => !prev);
  };

  const isDeleteDisabled = selectedRows.length === 0;

  const handleDelete = () => {
    const newData = data.filter((_, index) => !selectedRows.includes(index));
    setData(newData);
    setSelectedRows([]);
  };

  useEffect(() => {
    setSelectedRows([]);
    setSelectAll(false);
  }, [data]);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <button className="h-8 bg-bggreen text-white w-32 rounded-sm ml-0 mt-4">
            Add Transaction
          </button>
        </div>
        <div className="flex flex-row  mr-5 h-10 mt-4 font-medium">
          <button
            onClick={handleDelete}
            className={`${
              isDeleteDisabled
                ? "text-gray-300 cursor-not-allowed"
                : "text-red-600 cursor-pointer"
            } text-white px-4 py-2 rounded`}
            disabled={isDeleteDisabled}
          >
            Delete
          </button>
        </div>
      </div>

      <table className="table-auto min-w-full rounded border-l border-r border-b border-l-white border-r-white border-b-white">
        <thead>
          <tr>
            <th className="border-t bg-bgblack border-white text-left  px-4 py-2">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
            </th>
            <th className="border-t bg-bgblack border-white text-left text-white px-4 py-2">
              Category
            </th>
            <th className="border-t bg-bgblack border-white text-left text-white px-4 py-2">
              Date
            </th>
            <th className="border-t bg-bgblack border-white text-left text-white px-4 py-2">
              Payment Mode
            </th>
            <th className="border-t bg-bgblack px-4 py-2 text-white text-left">
              Description
            </th>
            <th className="border-t bg-bgblack px-4 py-2 text-white text-left">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border-t border-white text-white px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td className="border-t border-white px-4 text-white py-2">
                {item.category}
              </td>
              <td className="border-t border-white text-white px-4 py-2">
                {item.date}
              </td>
              <td className="border-t border-white text-white px-4 py-2">
                {item.paymentMode}
              </td>
              <td className="border-t px-4 text-white py-2">
                {item.description}
              </td>
              <td className="border-t px-4 text-white py-2">₹ {item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recent_transaction;
