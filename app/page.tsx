import React from "react";
import { getCategories, getHouseholds } from "../api/category";

export default async function Page() {
  const categories = await getCategories();
  const households = await getHouseholds();

  return (
    <div>
      <h2 className="mb-6 font-bold border-b-2 border-gray-800">Households</h2>

      <div className="p-2 bg-slate-300 gap-3">
        <h2>Households List</h2>

        <div className="flex">
          <div className="flex-1 text-md m-2 p-2 border-2 border-slate-700 rounded-md">
            <ul>
              {categories.map((c) => (
                <li key={c.id}>
                  {c.id}, {c.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 text-md m-2 p-2 border-2 border-slate-700 rounded-md">
            <ul>
              {households.map((h) => (
                <li key={h.id}>
                  {h.id} Amount: {h.amount}, Category.Name: {h.category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
