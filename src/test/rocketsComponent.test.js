import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets/Rockets';

describe('Rockets', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <Rockets
              id={1}
              type="unicorn"
              name="Falcon"
              img="img"
              description="description"
              reserved
            />
          </Provider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
