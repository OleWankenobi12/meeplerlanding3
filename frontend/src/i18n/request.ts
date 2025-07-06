import { getRequestConfig } from 'next-intl/server';
import en from '../../messages/en.json';
import de from '../../messages/de.json';

export default getRequestConfig(() => {
  const locale = 'en'; // Oder dynamisch via Header/Cookie später

  const messages = {
    en,
    de
  };

  return {
    locale,
    messages: messages[locale] ?? en
  };
});
