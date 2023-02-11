"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import { IoMdMenu, IoMdClose } from "react-icons/io";

type NavItem = {
  label: string;
  page: string;
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },

  {
    label: "About",
    page: "about",
  },

  {
    label: "Works",
    page: "works",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className=" w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:border-stone-600 dark:bg-black dark:text-white">
      <div className=" justify-between md:items-center md:flex ">
        {/* hamburger shit */}
        <div>
          <div>
          <div className="md:py-5 md:block">
            <h2 className=" text-2xl font-bold">RicardoParedes</h2>
          </div> 

          <div>
            <button>{navbar ? <IoMdClose/> : <IoMdMenu/> }</button>
          </div>

          </div>
          
        </div>

        <div className="items-center justify-center md:flex md:space-x-6 ">
          {NAV_ITEMS.map((item, idx) => {
            return (
              <Link key={idx} href={"#"}>
                {item.label}
              </Link>
            );
          })}
          {/*  */}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
