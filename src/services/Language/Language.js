import Strings from './strings';

// lang arg take a user language - RU / EN and return a text in current language
const Language = () => {
  const userLang = window.navigator.language;
  // if user local language is Russian - return text on Russian language
  if (userLang === 'ru') {
    return Strings.ru;
  }
  // else if user language is not Russian - return text on English language
  return Strings.en;
};

export default Language;
