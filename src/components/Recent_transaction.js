import React from "react";
import { infodata } from "../assets/data/data";
const Recent_transaction = () => {
  return (
    <div>
      <table className="table-auto min-w-full border-l border-r border-b border-l-gray-300 border-r-gray-300 border-b-gray-300 ">
        <thead>
          <tr>
            <th className=" border-t bg-bg_table border-gray-300 text-left px-4 py-2">
              Category
            </th>
            <th className=" border-t bg-bg_table border-gray-300 text-left px-4 tpx-2 py-2 ">
              Date
            </th>
            <th className=" border-t bg-bg_table border-gray-300 text-left px-4 py-2">
              Payment Mode
            </th>
            <th className="border-t bg-bg_table px-4 py-2 text-left 4">
              Description
            </th>
            <th className="border-t bg-bg_table px-4 py-2 text-left ">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {infodata.map((section) =>
            section.data.map((item, index) => (
              <tr key={item.id}>
                <td className=" border-t border-gray-300 px-4 py-2">
                  {section.category}
                </td>
                <td className=" border-t border-gray-300 px-4 py-2">
                  {section.date}
                </td>
                <td className="border-t border-gray-300 px-4 py-2">
                  {section.paymentMode}
                </td>
                <td className="border-t px-4 py-2">{section.description}</td>
                <td className="border-t px-4 py-2">{section.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Recent_transaction;
