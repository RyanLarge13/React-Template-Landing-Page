import { useEffect, useState } from "react";

import AppConfig from "../app-config.ts";

const Testimonials = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setSliderIndex((prev) =>
        prev === AppConfig.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 20000);

    return () => clearInterval(slide);
  }, []);

  return (
    <section
      id="testimonials"
      data-observer
      data-index="3"
      className={`${AppConfig.theme.bgSecondary} py-20 min-h-screen p-5 flex justify-center items-center flex-col`}
    >
      <p className="text-center">{AppConfig.text.testimonials.headingText}</p>
      <h2
        className={`font-bold text-4xl text-center mt-3 mb-2 ${AppConfig.theme.textColored}`}
      >
        {AppConfig.text.testimonials.intro}
      </h2>
      <div className="flex overflow-hidden justify-start items-center">
        {AppConfig.testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              transform: `translateX(-${100 * sliderIndex}%)`,
              opacity: sliderIndex === i ? 1 : 0,
            }}
            className="md:flex md:mt-20 md:gap-x-10 justify-center items-center min-w-full duration-400"
          >
            <img src={t.img} alt="person" />
            <div className="mt-5 ml-3">
              <p className="max-w-[400px]">{t.text}</p>
              <p className={`${AppConfig.theme.textColored} font-semibold`}>
                {t.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation for slider */}
      <div className="flex justify-center items-center mt-40 gap-x-1">
        {AppConfig.testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setSliderIndex(i)}
            className={`rounded-full shadow-md cursor-pointer ${
              i === sliderIndex
                ? `w-5 h-2 ${AppConfig.theme.bgTrimary}`
                : `w-2 h-2 ${AppConfig.theme.bgPrimary}`
            } duration-200`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
