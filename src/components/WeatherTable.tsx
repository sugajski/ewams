import React, {FC} from 'react';
import {View, Text} from 'react-native';

import TableCell from './TableCell';
import {Localizable} from '../lib';
import WeatherTableStyles from './styles/WeatherTableStyles';

interface IDetails {
  formattedSunrise: string;
  formattedSunset: string;
  formattedTemperature: string;
  formattedFeelsLikeTemperature: string;
  formattedMinimumTemperature: string;
  formattedMaximumTemperature: string;
  formattedPressure: string;
  formattedHumidity: string;
  formattedVisibility: string;
  formattedWindSpeed: string;
}

interface IWeatherTableProps {
  details: IDetails;
}

const WeatherTable: FC<IWeatherTableProps> = ({details}) => {
  const {
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
  } = details;

  const cells = [
    {
      title: Localizable.t('weatherTable.sunrise'),
      description: formattedSunrise,
    },
    {title: Localizable.t('weatherTable.sunset'), description: formattedSunset},
    {
      title: Localizable.t('weatherTable.temperature'),
      description: formattedTemperature,
    },
    {
      title: Localizable.t('weatherTable.feelsLike'),
      description: formattedFeelsLikeTemperature,
    },
    {
      title: Localizable.t('weatherTable.minTemp'),
      description: formattedMinimumTemperature,
    },
    {
      title: Localizable.t('weatherTable.maxTemp'),
      description: formattedMaximumTemperature,
    },
    {
      title: Localizable.t('weatherTable.pressure'),
      description: formattedPressure,
    },
    {
      title: Localizable.t('weatherTable.humidity'),
      description: formattedHumidity,
    },
    {
      title: Localizable.t('weatherTable.visibility'),
      description: formattedVisibility,
    },
    {
      title: Localizable.t('weatherTable.windSpeed'),
      description: formattedWindSpeed,
    },
  ];

  return (
    <View style={WeatherTableStyles.container}>
      {cells.map((cell, index) => (
        <TableCell key={index} cell={cell} index={index} />
      ))}
      <Text>
        <Text style={WeatherTableStyles.legendSign}>-</Text>
        <Text style={WeatherTableStyles.legendDescription}>
          {Localizable.t('weatherTable.dashDescription')}
        </Text>
      </Text>
    </View>
  );
};

export default WeatherTable;
