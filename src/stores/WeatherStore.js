import {observable, action, flow} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import get from 'lodash/get';

import {Colors} from '../themes';
import {RestClient} from '../services';
import {ErrorHandler, Localizable} from '../lib';
import {getCityNameError} from '../lib/validators';

const HISTORY_KEY = 'dashboard.history';

class WeatherStore {
  @observable loading = false;
  @observable cityName = '';
  @observable searchHistory = [];
  @observable error = '';
  @observable routerHistory = null;
  cityTextInputRef = null;

  initWeatherStore = flow(function* initWeatherStore(
    routerHistory,
    cityTextInputRef,
  ) {
    try {
      this.routerHistory = routerHistory;
      this.cityTextInputRef = cityTextInputRef;
      this.loading = true;
      const storedHistoryArray = yield AsyncStorage.getItem(HISTORY_KEY);
      if (storedHistoryArray) {
        const parsedHistoryArray = JSON.parse(
          storedHistoryArray,
        ).map((record) => ({city: record.city, date: moment(record.date)}));
        this.searchHistory = parsedHistoryArray;
      }
      this.loading = false;
    } catch (error) {
      ErrorHandler.readingSearchHistoryFailed();
    }
  }).bind(this);

  @action
  handleCityNameOnChange = (text) => {
    if (this.error.length > 0) {
      this.error = '';
    }
    this.cityName = text;
  };

  @action
  setButtonColor = () => {
    if (this.error.length > 0) {
      return Colors.magenta;
    }
    if (this.cityName.length > 0 && !this.loading) {
      return Colors.sapphire;
    }
    return Colors.slate;
  };

  checkCurrentForecast = flow(function* checkCurrentForecast(
    record,
    setAnimation,
  ) {
    try {
      const errorDescription = getCityNameError(record);
      if (errorDescription) {
        setAnimation(true);
        this.error = errorDescription;
        this.blurCityInput();
        return;
      }
      this.cityName = record;
      this.blurCityInput();
      this.loading = true;
      const currentForecastResponse = yield RestClient.checkCurrentForecast(
        record,
      );
      this.handleCheckCurrentForecastResponse(
        currentForecastResponse.data,
        record,
        setAnimation,
      );
    } catch (error) {
      this.handleCheckCurrentForecastError(setAnimation);
    }
  }).bind(this);

  @action
  handleCheckCurrentForecastResponse = (response, record, setAnimation) => {
    this.refreshHistory(record, response, setAnimation);
  };

  @action
  handleCheckCurrentForecastError = (setAnimation) => {
    setTimeout(() => {
      this.loading = false;
      setAnimation(true);
    }, 500);
    ErrorHandler.noCurrentForecastResults();
  };

  @action
  blurCityInput = () => {
    if (this.cityTextInputRef && this.cityTextInputRef.current) {
      this.cityTextInputRef.current.blur();
    }
  };

  refreshHistory = flow(function* refreshHistory(
    record,
    response,
    setAnimation,
  ) {
    try {
      const searchHistoryArray = this.searchHistory.filter(
        (historyRecord) => historyRecord.city !== record,
      );
      if (searchHistoryArray.length === 5) {
        searchHistoryArray.splice(4, 1);
      }
      searchHistoryArray.splice(0, 0, {
        city: record,
        date: moment(),
      });
      this.searchHistory = searchHistoryArray;

      yield AsyncStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(searchHistoryArray),
      );

      yield this.parseCurrentForecastResponse(response);

      setTimeout(() => {
        setAnimation(true);
        this.navigateToWeatherDetails();
      }, 500);
    } catch (error) {
      setTimeout(() => {
        this.loading = false;
        setAnimation(true);
        ErrorHandler.savingSearchHistoryFailed();
      }, 500);
    }
  }).bind(this);

  @action
  parseCurrentForecastResponse = (response) => {
    const cityName = this.cityName;
    const currentDate = moment().format('LL');

    const latitude = get(response, 'coord.lat');
    const longitude = get(response, 'coord.lon');

    const description = get(
      response,
      'weather[0].description',
      `${Localizable.t('weatherDetails.noDescription')} ${cityName}`,
    );

    const temperature = get(response, 'main.temp');
    const formattedTemperature = temperature
      ? `${Math.round(temperature)} \u2103`
      : '-';

    const feelsLikeTemperature = get(response, 'main.feels_like');
    const formattedFeelsLikeTemperature = feelsLikeTemperature
      ? `${Math.round(feelsLikeTemperature)} \u2103`
      : '-';

    const minimumTemperature = get(response, 'main.temp_min');
    const formattedMinimumTemperature = minimumTemperature
      ? `${Math.round(minimumTemperature)} \u2103`
      : '-h';

    const maximumTemperature = get(response, 'main.temp_max');
    const formattedMaximumTemperature = maximumTemperature
      ? `${Math.round(maximumTemperature)} \u2103`
      : '-';

    const pressure = get(response, 'main.pressure');
    const formattedPressure = pressure ? `${pressure} hPa` : '-';

    const humidity = get(response, 'main.humidity');
    const formattedHumidity = humidity ? `${humidity} %` : '-';

    const visibility = get(response, 'visibility');
    const formattedVisibility = visibility ? `${visibility / 1000} km` : '-';

    const windSpeed = get(response, 'wind.speed');
    const formattedWindSpeed = windSpeed
      ? `${Math.round(windSpeed)} km/h`
      : '-';

    const sunrise = get(response, 'sys.sunrise');
    const formattedSunrise = sunrise
      ? moment.unix(sunrise).format('HH:mm')
      : '-';

    const sunset = get(response, 'sys.sunset');
    const formattedSunset = sunset ? moment.unix(sunset).format('HH:mm') : '-';

    this.weatherDetails = {
      cityName,
      currentDate,
      latitude,
      longitude,
      description,
      formattedSunrise,
      formattedSunset,
      formattedTemperature,
      formattedFeelsLikeTemperature,
      formattedMinimumTemperature,
      formattedMaximumTemperature,
      formattedPressure,
      formattedHumidity,
      formattedVisibility,
      formattedWindSpeed,
    };
  };

  @action
  navigateToWeatherDetails = () => {
    this.loading = false;
  };
}

export default WeatherStore;
