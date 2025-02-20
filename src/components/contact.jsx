import { useTranslation } from "react-i18next";
import logo from "../assets/logo-grande.svg";

export default function Contact() {
    const { t } = useTranslation();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 mx-8 my-24" id="contact">
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="w-3/4 max-w-md h-auto" />
      </div>
      <div className="text-left space-y-6">
        <h2 className="text-6xl font-bold text-gray-900 dark:text-white">{t("contact.title")}</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">{t("contact.description")}
        </p>
        <a
          href="mailto:seuemail@exemplo.com"
          className="w-48 h-24 bg-[#0353a4] text-white text-2xl font-bold title-home rounded-md shadow-md flex items-center justify-center flex-nowrap flex-row"
        >
         contato
        </a>
      </div>
    </section>
  );
}