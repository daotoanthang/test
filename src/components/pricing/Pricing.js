import React from "react";
import "./pricing.scss";
import { BsCheckLg } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className="page-container pricing" id="pricing">
      <h2 className="mb-3 md:mb-0 text-center text-2xl font-semibold">
        PLANS & PRICING
      </h2>
      <h4 className="text-center text-base font-normal relative">
        Level Up Your Crypto Game Today
      </h4>
      <p class="pricing-header-subtext text-center mt-3 md:min-w-[430px]">
        From individual investors to crypto funds and global teams. Explore the
        best option for you.
      </p>

      <div className="pricing-plans flex-wrap md:flex-wrap lg:flex-nowrap">
        <div className="pricing-card basic min-w-[320px] md:min-w-[360px] cursor-pointer">
          <div className="heading">
            <h4 className="gold-member">GOLD MEMBER</h4>
            {/* <p>for small websites or blogs</p> */}
          </div>
          <strike className="font-normal text-xl text-[#999999]">129$</strike>
          <p className="price">
            99$
            {/* <sub>/month</sub> */}
          </p>
          {/* <p className="normal-price text-sm font-normal text-[#787b86]">
            $155.40/year
          </p> */}
          <div className="bg-[#08998140] rounded-[4px] mb-[30px] flex flex-row flex-nowrap justify-center py-[6px] mt-[10px] mx-10">
            <span className="text-sm text-white font-semibold">
              Bạn tiết kiệm được 30$
            </span>
          </div>
          <button className="cta-btn mb-12">
            <a
              target="_blank"
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
            >
              THAM GIA GÓI 1 THÁNG
            </a>
          </button>

          <ul className="features">
            <li>
              <i class="fa-solid fa-check text-[16px]">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Tín hiệu Premium Spot </strong> (only Private)
            </li>

            <li>
              <i class="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Tín hiệu Premium Future</strong> (only Private)
            </li>
            <li>
              <i class="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Premium Alpha News </strong>
            </li>
            <li>
              <i class="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Alpha Insights sớm nhất </strong>
            </li>
            <li>
              <i class="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Nhóm thảo luận với các Admin </strong>
            </li>
            <li>
              <i class="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Tài liệu nội bộ </strong>
            </li>
            <li>
              <i class="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Tư vấn portfolio </strong>
            </li>
          </ul>
        </div>
        <div className="pricing-card basic min-w-[320px] md:min-w-[360px] cursor-pointer">
          <div className="heading">
            <h4 className="diamond-member">DIAMOND MEMBER</h4>
            {/* <p>for small websites or blogs</p> */}
          </div>
          <strike className="font-normal text-xl text-[#999999]">
            387$ - 774$
          </strike>
          <p className="price">239$ - 399$ {/* <sub>/month</sub> */}</p>
          {/* <p className="normal-price text-sm font-normal text-[#787b86]">
            $155.40/year
          </p> */}
          <div className="bg-[#08998140] rounded-[4px] mb-[30px] flex flex-row flex-nowrap justify-center py-[6px] mt-[10px] mx-2  lg:mx-8 md:mx-10">
            <span className="text-sm text-white font-semibold">
              Bạn tiết kiệm được 148$ - 375$
            </span>
          </div>
          <button className="cta-btn mb-12 md:w-[300px] lg:w-[300px]">
            <a
              target="_blank"
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
            >
              THAM GIA 3 THÁNG - 6 THÁNG
            </a>
          </button>

          <ul className="features">
            <li>
              <i class="fa-solid fa-check text-[16px]">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Tất cả quyền lợi của Gold member </strong>
            </li>

            <li>
              <i class="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Private pool + Whitelist </strong> (only Private)
            </li>
            <li>
              <i class="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>List coin hold long-term </strong>
            </li>
            <li>
              <i class="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Bot alert (Coming soon) </strong>
            </li>
            <li>
              <i class="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Branded Merchandise Gift </strong> (Coming soon)
            </li>
          </ul>
        </div>

        <div className="pricing-card premium min-w-[320px] md:min-w-[360px] cursor-pointer">
          <div className="heading">
            <h4 className="friend-text">FRIEND OF SHELTER </h4>
            {/* <p>for small businesses</p> */}
          </div>
          <strike className="font-normal text-xl text-[#999999]">1548$</strike>
          <p className="price">599$</p>
          {/* <p className="normal-price text-sm font-normal text-[#787b86]">
            $155.40/year
          </p> */}
          <div className="bg-[#08998140] rounded-[4px] mb-[30px] flex flex-row flex-nowrap justify-center py-[6px] mt-[10px] mx-10">
            <span className="text-sm text-white font-semibold">
              Bạn tiết kiệm được 949$
            </span>
          </div>
          <button className="cta-btn mb-12">
            <a
              target="_blank"
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
            >
              THAM GIA GÓI 12 THÁNG
            </a>
          </button>
          <ul className="features">
            <li>
              <i className="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Tất cả quyền lợi của Diamond Member </strong>
            </li>
            <li>
              <i className="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Tư vấn 1 : 1 </strong>
            </li>
            <li>
              <i className="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Networking </strong>
            </li>
            <li>
              <i className="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Premium Private pool + Whitelist </strong>
            </li>
            <li>
              <i className="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Early access các tính năng mới </strong>
            </li>
            <li>
              <i className="fa-solid fa-check">
                <BsCheckLg className="inline-block " />
              </i>
              <strong>Quà tặng đặc biệt trong tương lai </strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
