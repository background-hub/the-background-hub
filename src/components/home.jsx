import { useTranslation } from "react-i18next";
import imgHome from '../assets/img-home.svg';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imgHome})` }}>
      <div className="absolute inset-0 "></div> {/* Filtro escuro */}
      <div className="relative z-10 flex items-center justify-end h-full px-8">
        <div className="text-white max-w-7xl text-right">
          <h2 className=" title-home text-[7rem] font-semibold mb-4">{t("home.title_h2")}</h2>
          <p className="text-2xl mb-6 title-home">{t("home.description")}</p>
          <a
            href="#contato"
            className=" w-48 h-24 inline-block bg-[#0353a4] text-white text-2xl font-bold title-home rounded-md shadow-md px-[49px] py-7"
          >{t("home.button")}</a>
        </div>
      </div>
    </div>
  );
}