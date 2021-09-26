import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './en/en.json'
import translationsTR from './tr/tr.json'
import LanguagesEnum from "../enums/LanguagesEnum";

const resources = {
    en: {
        translation: translationsEN
    },
    tr: {
        translation: translationsTR
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: LanguagesEnum.English, // default language
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
