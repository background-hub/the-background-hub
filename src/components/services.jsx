import { useTranslation } from "react-i18next";

export default function Servicos() {
    const { t } = useTranslation();
    return (
      <section id="services" className="mx-auto px-6 py-16 background-service">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-20">
          <div className="flex items-start flex-col space-y-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            {t("services.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-[23px]">
                {t("services.description")}</p>
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
              {t("services.consultancy")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-[23px]">
              {t("services.consultancy_txt")}
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
              {t("services.support")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-[23px]">
              {t("services.support_txt")}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}  