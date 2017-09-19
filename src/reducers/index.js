import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import entityRecords from './entityReducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  form: formReducer,
  entityRecords,
  routing: routerReducer
});

export default rootReducer;
