'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import caret from "@/public/assets/caret-down.svg"

const MenuItems = () => {

    const [openItem, setOpenItem] = useState(null);
    
    const Item = [
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
            link: "#"
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
            link: "#"
        },   
    ];

    const handleDropdown = (index) => {
        setOpenItem(openItem === index ? null : index);
      };

  return (
    <nav className="relative">
      <ul className="hidden lg:flex items-center">
        {Item.map((item, index) => (
          <li key={index} className="relative">
            <a
              href={item.link}
              onClick={item.children ? (e) => {
                e.preventDefault();
                handleDropdown(index);
              } : undefined}
              className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              {item.title}
              {item.children && (
                <span className="ml-2">
                  {openItem === index ? (
                    <Image src={caret} width={20} height={20} />
                  ) : (
                    <Image src={caret} width={20} height={20} />
                  )}
                </span>
              )}
            </a>
            {item.children && openItem === index && (
              <ul className="absolute left-0 mt-2 w-full bg-white shadow-lg">
                {item.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <a
                      href={child.link}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
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
  )
}

export default MenuItems