import React, {useEffect, useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import {instanceOf} from 'prop-types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useHistory} from 'react-router-native';
import Animated from 'react-native-reanimated';
import {useMemoOne} from 'use-memo-one';

import {Images} from '../themes';
import {WeatherStore} from '../stores';
import {OutlinedTextInput, SendButton, SearchHistory} from '../components';
import {DismissKeyboardWrapper, Loading} from '../components/commons';
import {Localizable} from '../lib';
import DashboardStyles from './styles/DashboardStyles';

const {Value} = Animated;

const Dashboard = inject('weatherStore')(
  observer(({weatherStore}: {weatherStore: any}) => {
    const routerHistory = useHistory();
    const {isPlaying} = useMemoOne(
      () => ({
        isPlaying: new Value(0),
      }),
      [],
    );
    const {
      cityName,
      handleCityNameOnChange,
      setButtonColor,
      error,
      searchHistory,
      loading,
      checkCurrentForecast,
      initWeatherStore,
    } = weatherStore;

    const cityTextInputRef = useRef(null);
    const safeAreaInsets = useSafeAreaInsets();

    type StyleSheetType = {
      safeAreaInsetsMargins: ViewStyle;
    };

    const dynamicStyles = StyleSheet.create<StyleSheetType>({
      safeAreaInsetsMargins: {
        marginTop: 16 + safeAreaInsets.top,
        marginBottom: 16 + safeAreaInsets.bottom,
      },
    });

    useEffect(() => {
      initWeatherStore(routerHistory, cityTextInputRef);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setAnimation = (pause = false) => {
      if (pause) {
        isPlaying.setValue(0);
        return;
      }
      //@ts-ignore
      isPlaying.setValue(1);
    };

    const checkForecast = (record: string = '') => {
      setAnimation();
      checkCurrentForecast(record ? record : cityName, setAnimation);
    };

    return (
      <ImageBackground
        source={Images.background}
        resizeMode="stretch"
        style={[DashboardStyles.container]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={dynamicStyles.safeAreaInsetsMargins}>
            <Loading isPlaying={isPlaying} />
            <View style={DashboardStyles.box}>
              <View style={DashboardStyles.inputRow}>
                <DismissKeyboardWrapper childRef={cityTextInputRef}>
                  <OutlinedTextInput
                    label={Localizable.t('dashboard.city')}
                    value={cityName}
                    onChangeText={(text) => handleCityNameOnChange(text)}
                    error={error.length > 0}
                    ref={cityTextInputRef}
                  />
                </DismissKeyboardWrapper>
                <SendButton
                  tintColor={setButtonColor()}
                  onPress={() => checkForecast()}
                  enabled={!loading}
                />
              </View>
              {error.length > 0 && (
                <Text style={DashboardStyles.errorDescription}>{error}</Text>
              )}
            </View>
            {searchHistory.length > 0 && (
              <View style={DashboardStyles.box}>
                <SearchHistory
                  history={searchHistory}
                  checkCurrentForecast={checkForecast}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }),
);

Dashboard.wrappedComponent.propTypes = {
  weatherStore: instanceOf(WeatherStore).isRequired,
};

export default Dashboard;
