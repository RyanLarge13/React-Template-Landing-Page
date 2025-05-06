import AppConfig from "../app-config.ts";

const Services = () => {
  return (
    <section
      id="services"
      data-observer
      data-index="2"
      className={`md:px-20 lg:px-40 ${AppConfig.theme.mainScheme} text-center md:pb-40 mt-10`}
    >
      <p>{AppConfig.text.services.headingText}</p>
      <p className="text-3xl mb-20 mt-5">{AppConfig.text.services.intro}</p>
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        {AppConfig.images.services.map((service, index) => (
          <div className="relative flex-1/3">
            <div className="top-0 right-0 left-0 bottom-0 absolute">
              <p className="absolute text-6xl font-bold left-[50%] top-[50%] text-purple-500 translate-x-[-50%] translate-y-[-50%]">
                {service.text}
              </p>
            </div>
            <img
              src={service.src}
              alt={service.alt}
              className="w-full aspect-square object-cover hover:opacity-20 duration-200 isolate"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
