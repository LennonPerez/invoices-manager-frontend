"use client";

import {
  createContext,
  useContext,
  useState,
  FunctionComponent,
  ReactNode,
  useEffect,
} from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/globalStyles";
import darkTheme from "@/styles/themes/dark";
import lightTheme from "@/styles/themes/light";

const ThemesProvider: FunctionComponent<ThemesProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");

    if (storageTheme) {
      setTheme(storageTheme === "dark" ? darkTheme : lightTheme);
    } else {
      const isSystemDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isSystemDarkMode ? darkTheme : lightTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const selectedTheme = prevTheme.type === "dark" ? lightTheme : darkTheme;
      localStorage.setItem("theme", selectedTheme.type);
      return selectedTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </ThemeContext.Provider>
  );
};

interface ThemesProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export default ThemesProvider;
