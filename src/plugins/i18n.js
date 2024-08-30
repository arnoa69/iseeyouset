import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

// const getCurrentLanguage = () => {
//   // Schritt 1: Überprüfe, ob die Sprache im Query-String vorhanden ist
//   const queryParams = new URLSearchParams(window.location.search);
//   const queryLanguage = queryParams.get('lang'); // Hier verwendest du 'lang' als Schlüssel im Query-String

//   if (queryLanguage) {
//     // Wenn die Sprache im Query-String gefunden wurde, gib sie zurück
//     return queryLanguage;
//   }

//   // Schritt 4: Falls keine Sprache gefunden wurde, gib eine Standardsprache zurück
//   return 'de'; // Hier kannst du deine Standardsprache festlegen
// };

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: window.navigator.language.substring(0, 2) || "de",
  fallbackLocale: "en",
  availableLocales: ["en", "de"],
  messages: messages,
});