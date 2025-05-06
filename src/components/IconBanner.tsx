import AppConfig from "../app-config";
import IconTranslate from "./IconTranslate";

const IconBanner = () => {
  return (
    <section
      className={`${AppConfig.theme.bgPrimary} overflow-hidden flex justify-center items-center relative`}
    >
      {/* Decorative element for fading icons in and out of view gently */}
      <div className="icon-banner-side-shadow"></div>
      <div className="p-3 flex justify-evenly items-center min-w-[125%]">
        {AppConfig.images.iconBanner.images.map((img, index) => (
          <IconTranslate key={index} img={img} />
        ))}
      </div>
    </section>
  );
};

export default IconBanner;
