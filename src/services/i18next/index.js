import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      //Auth

      //Drawer
      "Home": "HOME",
      "Search":"SEARCH",
      "About":"ABOUT",
      "Contact_Us":"CONTACT US",
      "Advertise_With_Us":"ADVERTISE WITH US",
      "Team":"TEAM",
      "Tables":"TABLES",
      "Settings":"Settings",
      "Profile":"PROFILE",
      //Home Screen
      "News":"NEWS",
      "Recommended":"RECOMMENDED", 
    }
  },
  br: {
    translation: {
      //Auth Screens

      //Drawer
        "Home": "LAR",
        "Search":"PROCURAR",
        "About":"SOBRE",
        "Contact_Us":"CONTATE-NOS",
        "Advertise_With_Us":"ANUNCIE CONOSCO",
        "Team":"EQUIPE",
        "Tables":"TABELAS",
        "Settings":"DEFINIÇÕES",
        "Profile":"PERFIL",
      //Home Screen 
      "News":"NOTÍCIAS",
      "Recommended":"RECOMENDADO" 

    }
  }
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;