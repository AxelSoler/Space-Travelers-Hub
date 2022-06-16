import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Mission from '../components/Missions/Mission';

test('a mission is rendering', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Mission
          key="1568412"
          mission="name of the mission"
          description="mission description"
          id="15"
          join
        />
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
