"use client";
import React, { useState } from "react";
import Image from "next/image";
import caret from "@/public/assets/caret-down.svg";
import menu from "@/public/assets/menu.svg";

const SideMenu = () => {
  const [openItem, setOpenItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    {
      title: "Features",
      link: "#",
      children: [
        { title: "Subfeature 1", link: "#" },
        { title: "Subfeature 2", link: "#" },
      ],
    },
    {
      title: "Solution",
      link: "#",
      children: [
        { title: "Subfeature 1", link: "#" },
        { title: "Subfeature 2", link: "#" },
      ],
    },
    {
      title: "Case Study",
      link: "#",
    },
    {
      title: "Resources",
      link: "#",
      children: [
        { title: "Subfeature 1", link: "#" },
        { title: "Subfeature 2", link: "#" },
      ],
    },
    {
      title: "Pricing",
      link: "#",
    },
  ];

  const handleDropdown = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <span onClick={toggleMenu} className="block lg:hidden">
        <Image src={menu} width={25} height={25} className="md: width-[30px]" />
      </span>
      <nav
        className={`fixed top-0 left-0 w-64 h-full py-4 bg-white shadow-lg transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <ul className="flex flex-col p-4">
          {items.map((item, index) => (
            <li key={index} className="relative mb-4">
              <a
                href={item.link}
                onClick={
                  item.children
                    ? (e) => {
                        e.preventDefault();
                        handleDropdown(index);
                      }
                    : undefined
                }
                className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
              >
                {item.title}
                {item.children && (
                  <span className="ml-2">
                    <Image
                      src={caret}
                      width={20}
                      height={20}
                      className={`transform transition-transform ${
                        openItem === index ? "rotate-180" : ""
                      }`}
                      alt="Caret Icon"
                    />
                  </span>
                )}
              </a>
              {item.children && openItem === index && (
                <ul className="mt-2 space-y-2 pl-6">
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <a
                        href={child.link}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
