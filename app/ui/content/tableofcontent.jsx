'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import caret from "@/public/assets/caret-down.svg";
import style from './toc.module.css';

const TableOfContent = () => {
  const [openItem, setOpenItem] = useState(0); // Initialize with 0 to open the first item by default
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Item = [
    {
      title: "Projects",
      link: "#",
      children: [
        { title: "What is a project?", link: "#project" },
        { title: "Creating a New Project", link: "#newproject" },
        { title: "Naming your projects and Select View Modes", link: "#nameproject" },
        { title: "Simple project Operations", link: "#simpleproject" },
        { title: "Adding members to a project", link: "#addmemberstoproject" },
      ],
    },
    {
      title: "Workspace",
      link: "#",
      children: [
        { title: "Subfeature 1", link: "#" },
        { title: "Subfeature 2", link: "#" },
      ],
    },
    {
      title: "Task Priority",
      link: "#",
      children: [
        { title: "Subfeature 1", link: "#" },
        { title: "Subfeature 2", link: "#" },
      ],
    },
    {
      title: "File",
      link: "#",
      children: [
        { title: "Subfeature 1", link: "#" },
        { title: "Subfeature 2", link: "#" },
      ],
    },
  ];

  const handleDropdown = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="p-0 lg:p-5 rounded-2xl  shadow-md toc">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Articles in this section</span>
        <button
          className="block md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Image 
            src={caret} 
            width={24} 
            height={24} 
            alt="Toggle Dropdown" 
          />
        </button>
      </div>
      <nav className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="space-y-2 pt-3">
          {Item.map((item, index) => (
            <li key={index} className="flex flex-col">
              <a
                href={item.link}
                onClick={item.children ? (e) => {
                  e.preventDefault();
                  handleDropdown(index);
                } : undefined}
                className={`flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md ${
                  openItem === index ? 'bg-white' : ''
                }`}
              >
                {item.title}
                {item.children && (
                  <span className="ml-2">
                    <Image 
                      src={caret} 
                      width={20} 
                      height={20} 
                      className={`transform ${openItem === index ? 'rotate-180' : ''}`} 
                      alt="Caret Icon" 
                    />
                  </span>
                )}
              </a>
              {item.children && openItem === index && (
                <ul className="pl-4 mt-2 space-y-1">
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <a
                        href={child.link}
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 px-4 py-2 text-[#000] leading-0 hover:bg-gray-200 rounded-md"
                      >
                        <p className='w-[4px] h-[4px] bg-black rounded'></p> {child.title}
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

export default TableOfContent;
