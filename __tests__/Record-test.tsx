import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import {Record} from '../src/components/';

const recordPropsMock = {
  record: {city: 'Warszawa', date: moment()},
  checkCurrentForecast: () => console.log('record clicked!'),
  isLast: false,
};

test('Record renders correctly', () => {
  const tree = renderer
    .create(
      <Record
        record={recordPropsMock.record}
        checkCurrentForecast={recordPropsMock.checkCurrentForecast}
        isLast={recordPropsMock.isLast}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
