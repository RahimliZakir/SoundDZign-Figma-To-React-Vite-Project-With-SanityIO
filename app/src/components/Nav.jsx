import { useState } from "react";

import { MenuBar, MenuBarActive } from "../assets/images";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="fixed z-[999] top-6 w-full">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between xl:justify-start lg:justify-start md:justify-start px-10 h-[80px] bg-black/50 rounded-b-[10px] backdrop-blur-[20px]">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/4">
              <h6 className="font-inter text-white font-extrabold">
                Sound<span className="text-red">DZign</span>
              </h6>
            </div>
            <div className="hidden xl:block lg:block md:block xl:w-1/2 lg:w-1/2 md:w-3/4">
              <ul
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                className="flex justify-between text-white font-extrabold font-inter"
              >
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#course-details">Course Details</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="block xl:hidden lg:hidden md:hidden">
              <img
                onClick={() => setIsActive(true)}
                src={MenuBar}
                alt="Menu Bar Image"
              />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          isActive ? "translate-y-0" : "translate-y-[-100%]"
        } bg-navBlack z-[1000] fixed top-0 left-0 right-0 p-[30px] block xl:hidden lg:hidden md:hidden duration-500`}
      >
        <div className="flex justify-end">
          <img
            onClick={() => setIsActive(false)}
            src={MenuBarActive}
            alt="Menu Bar Active Image"
          />
        </div>
        <ul
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          className="text-white font-extrabold font-inter"
        >
          <li className="mb-[30px]">
            <a href="#about">About</a>
          </li>
          <li className="mb-[30px]">
            <a href="#course-details">Course Details</a>
          </li>
          <li className="mb-[30px]">
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
