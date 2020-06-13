import React from 'react';
import renderer from 'react-test-renderer';

import {OutlinedTextInput} from '../src/components';

const outlinedTextInputPropsMock = {
  ref: React.createRef(),
  label: 'Miasto',
  error: false,
};

test('OutlinedTextInput renders correctly.', () => {
  const tree = renderer
    .create(
      <OutlinedTextInput
        ref={outlinedTextInputPropsMock.ref}
        label={outlinedTextInputPropsMock.label}
        error={outlinedTextInputPropsMock.error}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
