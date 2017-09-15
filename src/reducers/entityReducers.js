import * as types from '../constants/actionTypes';
import initialStates from './initialState';


export default function entityReducers(state = initialStates, action){
  switch (action.type){
    case types.GET_ENTITY_RECORDS_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
