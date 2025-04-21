import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Home: "Home",
      about: "About",
      contact: "Contact",
      project: "Project",
      Media: "Social Media"
    }
  },
  id: {
    translation: {
      Home: "Beranda",
      about: "Tentang",
      contact: "Kontak",
      project: "Proyek",
      Media: "Media Sosial"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // bahasa default
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
