import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/components/App';

// see: https://github.com/mobxjs/mobx-react/issues/186
jest.mock('mobx-react/native', () => require('mobx-react/custom'));

it('renders correctly', () => {
    const component = renderer.create(
        <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.unmount();
});
