import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import { rocketReducer } from './rockets/rockets';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  listOfMissions: missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
