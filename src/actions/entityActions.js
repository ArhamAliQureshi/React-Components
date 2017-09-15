import * as types from '../constants/actionTypes';
import EntityAPI from  '../api/entiyAPI';


export function getEntityRecordsSuccess(data) {

  return {type: types.GET_ENTITY_RECORDS_SUCCESS, data};
}


export function getEntityRecords() {
  return (dispatch)=>{
    return EntityAPI.getEntityRecords()
      .then((result) =>{
        if(result.data && result.data.data){
          dispatch(getEntityRecordsSuccess(result.data.data));
        }
        else
          throw result;
      })
      .catch(err => {throw(err);});
  };
}
