import i18next from "i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

type Language = {
  nativeName: string;
};

type Languages = {
  [key: string]: Language;
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    supportedLngs: ["en", "uk"],
    fallbackLng: "en",
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

export default i18next;

export const languages: Languages = {
  en: { nativeName: "English" },
  uk: { nativeName: "Українська" },
};
