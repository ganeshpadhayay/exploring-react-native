import React from 'react';
import {render} from 'react-native-testing-library';
import Hello from '../components/Home';

describe('Hello', () => {
  it('displays the passed-in name', () => {
    const {queryByText} = render(<Hello name="Josh" />);
    expect(queryByText('Hello, Josh!')).not.toBeNull();
  });
});
