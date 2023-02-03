import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="p-4 text-slate-200 bg-slate-700 flex items-baseline gap-4">
      <Link href="/" className="text-3xl underline mr-4">
        HouseHolds
      </Link>

      <Link href="/households" className="text-2xl hover:text-red-700">
        Create
      </Link>
    </header>
  );
}

export default Header;
