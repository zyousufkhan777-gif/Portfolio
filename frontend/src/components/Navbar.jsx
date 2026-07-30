import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    `hover:text-blue-500 transition-all duration-200 ${
      isActive ? "border-b-2 border-blue-600 pb-1" : ""
    }`;

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header data-aos="fade-down" className="bg-gray-900 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <span className="text-4xl text-blue-600 font-bold">YO</span>

          <h1 className="text-lg font-semibold hidden sm:block">
            Yousuf Omarzai
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <NavLink key={item.name} to={item.path} className={navStyle}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden flex flex-col gap-5 mt-6 text-center">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={navStyle}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
