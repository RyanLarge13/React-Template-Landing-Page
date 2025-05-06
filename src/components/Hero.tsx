import AppConfig from "../app-config";

const Hero = () => {
  return (
    <section
      id="main"
      data-observer
      data-index="0"
      className={`lg:flex justify-center items-center ${AppConfig.theme.bgSecondary} pb-10`}
    >
      <img
        src={AppConfig.images.hero.mainImage.src}
        alt={AppConfig.images.hero.mainImage.alt}
        className="mx-auto lg:max-h-screen"
      />

      <div className="flex-1 lg:min-h-screen lg:flex lg:flex-col justify-center items-center">
        <div className="px-5">
          <div
            className={`py-10 px-5 max-w-[400px] text-center mx-auto ${AppConfig.theme.bgPrimary} shadow-md rounded-md mt-5 relative`}
          >
            <p>
              <span
                className={`text-4xl ${AppConfig.theme.textColorTrimary} font-bold`}
              >
                {AppConfig.text.hero.introMainPoints[0]}
              </span>
              <br />
              <span
                className={`text-4xl ${AppConfig.theme.textColorTrimary} font-bold`}
              >
                {AppConfig.text.hero.introMainPoints[1]}
              </span>
              <br />
              {AppConfig.text.hero.intro}
            </p>

            <img
              src={AppConfig.images.hero.heroSvg.src}
              alt={AppConfig.images.hero.heroSvg.alt}
              className="absolute top-[-30px] left-[-20px] scale-[0.9] max-w-20"
            />
          </div>

          <div
            className={`relative px-5 max-w-[400px] mx-auto ${AppConfig.theme.mainScheme} bg-opacity-40 backdrop-blur-md shadow-md rounded-md py-10 md:translate-y-[-30px] md:translate-x-[-50px] mb-10 mt-5 md:mt-0`}
          >
            <p>{AppConfig.text.hero.catcher}</p>
          </div>
        </div>

        <a
          href="#services"
          className={`${AppConfig.theme.bgTrimary} flex mx-auto w-full max-w-[85%] justify-center items-center outline-black outline-3 ${AppConfig.theme.textColorTrimary} font-bold ${AppConfig.theme.bgHover} hover:text-black duration-200 p-5 lg:max-w-[300px] lg:mt-10`}
        >
          Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
