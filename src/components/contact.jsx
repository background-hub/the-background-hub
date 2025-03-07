import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo-grande.svg";

export default function Contact() {
  const { t } = useTranslation();
  const [isFormVisible, setFormVisible] = useState(false);

  const handleFormToggle = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 mx-8 my-24"
      id="contact"
    >
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="w-3/4 max-w-md h-auto" />
      </div>
      <div className="text-left space-y-6">
        <h2 className="text-6xl font-bold text-gray-900 dark:text-white">
          {t("contact.title")}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t("contact.description")}
        </p>
        <button
          onClick={handleFormToggle}
          className="w-48 h-24 bg-[#0353a4] text-white text-2xl font-bold title-home rounded-md shadow-md flex items-center justify-center btn-contact"
        >
          <p className="texto-contato">
            {isFormVisible ? t("contact.close") : t("contact.open")}
          </p>
        </button>

        {/* Formulário que aparece suavemente */}
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isFormVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {isFormVisible && (
            <form
              action="mailto:artur.lascala@background-hub.com,diego.benedetti@background-hub.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">{t("contact.formTitle")}</h3>

              <div className="space-y-2">
                <label htmlFor="name" className="text-lg">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-lg">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-lg">
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={t("contact.phonePlaceholder")}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-lg">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0353a4] text-white text-xl font-bold py-2 rounded-md mt-4"
              >
                {t("contact.send")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
