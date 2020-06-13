import React from 'react';
import renderer from 'react-test-renderer';

import {SendButton} from '../src/components';

test('SendButton renders correctly.', () => {
  const tree = renderer
    .create(<SendButton onPress={() => console.log('SendButton clicked!')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
