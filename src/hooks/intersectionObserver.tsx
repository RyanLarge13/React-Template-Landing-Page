import { useEffect } from "react";

export const useIntersectionObserver = (
  onEnter: (entry: IntersectionObserverEntry) => void,
  onLeave?: (entry: IntersectionObserverEntry) => void
) => {
  useEffect(() => {
    const elements = document.querySelectorAll("section[data-observer]");

    console.log(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onEnter(entry);
          } else if (onLeave) {
            onLeave(entry);
          }
        });
      },
      {
        threshold: 0.5, // or whatever visibility % you need
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [onEnter, onLeave]);
};
