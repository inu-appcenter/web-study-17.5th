import { createContext } from "react";

export const ThemeContext = createContext<{
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isDark: false,
  setIsDark: () => { },
});
