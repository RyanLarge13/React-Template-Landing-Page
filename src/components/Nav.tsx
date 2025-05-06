import { Dispatch, SetStateAction, useContext } from "react";

import AppConfig from "../app-config";
import { NavContext } from "../context/NavContext";

const Nav = ({
  showNav,
  setShowNav,
}: {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
}) => {
  const { indexOfNavigation, setIndexOfNavigation } = useContext(NavContext);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 bottom-0 ${
        AppConfig.theme.mainScheme
      } duration-200 z-[999] py-20 flex flex-col justify-between items-center md:relative md:opacity-100 md:py-0 md:bg-transparent ${
        showNav
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100"
      }`}
    >
      <ul className="flex flex-col justify-center items-center w-full md:flex-row">
        {AppConfig.navigationLinks.map((link) => (
          <li key={link.id} className="w-full text-center">
            <a
              href={link.hash}
              onClick={() => {
                setIndexOfNavigation(link.id);
                setShowNav(false);
              }}
              className={`${
                indexOfNavigation === link.id
                  ? `${AppConfig.theme.bgPrimary} ${AppConfig.theme.textColorTrimary} translate-y-[10px]`
                  : ""
              } py-10 block whitespace-nowrap duration-200 w-full md:py-2 md:px-5 ${
                AppConfig.theme.bgHoverDark
              } hover:text-white md:hover:translate-y-[10px]`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setIndexOfNavigation(0);
          setShowNav(false);
        }}
        className="md:hidden cursor-pointer"
      >
        <img src={AppConfig.images.logoPath} alt="logo" className="h-20" />
      </button>
    </nav>
  );
};

export default Nav;
