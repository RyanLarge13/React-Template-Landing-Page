import { useEffect, useState } from "react";

import testimonials from "../constants/testimonials";

const Testimonials = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setSliderIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 20000);

    return () => clearInterval(slide);
  }, []);

  return (
    <section
      id="testimonials"
      data-observer
      data-index="3"
      className="bg-purple-100 py-20 min-h-screen p-5 flex justify-center items-center flex-col"
    >
      <p className="text-center">OUR TESTIMONIALS</p>
      <h2 className="font-bold text-4xl text-center mt-3 mb-20 text-purple-500">
        What They're Talking About
      </h2>
      <div className="flex overflow-hidden justify-start items-center">
        {testimonials
          ? testimonials.map((t, i) => (
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
                  <p className="text-purple-500 font-semibold">{t.name}</p>
                </div>
              </div>
            ))
          : null}
      </div>
      {/* Navigation for slider */}
      <div className="flex justify-center items-center mt-40 gap-x-1">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setSliderIndex(i)}
            className={`rounded-full shadow-md cursor-pointer ${
              i === sliderIndex
                ? "w-5 h-2 bg-purple-500"
                : "w-2 h-2 bg-purple-300"
            } duration-200`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
