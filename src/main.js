import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n';
import router from './router'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://community.icureset.com' 
})

export default api;

import de from './locales/de.json';
import dk from './locales/dk.json';
import ee from './locales/ee.json';
import en from './locales/en.json';
import es from './locales/es.json';
import fi from './locales/fi.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import lu from './locales/lu.json';
import ne from './locales/ne.json';
import no from './locales/no.json';
import pt from './locales/pt.json';
import se from './locales/se.json';

const messages = {
  en: en,
  de: de,
  dk: dk,
  ee: ee,
  es: es,
  fi: fi,
  fr: fr,
  it: it,
  lu: lu,
  ne: ne,
  no: no,
  pt: pt,
  se: se
};

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: messages
});

createApp(App).use(i18n).use(router).mount('#app');
