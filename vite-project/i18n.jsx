import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Tus traducciones en inglés
        }
      },
      es: {
        translation: {
          // Tus traducciones en español
        }
      }
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma al que caer si no se encuentra el del usuario
    interpolation: {
      escapeValue: false // React ya se encarga de escapar los valores
    }
  });

export default i18n;