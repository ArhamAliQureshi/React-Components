import { combineReducers } from 'redux';
import entityRecords from './entityReducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  entityRecords,
  routing: routerReducer
});

export default rootReducer;
