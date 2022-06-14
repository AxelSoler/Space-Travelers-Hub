import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import missionssReducer from './missions/missions';

const rootReducer = combineReducers({
  listOfMissions: missionssReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
