import React, { useReducer } from 'react';

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {

    const reducer = (theme, action) => {
        switch (action.type) {
            case 'CHANGE_THEME':
                return { ...theme, isDark: !theme.isDark };
        }
    }

    const initialState = {
        isDark: false,
        dark: { bg: "#121212", contentBg: "#1e1e1e", text: "#fff" },
        light: { bg: "#fff", contentBg: "#fff", text: "#000" }
    };

    const [theme, dispatch] = useReducer(reducer, initialState);

    return (
        <ThemeContext.Provider value={{ ...theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
