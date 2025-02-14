import { useTranslation } from "react-i18next";
import imgHome from '../assets/img-home.svg';

export default function Home() {
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
    <section id="home" className="h-screen">
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imgHome})` }}>
        <div className="absolute inset-0 "></div> {/* Filtro escuro */}
        <div className="relative z-10 flex items-center justify-end h-full px-8">
          <div className="text-white max-w-7xl text-right">
            <h2 className=" title-home text-[7rem] font-semibold mb-4">{t("home.title_h2")}</h2>
            <p className="text-2xl mb-6 title-home">{t("home.description")}</p>
            <div className="flex justify-end items-center flex-nowrap flex-row">
              <a
                onClick={() => scrollToSection("contact")}
                href="#contato"
                className=" w-48 h-24 flex items-center justify-center flex-nowrap flex-row bg-[#0353a4] text-white text-2xl font-bold title-home rounded-md shadow-md"
              >{t("home.button")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}