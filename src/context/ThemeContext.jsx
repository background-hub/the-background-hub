import { createContext, useContext } from "react";
import PropTypes from 'prop-types';
import useTheme from "../hooks/useTheme";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
