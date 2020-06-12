import {Alert} from 'react-native';
import Localizable from './Localizable';

const showError = (description: string) =>
  Alert.alert(Localizable.t('errors.error'), Localizable.t(description));

const ErrorHandler = {
  noCurrentForecastResults() {
    showError('errors.noCurrentForecastResults');
  },
  noHourlyForecastResults() {
    showError('errors.noCurrentForecastResults');
  },
  readingSearchHistoryFailed() {
    showError('errors.readingSearchHistoryFailed');
  },
  savingSearchHistoryFailed() {
    showError('errors.savingSearchHistoryFailed');
  },
};

export default ErrorHandler;
