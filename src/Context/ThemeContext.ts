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
