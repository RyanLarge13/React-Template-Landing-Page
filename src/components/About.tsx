import { FaCheckCircle } from "react-icons/fa";

import AppConfig from "../app-config";

const About = () => {
  return (
    <section
      id="about"
      data-observer
      data-index="1"
      className="lg:flex lg:flex-row-reverse lg:min-h-screen lg:p-40 relative min-h-screen"
    >
      <div
        className={`absolute w-[600px] h-[300px] lg:h-[600px] ${AppConfig.theme.textColored} top-0 right-0 z-[-1]`}
      ></div>
      <div className="relative">
        <img
          src={AppConfig.images.about.mainImage.src}
          alt={AppConfig.images.about.mainImage.alt}
          className="aspect-square rounded-md shadow-md mx-auto"
        />
        <div
          className={`h-40 w-3 rounded-full ${AppConfig.theme.bgTrimary} absolute left-0 top-[50%] translate-x-[-50%]`}
        ></div>
      </div>

      <div className="flex-1 p-10">
        <p>{AppConfig.text.about.headingText}</p>
        <h2
          className={`text-3xl mt-3 font-bold ${AppConfig.theme.textColored}`}
        >
          About {AppConfig.businessData.businessName}
        </h2>
        <p className="max-w-[500px]">{AppConfig.text.about.intro}</p>
        <ul className="mt-3">
          {AppConfig.text.about.listOfQualities.map((quality, index) => (
            <li key={index} className="flex justify-start items-center">
              <FaCheckCircle
                className={`${AppConfig.theme.textColored} mr-5`}
              />
              <p>{quality}</p>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`${AppConfig.theme.bgTrimary} flex mt-10 w-full justify-center items-center outline-black outline-3 ${AppConfig.theme.textColorTrimary} font-bold ${AppConfig.theme.bgHover} hover:text-black duration-200 p-5 lg:max-w-[300px] lg:mt-10`}
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default About;
