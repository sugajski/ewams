import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {Provider} from 'mobx-react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Dashboard} from './routes';
import {WeatherStore} from './stores';

const weatherStore = new WeatherStore();

export default () => {
  return (
    <SafeAreaProvider>
      <Provider weatherStore={weatherStore}>
        <PaperProvider>
          <NativeRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </NativeRouter>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
};
