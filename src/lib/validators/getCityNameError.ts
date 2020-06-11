import {Localizable} from '../';

const getCityNameError = (value: string) => {
  if (value.length > 0 && !/^[A-Za-zÀ-ž`\- ]+$/.test(value)) {
    return Localizable.t('errors.lettersOnly');
  }
  if (value.length === 0) {
    return Localizable.t('errors.emptyValue');
  }
  return null;
};

export default getCityNameError;
