import React from "react";
import BG from "../../assets/mainsection-bg.jpg";
import Logo from "../../assets/logosave.png";
import "./home.scss";

const Home = () => {
  return (
    <section className="mt-[4rem]" id="home">
      <div className="page-container grid grid-cols-1 gap-0 md:px-[5vw] md:grid-cols-[35%_50%] md:gap-[12%] lg:px-0 lg:gap-[15%]">
        <div
          className="w-[50%] mt-0 mb-12 mx-auto md:w-full md:mx-auto md:mt-16 md:mb-6 lg:w-full aspect-square rounded-[2rem] 
          bg-bgVaraint bg-gradient-to-b from-white 
            to-primary-300 bg-transparent grid place-items-center "
        >
          <div data-scroll data-scroll-speed="1" className="about__me-img ">
            <img
              src={Logo}
              alt=""
              className="overflow-hidden rotate-6 hover:rotate-0 transition-all "
            />
          </div>
        </div>
        <div className="md:mt-16 lg:mt-[5rem] mx-8">
          <h2 className="text-7xl leading-[1.3] font-semibold">
            ĐỘNG <br />
            TÀI PHIỆT
          </h2>
          <p className="text-medium font-medium my-6 lg:my-8">
            <span className="font-semibold text-2xl">One-stop solutions</span>:
            Trade Signals, List hold x10, insights, news và hơn thế nữa!
          </p>
          <a href="#pricing" className="btn btnmain cursor-pointer">
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
