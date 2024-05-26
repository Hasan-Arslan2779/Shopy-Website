import React from "react";
// Logo
import Logo from "../../assets/logo.png";
// İcons
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2 sm:py-1">
        <div className=" container flex justify-between items-center ">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10 " />
              Shopy
            </a>
          </div>
          <div className=" flex justify-between items-center gap-4">
            {/* search bar and order button */}
            <div>
              <div className="group relative hidden sm:block  items-center ">
                <input
                  type="text"
                  placeholder="Searc it"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2" />
              </div>
            </div>
            {/* Order Button */}
            <button
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-2 text-white py-1 px-4 flex items-center gap-3 group rounded-full"
              onClick={() => alert("Ürün Hazır Değil")}
            >
              <span className="group-hover:block hidden transition-all duration-200 font-bold">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* DarkMode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center sticky">
        <ul className="sm:flex  hidden items-center gap-4 font-bold">
          {Menu.map((data, index) => {
            return (
              <li key={index}>
                <a
                  className="inline-block px-4 hover:text-primary duration-200"
                  href={data.link}
                >
                  {data.name}
                </a>
              </li>
            );
          })}
          {/* Siimple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px] py-2 
            hover:text-primary duration-200"
            >
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
