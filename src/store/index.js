import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex) 

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
//어플리케이션구동시 브라우저 저장소확인 토큰여부 체크
const { token } = localStorage
store.commit('LOGIN', token) 
 
export default store