import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import {SearchHistory} from '../src/components';

const searchHistoryPropsMock = {
  history: [
    {city: 'Warszawa', date: moment()},
    {city: 'Kraków', date: moment('2011-06-05')},
  ],
  checkCurrentForecast: () => console.log('record clicked!'),
};

test('SearchHistory renders correctly', () => {
  const tree = renderer
    .create(
      <SearchHistory
        history={searchHistoryPropsMock.history}
        checkCurrentForecast={searchHistoryPropsMock.checkCurrentForecast}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
