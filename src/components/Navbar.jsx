import { useState, useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";  // Usando o contexto de tema
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Navbar() {
  const { theme, setTheme } = useThemeContext();  // Acessando theme e setTheme do contexto
  const [darkMode, setDarkMode] = useState(theme === "dark");
  const { t } = useTranslation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // Atualiza o estado de darkMode com base no theme do contexto
    setDarkMode(theme === "dark");
  }, [theme]);

  // Alternar idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar p-4 h-27 flex flex-nowrap justify-center items-center flex-row">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menu */}
        <div className="flex space-x-6 text-gray-800 dark:text-white text-2xl gap-6">
          <a className="font-semibold" href="#">{t("home")}</a>
          <a className="font-semibold" href="#">{t("about")}</a>
          <a className="font-semibold" href="#">{t("services")}</a>
          <a className="font-semibold" href="#">{t("contact")}</a>
        </div>

        {/* Controles */}
        <div className="flex items-center space-x-4">
          {/* Toggle Dark Mode */}
          <button
            onClick={() => {
                setDarkMode(!darkMode);
                setTheme(darkMode ? "light" : "dark");
            }}
            className="w-22 h-11 flex items-center bg-gray-300 dark:bg-gray-10 rounded-full p-1 transition-all"
            >
            <div
                className={`w-8 h-8 rounded-full shadow-md transform duration-300 ${darkMode ? "bg-white translate-x-11" : "bg-[#19213D] translate-x-0"}`}
            >
                {/* Modo Claro - Sol */}
                <svg
                height="25"
                width="25"
                fill="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute left-0 top-0 transition-opacity duration-300 ml-[3px] mr-px mt-0.5 mb-px ${darkMode ? "opacity-0" : "opacity-100"}`}
                >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                </svg>

                {/* Modo Escuro - Lua */}
                <svg
                height="25"
                width="25"
                fill="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute left-0 top-0 transition-opacity duration-300 ml-[3px] mr-px mt-0.5 mb-px ${darkMode ? "opacity-100" : "opacity-0"}`}
                >
                <path clipRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fillRule="evenodd"></path>
                </svg>
            </div>
            </button>


          {/* Botão de linguagem */}
          <button
            onClick={() => changeLanguage(i18n.language === "pt" ? "en" : "pt")}
            className="px-4 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-semibold-lang rounded-md shadow-md text-2xl"
          >
            {i18n.language === "pt" ? "ENGLISH" : "PORTUGUÊS"}
          </button>
        </div>
      </div>
    </nav>
  );
}
