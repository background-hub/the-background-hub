import { useTranslation } from "react-i18next";

export default function Servicos() {
  const { t } = useTranslation();
  return (
    <section id="services" className="mx-auto px-6 py-16 background-service">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:mx-56 my-20">
        {/* Título e descrição principal */}
        <div className="flex items-start flex-col space-y-6 lg:space-y-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            {t("services.title")}
          </h2>
          <p className="text-base lg:text-[23px] text-gray-700 dark:text-gray-300 mt-2">
            {t("services.description")}
          </p>
        </div>

        {/* Serviços */}
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-12">
              {t("services.consultancy")}
            </h2>
            <p className="text-base lg:text-[23px] text-gray-700 dark:text-gray-300 mt-2">
              {t("services.consultancy_txt")}
            </p>
          </div>
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-12">
              {t("services.support")}
            </h2>
            <p className="text-base lg:text-[23px] text-gray-700 dark:text-gray-300 mt-2">
              {t("services.support_txt")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}