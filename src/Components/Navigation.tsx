import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="h-[80px] flex justify-between bg-yellow-950 items-center text-white">
      <span className="font-bold ml-4">PanProdaction2024pl</span>
      <span>
        <a href="/" className="mr-2 pl-1 ml-2">
          Product24
        </a>
        <a href="/about" className="mr-4">
          About
        </a>
      </span>
    </nav>
  );
}
