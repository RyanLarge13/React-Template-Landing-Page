import { useCallback, useEffect, useRef, useState } from "react";

const IconTranslate = ({
  img,
  offset,
  len,
}: {
  img: { src: string; alt: string };
  offset: number;
  len: number;
}) => {
  const [trans, setTrans] = useState(
    window.innerWidth + offset * (window.innerWidth / len)
  );

  const imgRef = useRef(null);
  const speed = Math.max(0.3, 0.75 - Number(`0.${len}`) || 0);

  useEffect(() => {
    const animationRequest = requestAnimationFrame(translateIcon);

    return () => cancelAnimationFrame(animationRequest);
  }, [imgRef]);

  const translateIcon = () => {
    setTrans((prev) => prev - speed);
    checkTranslation();
    requestAnimationFrame(translateIcon);
  };

  const checkTranslation = useCallback(() => {
    if (imgRef.current) {
      const img = imgRef.current as HTMLElement;
      const rect = img.getBoundingClientRect();

      if (rect.right < 7) {
        img.style.transition = "none";
        setTrans(window.innerWidth - 15);
        setTimeout(() => {
          img.style.transition = `500ms linear`;
        }, 150);
      }
    }
  }, [imgRef]);

  return (
    <img
      ref={imgRef}
      src={img.src}
      alt={img.alt}
      className="h-[30px] opacity-50 duration-500 ease-linear absolute top-1/2 -translate-y-1/2"
      style={{ transform: `translateX(${trans}px)` }}
    />
  );
};

export default IconTranslate;
