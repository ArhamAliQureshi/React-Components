import axios from 'axios';

class EntityAPI {
  static getEntityRecords(){
    return axios.get('http://localhost:3002/entitiesRecord');
  }
}

export default EntityAPI;
