import { FormEvent, useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
import { PiPawPrintFill } from "react-icons/pi";

import AppConfig from "./app-config";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import IconBanner from "./components/IconBanner";
// import IconBanner from "./components/IconBanner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
// import Testimonials from "./components/Testimonials";
import searchableTerms from "./constants/searchableTerms";
import { NavContext } from "./context/NavContext";
import { useIntersectionObserver } from "./hooks/intersectionObserver";

const App = () => {
  const { setIndexOfNavigation } = useContext(NavContext);

  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleNavId = (entry: IntersectionObserverEntry) => {
    const section = entry.target as HTMLElement;
    const index = parseInt(section.dataset.index || "0");

    setIndexOfNavigation(index);
  };

  useIntersectionObserver(
    (entry) => handleNavId(entry),
    () => null
  );

  const findId = () => {
    let href = "main";

    searchableTerms.forEach((term) => {
      term.texts.forEach((txt) => {
        if (txt.includes(searchText.toLowerCase())) {
          href = term.id;
        }
      });
    });

    return href;
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = findId();

    setSearchText("");

    const elem = document.getElementById(id);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", id);
    }
  };

  return (
    <main className={`overflow-x-clip`}>
      {/* Advertisement div */}
      <div
        aria-roledescription="advertisement"
        role="none"
        className={`${AppConfig.theme.bgPrimary} text-center p-1`}
      >
        <p className="text-white font-bold text-[70%]">
          {AppConfig.text.advertisement}
        </p>
      </div>

      <header
        className={`flex justify-between items-center sticky top-0 right-0 left-0 ${AppConfig.theme.bgSecondary} z-10 shadow-sm`}
      >
        <a href="#main">
          <img
            src={AppConfig.images.logoPath}
            alt="shelly's pets awesome logo"
            className="h-14"
          />
        </a>
        <Nav showNav={showNav} setShowNav={setShowNav} />
        <button
          className={`p-5 ${AppConfig.theme.textHover} duration-200 md:hidden cursor-pointer`}
          onClick={() => setShowNav((prev) => !prev)}
        >
          <PiPawPrintFill />
        </button>
        <div className="hidden md:flex justify-center items-center flex-shrink mr-2">
          {showSearch ? (
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchText}
                className={`rounded-md outline-none focus:outline-white focus:outline-3 ${AppConfig.theme.bgTrimary} py-2 px-4`}
                placeholder="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </form>
          ) : null}
          <button
            className={`p-2 ${AppConfig.theme.textHover} cursor-pointer duration-200`}
            onClick={() => setShowSearch((prev) => !prev)}
          >
            {showSearch ? <CgClose /> : <FaSearch />}
          </button>
          <a
            href={AppConfig.socialLinks.whatsapp}
            target="_blank"
            className={`${AppConfig.theme.textHover} cursor-pointer duration-200 block p-2`}
          >
            <FaWhatsapp />
          </a>
        </div>
      </header>

      <Hero />

      <About />

      <Services />

      <Testimonials />

      <IconBanner />

      <Gallery />

      <Contact />

      <Footer />
    </main>
  );
};

export default App;
