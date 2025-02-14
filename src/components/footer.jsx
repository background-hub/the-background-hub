import { useTranslation } from "react-i18next";

export default function Footer() {
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
    const { t } = useTranslation();
    return (
        <footer className="bckg-footer text-white p-8 flex items-center flex-nowrap flex-row justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-80 items-center">
                <div className="text-center md:text-left">
                    <p className="text-lg footer text-[20px] mb-8">{t("footer.date")}</p>
                    <p className="text-sm footer text-[20px]">{t("footer.direitos")}</p>
                </div>
                <div className="text-start">
                    <h2 className="text-3xl footer mb-8">{t("footer.title")}</h2>
                    <ul className="space-y-2">
                    <li onClick={() => scrollToSection("about")} className="footer text-[20px]">{t("about.title")}</li>
                    <li onClick={() => scrollToSection("services")} className="footer text-[20px]">{t("services.title")}</li>
                    </ul>
                </div>
                <div className="flex flex-col flex-nowrap justify-center items-start">
                    <h2 className="text-3xl footer mb-8">{t("contact.title")}</h2>
                    <div className="messageBox">
                        <input required placeholder={t("footer.placeholder")} type="text" id="messageInput" />
                        <button id="sendButton">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                                <path
                                fill="none"
                                d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                                ></path>
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
  