import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="h-screen container mx-auto px-6 py-14" id="about">
      <div className="max-w-3xl text-left mb-35">
        <h2 className="text-6xl font-semibold text-gray-800 dark:text-white mb-4">
          {t("about.title")}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300  w-[99rem] text-[23px]">
          {t("about.description")}
        </p>
      </div>

      <div className="max-w-3xl text-left mb-20">
        <h2 className="text-6xl font-semibold text-gray-800 dark:text-white mb-4">
          {t("about.approachTitle")}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300  w-[99rem] text-[23px]">
          {t("about.approachDescription")}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="p-6 text-center rounded-lg w-[50rem] shadow-[2px_8px_20px_0px_#dbdada87]">
          <h3 className="text-4xl font-bold text-[#2388FF] title-boxs mb-12">
            {t("about.reachTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
            {t("about.reachDescription")}
          </p>
        </div>
        <div className="p-6 text-center rounded-lg w-[50rem] shadow-[2px_8px_20px_0px_#dbdada87]">
          <h3 className="text-4xl font-bold text-[#2388FF] title-boxs mb-12">
            {t("about.experienceTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
            {t("about.experienceDescription")}
          </p>
        </div>
        <div className="p-6 text-center rounded-lg w-[50rem] shadow-[2px_8px_20px_0px_#dbdada87]">
          <h3 className="text-4xl font-bold text-[#2388FF] title-boxs mb-12">
            {t("about.dynamismTitle")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
            {t("about.dynamismDescription")}
          </p>
        </div>
      </div>
    </section>
  );
}