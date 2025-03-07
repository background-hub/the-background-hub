import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="h-auto lg:h-screen container mx-auto px-6 py-14" id="about">
      <div className="max-w-3xl text-left mb-20">
        <h2 className="text-4xl lg:text-6xl font-semibold text-gray-800 dark:text-white mb-4">
          {t("about.title")}
        </h2>
        <p className="text-base lg:text-[23px] text-gray-600 dark:text-gray-300 w-full lg:w-[99rem]">
          {t("about.description")}
        </p>
      </div>

      <div className="max-w-3xl text-left mb-20">
        <h2 className="text-4xl lg:text-6xl font-semibold text-gray-800 dark:text-white mb-4">
          {t("about.approachTitle")}
        </h2>
        <p className="text-base lg:text-[23px] text-gray-600 dark:text-gray-300 w-full lg:w-[99rem]">
          {t("about.approachDescription")}
        </p>
      </div>

      {/* Blocos com responsividade */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="p-6 text-center rounded-lg shadow-[2px_8px_20px_0px_#dbdada87] blocks w-full md:w-[50rem]">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2388FF] title-boxs mb-6 lg:mb-12">
            {t("about.reachTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-base lg:text-xl">
            {t("about.reachDescription")}
          </p>
        </div>

        <div className="p-6 text-center rounded-lg shadow-[2px_8px_20px_0px_#dbdada87] blocks w-full md:w-[50rem]">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2388FF] title-boxs mb-6 lg:mb-12">
            {t("about.experienceTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-base lg:text-xl">
            {t("about.experienceDescription")}
          </p>
        </div>

        <div className="p-6 text-center rounded-lg shadow-[2px_8px_20px_0px_#dbdada87] blocks w-full md:w-[50rem]">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2388FF] title-boxs mb-6 lg:mb-12">
            {t("about.dynamismTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-base lg:text-xl">
            {t("about.dynamismDescription")}
          </p>
        </div>
      </div>
    </section>
  );
}