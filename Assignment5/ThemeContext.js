import React, { createContext, useState } from 'react';
import Settings from './Settings';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(previousState => !previousState);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
            {/* <Settings/> */}
        </ThemeContext.Provider>
    );
};