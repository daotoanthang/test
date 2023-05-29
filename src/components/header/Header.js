import React, { useState, useRef } from "react";
import "./header.scss";
import logo from "../../assets/logosave.png";

const Header = () => {
  const clickMenu = (e) => {
    const btnMenu = document.querySelector(".btnmenu");
    const nav = document.querySelector(".nav");
    btnMenu.classList.toggle("active");
    nav.classList.toggle("active");
  };

  const deleteNav = (e) => {
    const nav = document.querySelector(".nav");
    const btnMenu = document.querySelector(".btnmenu");
    btnMenu.classList.toggle("active");
    nav.classList.toggle("active");
  };
  return (
    <div className="header h-[60px] md:h-[80px] w-full z-[300] fixed top-0 left-0">
      <div className="h-full flex items-center justify-between px-[30px]">
        <div className="logo">
          <a href="#" rel="noopener noreferrer" target="_blank">
            <img className="w-20 h-20" src={logo} alt="" />
            <h1 className="hidden">Notify</h1>
          </a>
        </div>
        <div className="menu hidden h-full lg:flex lg:items-center lg:absolute lg:left-2/4 lg:-translate-x-2/4">
          <a
            className="text-white mx-[18px] font-medium text-base"
            href="#home"
          >
            Trang chủ
          </a>

          <a
            className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all"
            href="#feature"
          >
            Tính năng
          </a>
          <a
            className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all"
            href="#pricing"
          >
            Bảng giá
          </a>
          <a
            className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all"
            href="#success"
          >
            Thành tựu
          </a>
          {/* <a
            className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all"
            href="#faq"
          >
            FAQ
          </a> */}
          <a
            className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all"
            href="#contact"
          >
            Liên hệ
          </a>
        </div>
        <div class="right h-full inline-flex items-center">
          <div class="lang h-full flex items-center cursor-pointer relative">
            <div class="lang__current">
              <span>VN</span>
              <i>
                <img src="" alt="" />
              </i>
            </div>
          </div>
          <div className="btnmenu block sm:block lg:hidden" onClick={clickMenu}>
            <span></span>
          </div>
        </div>
        <nav class="nav">
          <ul>
            <li>
              <a
                onClick={deleteNav}
                href="#home"
                className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all navElement"
              >
                Trang chủ
              </a>
            </li>
            <li>
              <a
                onClick={deleteNav}
                href="#feature"
                className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all"
              >
                Tính năng
              </a>
            </li>
            <li>
              <a
                onClick={deleteNav}
                href="#pricing"
                className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all"
              >
                Bảng giá
              </a>
            </li>
            <li>
              <a
                onClick={deleteNav}
                href="#success"
                className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all"
              >
                Thành tựu
              </a>
            </li>
            {/* <li>
              <a
                onClick={deleteNav}
                href="#faq"
                className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all"
              >
                FAQ
              </a>
            </li> */}
            <li>
              <a
                onClick={deleteNav}
                href="#contact"
                className="text-white mx-[18px] font-medium text-base hover:opacity-50 transition-all"
              >
                Liên hệ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
