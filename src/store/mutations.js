import {setAuthInHeader} from '../api'


const mutations = {
    SET_IS_ADD_BOARD (state,toggle){
        state.isAddBoard = toggle
    },
    SET_BOARDS(state,boards){
        state.boards = boards
    },
    LOGIN(state, token){ 
        if(!token) return
        //스테이지에 갱신
        state.token = token
        //로컬스토리지에 저장
        localStorage.setItem('token',token)
        //requst header 세팅
        setAuthInHeader(token)
    },
    LOGOUT(state){
        state.token = null
        delete localStorage.token
        setAuthInHeader(null)
    }
}

export default mutations