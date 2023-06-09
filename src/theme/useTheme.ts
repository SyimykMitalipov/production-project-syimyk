import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { LOCAL_STORAGE_THEME } from "./ThemeContext";
import { Theme } from "./ThemeContext";

export interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME, newTheme)
    }
    return { theme, toggleTheme };
}