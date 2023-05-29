import React from "react";
import "./contact.scss";

const dataSocial = [
  {
    id: 1,
    name: "Twitter",
    description: "Follow us on Twitter",
    link: "https://twitter.com/Aizen_trading",
    path: "https://notify.org/icons/twitter.svg",
  },
  {
    id: 2,
    name: "Instagram",
    description: "Follow us on Telegram",
    path: "https://static.vecteezy.com/system/resources/previews/017/221/781/original/telegram-logo-transparent-free-png.png",
    link: "https://t.me/DongTradeCoin",
  },
  {
    id: 3,
    name: "",
    description: "Support",
    path: "https://notify.org/icons/waitlist.svg",
    link: "https://t.me/Mina_Support",
  },
];

const Contact = () => {
  return (
    <section className="page-container " id="contact">
      <h2 className="text-center text-white font-bold text-2xl uppercase mb-6">
        Stay Up To Date
      </h2>
      <div className="grid grid-cols-1 gap-6 md:px-20 lg:grid lg:grid-cols-3 lg:px-[10em] w-full z-[1] mb-9">
        {dataSocial.length > 0 &&
          dataSocial.map((item) => (
            <a target="_blank" rel="noopener noreferrer" href={item.link}>
              <div className="box-contact flex flex-row justify-start lg:flex-col lg:justify-center">
                <div className="card-logo mr-4">
                  <span className="inner">
                    <img src={item.path} alt="" />
                  </span>
                </div>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
      </div>
    </section>
  );
};

export default Contact;
