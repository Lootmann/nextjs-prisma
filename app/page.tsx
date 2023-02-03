import React from "react";
import axios from "axios";
import { CategoryType, HouseholdType } from "../type";

export default async function Page() {
  async function getHouseholds() {
    const url = "http://localhost:3000/api/households";
    const res = await axios.get(url);
    return res.data;
  }

  const households: HouseholdType[] = await getHouseholds();

  return (
    <div>
      <h2 className="mb-6 font-bold border-b-2 border-gray-800">Households</h2>

      <div className="p-2 bg-slate-300 text-xl gap-3">
        <table className="table-auto table">
          <thead>
            <tr className="tr uppercase">
              <th className="th">id</th>
              <th className="th">Category Name</th>
              <th className="th">Amount</th>
            </tr>
          </thead>

          <tbody>
            {households.map((household) => (
              <tr key={household.id} className="tr">
                <td className="td">{household.id}</td>
                <td className="td">{household.category.name}</td>
                <td className="td">{household.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
