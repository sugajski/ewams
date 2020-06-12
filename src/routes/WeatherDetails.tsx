import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {instanceOf} from 'prop-types';
import {observer, inject} from 'mobx-react';

import {WeatherStore} from '../stores';
import {Images, Colors} from '../themes';
import {WeatherTable, HourlyTemperaturesTable} from '../components';
import {NavBar, Button} from '../components/commons';
import WeatherDetailsStyles from './styles/WeatherDetailsStyles';
import {Localizable} from '../lib';

const WeatherDetails = inject('weatherStore')(
  observer(({weatherStore}: {weatherStore: any}) => {
    const {
      weatherDetails,
      hourlyTemperatures,
      checkHourlyForecast,
      clearHourlyForecast,
      loading,
    } = weatherStore;
    const {
      cityName,
      description,
      currentDate,
      latitude,
      longitude,
    } = weatherDetails;

    return (
      <ImageBackground
        source={Images.background}
        resizeMode="stretch"
        style={WeatherDetailsStyles.background}>
        <NavBar additionalBackAction={clearHourlyForecast} />
        <ScrollView
          contentContainerStyle={WeatherDetailsStyles.container}
          showsVerticalScrollIndicator={false}>
          <View style={WeatherDetailsStyles.content}>
            <View style={WeatherDetailsStyles.header}>
              <Text style={WeatherDetailsStyles.cityName}>{cityName}</Text>
              <Text style={WeatherDetailsStyles.description}>
                {description}
              </Text>
              <Text style={WeatherDetailsStyles.date}>{currentDate}</Text>
            </View>
            <WeatherTable details={weatherDetails} />
          </View>
          {hourlyTemperatures.length === 0 && !loading && (
            <Button
              title={Localizable.t('weatherDetails.checkHourlyForecast')}
              onPress={() => checkHourlyForecast(latitude, longitude)}
            />
          )}
          {loading && <ActivityIndicator size="large" color={Colors.white} />}
          {hourlyTemperatures.length > 0 && (
            <HourlyTemperaturesTable hourlyTemperatures={hourlyTemperatures} />
          )}
        </ScrollView>
      </ImageBackground>
    );
  }),
);

WeatherDetails.wrappedComponent.propTypes = {
  weatherStore: instanceOf(WeatherStore).isRequired,
};

export default WeatherDetails;
