import 'react-native';
import React from 'react';
import App from '../src/components/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Note: https://wietse.loves.engineering/using-jest-with-react-native-and-mobx-34949ea7d2cf#.8ttqxa9p0
jest.mock('mobx-react/native', () => require('mobx-react/custom'));

it('renders correctly', () => {
    const component = renderer.create(
        <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
