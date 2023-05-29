import React, { useEffect, useRef } from "react";
import icon from "../../assets/iconfeature.png"
import "./feature.scss";

const dataLeft = [
  {
    id: 1,
    name: "Premium Alpha News",
    des: "Tiếp cận thông tin RA TIỀN sớm nhất, nhận phân tích và quan điểm trước các tin tức quan trọng trong thị trường.",
    path: "https://cdn3d.iconscout.com/3d/premium/thumb/money-back-guarantee-3980375-3297228.png?fbclid=IwAR3RsOD0YJwbLot7mi7Bu8HJCSTt5KMrt-FbLeD5nZfwj4HQ-l6SkNe4fsQ",
  },
  {
    id: 2,
    name: "Premium Private Calls",
    des: "Nhận những kèo trade private cả spot lẫn future siêu chất lượng và siêu lợi nhuận từ các admin đầy kinh nghiệm thực chiến. ",
    path: "https://notify.org/_next/image?url=%2Ffeatures%2Fnotify%2Fretail.png&w=3840&q=75",
  },
  {
    id: 3,
    name: "Lastest narratives insights",
    des: "Nhận các phân tích chuyên sâu từ phân tích cơ bản, phân tích kỹ thuật, on-chain, timing,…  sớm nhất  thị trường, giúp bạn bắt trend và có vị thế đẹp nhất. ",
    path: "https://notify.org/_next/image?url=%2Ffeatures%2Fnotify%2Faco.png&w=3840&q=75",
  },
  {
    id: 4,
    name: "Group Discussion",
    des: "Thảo luận, đóng góp ý kiến cùng các admin để có những insights tốt nhất hái ra tiền ",
    path: "https://notify.org/_next/image?url=%2Ffeatures%2Fnotify%2Faco.png&w=3840&q=75",
  },
];

const dataRight = [
  {
    id: 1,
    name: "Whitelist + Private Pool",
    des: "Nhận slot Whitelist token sale, NFT mint, đi private pool các dự án tiềm năng khả năng xx cùng team ",
    path: "https://notify.org/_next/image?url=%2Ffeatures%2Femerging%2Fcalls.png&w=3840&q=75",
  },
  {
    id: 2,
    name: "Crypto portfolio consulting services ",
    des: "Miễn phí tư vấn và cơ cấu portfolio, list coin hold dài hạn update liên tục. ",
    path: "https://notify.org/_next/image?url=%2Ffeatures%2Femerging%2Fcalls.png&w=3840&q=75",
  },
  {
    id: 3,
    name: "Network expansion ",
    des: "Mở rộng network với các Founder, co-founder các team crypto, team dự án cùng các admin. ",
    path: "https://notify.org/_next/image?url=%2Ffeatures%2Femerging%2Fcalls.png&w=3840&q=75",
  },
  {
    id: 4,
    name: "Bot Alert (Coming soon) ",
    des: "Miễn phí sử dụng các loại Bot alert từ Bot báo whale, Bot Trade signal,…",
    path: "https://notify.org/_next/image?url=%2Ffeatures%2Femerging%2Fcalls.png&w=3840&q=75",
  },
];

const Feature = () => {
  return (
    <section id="feature" className="feature page-container">
      <h2 className="mb-3 md:mb-0 text-center text-2xl font-semibold uppercase">
        Tính năng
      </h2>
      <h5 className="text-center text-base font-normal relative">
        Cung cấp tất cả mọi thứ bạn cần khi tham gia thị trường Crypto
      </h5>
      <div className="my-[3em] flex flex-col md:flex-row w-full mx-6">
        {/* Left */}

        <div className="left flex flex-col items-center w-full md:w-2/4">
          {/* <h3 className="mt-0 mb-[19px] text-2xl w-[100%]">Notify</h3> */}
          <div>
            {dataLeft.length > 0 &&
              dataLeft.map((item) => (
                <div className="box md:h-[160px] lg:h-[150px]">
                  <div class="img-obj">
                    <img src={icon} alt="" />
                  </div>
                  <div className="text">
                    <h4>{item.name}</h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* Right */}
        <div className="right flex flex-col items-center w-full md:w-2/4">
          {/* <h3 className="mt-0 mb-[19px] text-2xl w-[100%]">Emerging</h3> */}
          <div>
            {dataRight.length > 0 &&
              dataRight.map((item) => (
                <div className="box lg:h-[150px] md:h-[160px] group-hover:scale-125">
                  <div class="img-obj">
                    <img src={icon} alt="" />
                  </div>
                  <div className="text">
                    <h4>{item.name}</h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
