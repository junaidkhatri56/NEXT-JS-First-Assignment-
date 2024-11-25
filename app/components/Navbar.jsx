import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 shadow-md z-50">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold text-indigo-700">Next JS</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}  className="hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"}  className="hover:text-indigo-600">
                About
              </Link>
            </li>
            <li>
              <Link href={"/users"}  className="hover:text-indigo-600">
               Users
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="hover:text-indigo-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
