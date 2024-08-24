import React from "react";
import Navbar from "../ui/navbar/navbar";
import Wrapper from "../ui/container/container";
import style from "../ui/navbar/navbar.module.css";
import TableOfContent from "../ui/content/tableofcontent";
import Content from "../ui/content/content";
import Footer from "../ui/footer/footer";

const HelpCenter = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <div className="flex justify-between flex-wrap lg:flex-nowrap px-[0px] lg:px-[10px]">
          <div className="">
            <h2 className="text-[32px] sm:text-[36px] lg:text-[42px] xl:text-[52px] leading-0 pb-1 w-[260px] md:w-full capitalize font-bold">
              How can we <span className="text-decor">help you</span> today?
            </h2>
            <p className="text-[16px] md:text-[20px] text-[#74757A] mb-4">
              Lorem Ipsum is simply dummy text of the printing{" "}
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <form
              action=""
              className="relative w-full md:w-[400px] p-[6px] md:p-[8px] bg-[#C2C7D066] rounded-[16px] form-holder"
            >
              <input
                type="text"
                placeholder="Find in templates"
                name=""
                id=""
                className="p-[13px] w-[100%] rounded-[14px]"
              />
              <button className={style.btnfloat}>Search</button>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap items-start px-[0px] lg:px-[10px] my-[50px] gap-[40px] lg:gap-[60px]">
          <div className="static lg:sticky top-[20px] md:block flex-none w-full lg:w-[25%]">
            <TableOfContent />
          </div>
          <div className="flex-1">
            <Content />
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default HelpCenter;
