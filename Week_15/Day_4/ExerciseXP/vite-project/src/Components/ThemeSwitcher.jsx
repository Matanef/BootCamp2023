import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher = ()=> {
    const { theme, toggleTheme } = useTheme()

    return(
        <>
        <button onClick={toggleTheme}>Switch Theme</button>
        <p>current theme: {theme}</p>
        </>
    )
}

export default ThemeSwitcher