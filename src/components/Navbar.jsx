import { useState, useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import i18n from "../i18n";

export default function Navbar() {
  const { theme, setTheme } = useThemeContext();
  const [darkMode, setDarkMode] = useState(theme === "dark");
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para menu mobile

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const targetPosition = section.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
    setMenuOpen(false); // Fecha o menu ao clicar em um item
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar p-4 h-27 flex justify-between items-center z-[10]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <button className="font-semibold btn_nav z-[51]">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
        </button>

        {/* Botão Hamburguer (Somente Mobile) */}
        <button
          className="lg:hidden text-gray-800 dark:text-white text-3xl z-[10] bg-transparent 
            p-2 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu de Navegação */}
        <div
          className={`lg:flex flex-col lg:flex-row lg:space-x-6 text-gray-800 dark:text-white text-2xl gap-6  
          ${
            menuOpen
              ? "flex flex-col absolute top-20 left-0 w-full  shadow-md p-5 z-[50] navbar"
              : "hidden lg:flex"
          }`}
        >
          <button
            className="font-semibold btn_nav"
            onClick={() => scrollToSection("home")}
          >
            {t("home.title")}
          </button>
          <button
            className="font-semibold btn_nav"
            onClick={() => scrollToSection("about")}
          >
            {t("about.title")}
          </button>
          <button
            className="font-semibold btn_nav"
            onClick={() => scrollToSection("services")}
          >
            {t("services.title")}
          </button>
          <button
            className="font-semibold btn_nav"
            onClick={() => scrollToSection("contact")}
          >
            {t("contact.title")}
          </button>
          {/* Botões de Tema e Idioma */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setTheme(darkMode ? "light" : "dark");
              }}
              className="w-22 h-11 flex items-center bg-gray-300 dark:bg-gray-10 rounded-2xl p-1 transition-all"
            >
              <div
                className={`w-8 h-8 rounded-full shadow-md transform duration-300 ${
                  darkMode
                    ? "bg-white translate-x-11"
                    : "bg-[#19213D] translate-x-0"
                }`}
              >
                {/* Ícones mantidos exatamente como estavam */}
                <svg
                  height="25"
                  width="25"
                  fill="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`absolute left-0 top-0 transition-opacity duration-300 ml-1 mr-0 mt-[3px] mb-0 ${
                    darkMode ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                </svg>
                <svg
                  height="25"
                  width="25"
                  fill="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`absolute left-0 top-0 transition-opacity duration-300 ml-1 mr-0 mt-[3px] mb-0 ${
                    darkMode ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <path
                    clipRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <button
              onClick={() =>
                changeLanguage(i18n.language === "pt" ? "en" : "pt")
              }
              className="px-4 py-1 bg-gray-700 font-semibold-lang rounded-md shadow-md text-2xl"
            >
              {i18n.language === "pt" ? "ENGLISH" : "PORTUGUÊS"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
