import { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { createContext, Dispatch, SetStateAction } from "react";

export enum Theme {
  LIGHT,
  DARK,
}

interface IThemeContext {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === Theme.DARK ? "dark" : ""}>
        <Header />
        <div className="container">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
