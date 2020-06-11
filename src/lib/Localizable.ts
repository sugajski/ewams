import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import moment from 'moment';
import 'moment/min/locales.min';
import get from 'lodash/get';
import pl from './languages/pl.json';

const defaultLanguageTag = 'pl-PL';

const supportedLanguages = [defaultLanguageTag];

const locales = RNLocalize.getLocales();
const languageTag = get(locales, '0.languageTag', null);

if (languageTag && supportedLanguages.includes(languageTag)) {
  I18n.locale = languageTag;
  moment.locale(languageTag);
} else {
  I18n.locale = defaultLanguageTag;
  moment.locale('pl');
}

I18n.fallbacks = true;
I18n.translations = {pl};

const Localizable = I18n;

export default Localizable;
