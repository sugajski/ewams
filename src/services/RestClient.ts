import axios from 'axios';

import {apiConfig} from '../../config';

export const {baseURL, clientSecret} = apiConfig;

export const instance = axios.create({
  baseURL,
  timeout: 6000,
});

const RestClient = {
  checkCurrentForecast(record: string) {
    return instance.get(
      `weather?q=${record}&lang=pl&units=metric&appid=${clientSecret}`,
    );
  },
  checkHourlyForecast(lat: string, lon: string) {
    return instance.get(
      `onecall?lat=${lat}&lon=${lon}&exclude=current,weather,daily&units=metric&appid=${clientSecret}`,
    );
  },
};

export default RestClient;
