import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const [userEmail, setUserEmail] = useState("");

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
  };

  const handleSendEmail = () => {
    if (!userEmail) {
      alert("Por favor, digite seu e-mail antes de enviar.");
      return;
    }

    const mailtoLink = `mailto:artur.lascala@background-hub.com,diego.benedetti@background-hub.com?subject=Contato&body=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.%0A%0AMeu%20e-mail:%20${encodeURIComponent(
      userEmail
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <footer className="bckg-footer text-white p-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 items-center">
        {/* Seção 1: Informações */}
        <div className="text-center md:text-left">
          <p className="text-lg footer text-[18px] md:text-[20px] mb-4 md:mb-8">{t("footer.date")}</p>
          <p className="text-sm footer text-[16px] md:text-[20px]">{t("footer.direitos")}</p>
        </div>

        {/* Seção 2: Links */}
        <div className="text-start">
          <h2 className="text-3xl footer mb-4 md:mb-8">{t("footer.title")}</h2>
          <ul className="space-y-2">
            <li onClick={() => scrollToSection("about")} className="footer text-[18px] md:text-[20px]">
              {t("about.title")}
            </li>
            <li onClick={() => scrollToSection("services")} className="footer text-[18px] md:text-[20px]">
              {t("services.title")}
            </li>
          </ul>
        </div>

        {/* Seção 3: Formulário de e-mail */}
      <div className="flex flex-col justify-center items-start gap-12">
        <h2 className="text-3xl footer mb-4 md:mb-8">{t("contact.title")}</h2>
        <div className=" w-fit h-[39px] flex items-center justify-center flex-row px-[15px] py-0">
          <input
            required
            placeholder={t("footer.placeholder")}
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="p-2 rounded-md text-white bg-gray-700 w-full md:w-auto"
          />
          <button
            onClick={handleSendEmail}
            id="sendButton"
            className="bg-blue-600 text-white px-4 py-2 rounded-md w-full md:w-auto mt-2 md:mt-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 664 663" width="24" height="24">
              <path fill="none" d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"></path>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="33.67"
                stroke="#6c6c6c"
                d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    </footer>
  );
}