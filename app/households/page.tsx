"use client";

import React, { ChangeEvent } from "react";
import axios from "axios";
import { CategoryType } from "../../type";

function Households() {
  const [formData, setFormData] = React.useState({ amount: 0, category: 1 });
  const [categories, setCategories] = React.useState<CategoryType[]>([]);

  React.useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("http://localhost:3000/api/categories");
      const c: CategoryType[] = await res.data;
      setCategories(c);
    };

    getCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: Number(value),
      };
    });
  };

  const handleForm = (e: React.FormEvent<HTMLElement>) => {
    const createHousehold = async () => {
      const res = await axios.post("http://localhost:3000/api/households", {
        amount: formData.amount,
        categoryId: formData.category,
      });
      console.log("households/page.tsx", res.data);
    };

    createHousehold();
  };

  return (
    <>
      <div className="max-w-xl">
        {/* redirect to top page */}
        <form
          action="/"
          method="post"
          className="flex flex-col gap-4"
          onSubmit={(e) => handleForm(e)}
        >
          <div className="field">
            <label htmlFor="amount">Amount: </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              className="px-2 py-1"
            />
          </div>

          <div className="field">
            <label htmlFor="category">Category: </label>
            <select
              name="category"
              id="category"
              className="px-2 py-1"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <button
              type="submit"
              className="bg-slate-800 hover:bg-slate-300 text-white hover:text-black px-2 py-1 rounded-md duration-200 transition-all"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Households;
