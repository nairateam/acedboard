import React from "react";
import Wrapper from "../container/container";
import style from "./navbar.module.css";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import menu from "@/public/assets/menu.svg";
import MenuItems from "./menu";
import Link from "next/link";
import Breadcrumb from "./breadcrumb";
import SideMenu from "./sidemenu/sidemenu";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="py-6 flex justify-between items-center">
        <div className="">
          <Image src={logo} width={147} height={37} />
        </div>
        <div className="">
          <MenuItems />
        </div>
        <div className="flex justify-end items-center gap-6">
          <Link href="#" className="hidden md:flex">
            Sign in
          </Link>
          <button className={style.btn}>
            <Link href="#" className="">
              Start for free
            </Link>
          </button>
          <SideMenu />
        </div>
      </div>
      <Breadcrumb />
    </Wrapper>
  );
};

export default Navbar;
