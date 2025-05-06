import React, { useCallback, useEffect, useRef, useState } from "react";

const IconTranslate = ({ img }: { img: { src: string; alt: string } }) => {
  const [trans, setTrans] = useState(0);

  const imgRef = useRef(null);

  useEffect(() => {
    let interval = 0;
    interval = setInterval(() => {
      setTrans((prev) => prev - 10);
      checkTranslation();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const checkTranslation = useCallback(() => {
    if (imgRef.current) {
      const img = imgRef.current as HTMLElement;
      const rect = img.getBoundingClientRect();

      if (rect.left + rect.width < 0) {
        setTrans((prev) => window.innerWidth + prev + rect.width * 2);
      }
    }
  }, [imgRef]);

  return (
    <img
      ref={imgRef}
      src={img.src}
      alt={img.alt}
      className="h-[30px] opacity-50 duration-500 ease-linear"
      style={{ transform: `translateX(${trans}px)` }}
    />
  );
};

export default IconTranslate;
