import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <Link to="/" className="flex items-center">
            <h1 className="font-bold">TODO</h1>
          </Link>
          <div className="" id="">
            <ul className="flex mt-4 font-medium  lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b font-bold sm:text-2xl
                    ${isActive ? " text-orange-700" : "text-gray-700"}
                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Todo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Employee"
                  className={(isActive) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b font-bold sm:text-2xl
                    ${isActive ? " text-orange-700" : "text-gray-700"}
                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Employee
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
