import { FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";

import AppConfig from "../app-config";

const Footer = () => {
  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      className={`min-h-[50vh] ${AppConfig.theme.bgSecondary} md:px-20 lg:px-40 xl:px-60`}
    >
      <div className="border-b p-5 border-b-white lg:flex justify-between items-center gap-x-40">
        <div className="flex-1 p-5">
          <h2
            className={`font-bold text-4xl mt-3 ${AppConfig.theme.textColored}`}
          >
            {AppConfig.businessData.businessName}
          </h2>
          <p className="mt-5 mb-2 text-black">{AppConfig.text.footer.intro}</p>
          <hr className="text-black" />
          <div className="flex justify-start items-center gap-x-5 mt-3 text-black">
            <a
              href="https://wa.me/message/3O2DQS4WSGV4H1"
              target="_blank"
              className={`${AppConfig.theme.textHover} cursor-pointer duration-200 text-lg`}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="mt-10 p-5 flex-1 text-black">
          <div>
            <h3
              className={`font-bold text-2xl mt-3 ${AppConfig.theme.textColored}`}
            >
              Useful Links
            </h3>
            <ul>
              <li>
                <a
                  className={`${AppConfig.theme.textHover} duration-200`}
                  href="#news"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  className={`${AppConfig.theme.textHover} duration-200`}
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className={`${AppConfig.theme.textHover} duration-200`}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className={`${AppConfig.theme.textHover} duration-200`}
                  href="#about"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h3
              className={`font-bold text-2xl mt-3 ${AppConfig.theme.textColored}`}
            >
              Subscribe
            </h3>
            <p>
              Subscribe to weekly offers and give the best care to your loved
              ones
            </p>
            <form
              onSubmit={handleSubscribe}
              className={`rounded-full outline-none text-white focus:outline-white focus:outline-3 shadow-sm my-2 w-full ${AppConfig.theme.bgPrimary} flex justify-between`}
            >
              <input
                type="text"
                placeholder="Your Email"
                className="w-full focus:outline-none py-3 px-4"
              />
              <button
                type="submit"
                className={`rounded-full ${AppConfig.theme.bgTrimary} p-3 w-13 outline-white outline-2 duration-200 ${AppConfig.theme.bgHover} hover:text-black hover:outline-black cursor-pointer`}
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="p-10 text-black">
        <p className="text-xs text-center">
          Copyright @${AppConfig.businessData.businessName}, All Rights Reserved
        </p>
        <div>
          <ul className="flex gap-x-5 mt-5 justify-center items-center">
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
