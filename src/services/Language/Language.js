import Strings from './strings';

// lang arg take a user language - RU / EN and return a text in current language
const Language = () => {
  const userLang = window.navigator.language;
  // if user local language is English - return text on English language
  if (userLang.match(/^en/g)) return Strings.en;
  // if user local language is Russian - return text on Russian language
  else if (userLang.match(/^ru/g)) return Strings.ru;
  return false;
};

export default Language;
