import AppConfig from "../app-config";
import IconTranslate from "./IconTranslate";

const IconBanner = () => {
  return (
    <section
      className={`${AppConfig.theme.bgPrimary} overflow-hidden h-[75px] relative`}
    >
      {/* Decorative element for fading icons in and out of view gently */}
      <div className="icon-banner-side-shadow"></div>
      {AppConfig.images.iconBanner.images.map((img, index) => (
        <IconTranslate
          key={index}
          img={img}
          offset={index}
          len={AppConfig.images.iconBanner.images.length}
        />
      ))}
    </section>
  );
};

export default IconBanner;
