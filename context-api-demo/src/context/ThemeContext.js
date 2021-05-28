import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState({
        isDark: false,
        dark: { bg: "#121212", contentBg: "#1e1e1e", text: "#fff" },
        light: { bg: "#fff", contentBg: "#fff", text: "#000" }
    });

    const changeTheme = () => {
		//setTheme({...theme, isDark : !theme.isDark});
        const themeCopy = { ...theme };
        themeCopy.isDark = !themeCopy.isDark;
        setTheme(themeCopy);
    }


    return (
        <ThemeContext.Provider value={{ ...theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
