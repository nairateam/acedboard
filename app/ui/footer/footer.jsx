import React from "react";
import Wrapper from "../container/container";
import style from "@/app/ui/navbar/navbar.module.css";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#fcf4f4] mt-[40px] pt-4 lg:pt-8 lg:mt-24">
    <Wrapper>
      <div className="py-6 flex justify-between items-center">
        <div className="">
          <Image src={logo} width={147} height={37} />
        </div>
        <div className="flex justify-end items-center gap-6">
          <Link href="#" className="hidden md:flex text-[20px]">
            Ready to get started?
          </Link>
          <button className={style.btn}>
            <Link href="#" className="">
              Start for free
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-[30px] lg:gap-[60px]">
        <div className="flex-none w-full lg:w-[30%]">
        <p className="text-[24px] max-w-[200px] mb-[10px]">Subscribe to our newsletter</p>
          <form
            action=""
            className="relative w-full py-[6px] md:p-[8px] hold-form"
          >
            <input
              type="text"
              placeholder="Email Address"
              name=""
              id=""
              className="py-[13px] w-[100%]"
            />
            <button className={style.btnflow}> <Image
              src="./assets/icons/caret.svg"
              width={10}
              height={10}
            /> </button>
          </form>
        </div>
        <div className="flex-1 flex flex-wrap justify-between gap-[40px] lg:gap-[30px] py-[20px]">
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-[18px] text-[#6495ED]">Platform</h3>
            <Link href="#">Project Manager</Link>
            <Link href="#">Automation</Link>
            <Link href="#">Integration</Link>
            <Link href="#">Security</Link>
            <Link href="#">Proconomics</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-[18px] text-[#6495ED]">Features</h3>
            <Link href="#">List</Link>
            <Link href="#">Board</Link>
            <Link href="#">Workload</Link>
            <Link href="#">Calendar</Link>
            <Link href="#">Teams</Link>
            <Link href="#">Files</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-[18px] text-[#6495ED]">Company</h3>
            <Link href="#">About Us</Link>
            <Link href="#">Brands</Link>
            <Link href="#">Blogs</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Events</Link>
            <Link href="#">Contact us</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-[18px] text-[#6495ED]">Resources</h3>
            <Link href="#">Guides</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Video Library</Link>
            <Link href="#">24/7 Support</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Community</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-between items-center py-[40px] pb-[60px]">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-[10px] lg:gap-[30px]">
          <p>All Rights Reserved © acedboard 2024</p>
          <span className="flex items-center gap-[5px]">
            <Link href="#">Terms of Use</Link>
            <p>|</p>
            <Link href="#">Privacy Policy</Link>
          </span>
        </div>
        <div className="flex items-center mt-[15px] lg:mt-0 gap-[30px]">
          <Link href="#">
            <Image
              src="./assets/icons/Path.svg"
              width={25}
              height={18}
              className="max-h-[20px] w-[25px]"
            />
          </Link>
          <Link href="#">
            <Image
              src="./assets/icons/mdi_youtube.svg"
              width={25}
              height={18}
            />
          </Link>
          <Link href="#">
            <Image
              src="./assets/icons/mdi_linkedin.svg"
              width={25}
              height={18}
            />
          </Link>
          <Link href="#">
            <Image
              src="./assets/icons/div.jsx-4139997252.svg"
              width={25}
              height={18}
            />
          </Link>
        </div>
      </div>
    </Wrapper>
    </div>
  );
};

export default Footer;
