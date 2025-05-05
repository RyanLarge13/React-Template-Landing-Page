import React, { createContext, Dispatch, SetStateAction, useState } from "react";

interface NavContextProps {
  indexOfNavigation: number;
  setIndexOfNavigation: Dispatch<SetStateAction<number>>;
}

export const NavContext = createContext({} as NavContextProps);

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [indexOfNavigation, setIndexOfNavigation] = useState(0);

  return (
    <NavContext.Provider value={{ indexOfNavigation, setIndexOfNavigation }}>
      {children}
    </NavContext.Provider>
  );
};
