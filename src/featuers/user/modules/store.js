/**
 * Created by pans0911 on 2017/2/20.
 */
import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  longitude:'',
  latitude:'',
  address_detail:'',
  phone:'',
  name:'',
};

const mutations = {
  [types.INFO_USER_LOCATION](state , data){
    state.latitude = data.latitude;
    state.longitude = data.longitude;
  },
  [types.INFO_USER_ADDRESS](state , data){
    state.address_detail = data;
  },
  [types.INFO_USER_NAME](state , data){
    state.name = data;
  },
  [types.INFO_USER_PHONE](state , data){
    state.phone = data;
  },
  [types.ADD_USER_ADDRESS](state , data){
    state.add_address = data;
  },
}

export default {
  state,
  mutations,
  getters,
  actions
}
