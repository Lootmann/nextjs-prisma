"use client";

import React, { cache, use } from "react";
import axios from "axios";
import { CategoryType } from "../../type";

function Households() {
  const [amount, setAmount] = React.useState<number>(0);
  const [selected, setSelected] = React.useState<number>(1);
  const [categories, setCategories] = React.useState<CategoryType[]>([]);

  React.useEffect(() => {
    const getCategories = async () => {
      const res = await axios("http://localhost:3000/api/categories");
      const c: CategoryType[] = await res.data;
      setCategories(c);
    };

    getCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const num = Number(e.target.value);
    setAmount(num);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hoge");
    // TODO: post to Prisma via axios
  };

  return (
    <>
      <div className="max-w-xl">
        <form
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
              value={amount}
              onChange={(e) => handleChange(e)}
              className="px-2 py-1"
            />
          </div>

          <div className="field">
            <label htmlFor="category">Category: </label>
            <select name="category" id="category" className="px-2 py-1">
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
