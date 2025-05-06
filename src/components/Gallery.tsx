import Masonry from "react-masonry-css";

import AppConfig from "../app-config.ts";

const breakpointColumnsObj = {
  default: 3,
  1100: 4,
  700: 3,
  500: 2,
};

const Gallery = () => {
  return (
    <section
      id="gallery"
      data-observer
      data-index="4"
      className={`pt-20 ${AppConfig.theme.bgSecondary}`}
    >
      <p className="text-center text-black">
        {AppConfig.text.gallery.headingText}
      </p>
      <h2
        className={`font-bold text-4xl text-center mt-3 ${AppConfig.theme.textColored} mb-40`}
      >
        Gallery
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {AppConfig.images.gallery.images.map((img, index) => (
          <img key={index} src={img.src} alt={img.alt} />
        ))}
      </Masonry>
    </section>
  );
};

export default Gallery;
