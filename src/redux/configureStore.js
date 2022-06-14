import { combineReducers, createStore } from 'redux';
import { rocketReducer } from './rockets/rockets';

const rootReducer = combineReducers({
  rockets: rocketReducer,
});

const store = createStore(rootReducer);

export default store;
