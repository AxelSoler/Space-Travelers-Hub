import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile/MyProfile';
import store from '../redux/configureStore';

test('It renders the my profile', async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <MyProfile />
      </Provider>
    </MemoryRouter>,
  );
  expect(screen.getByText(/Rockets Joined/)).not.toBeNull();
});
