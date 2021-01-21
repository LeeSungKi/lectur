import axios from 'axios'
import router from '../router'
//도메인정보 
const DOMAIN = 'http://localhost:3000'
//401에러
const UNAUTHORIZED = 401
//401코드오면 처리 함수 login페이지로 리다이렉트(router.push)
const onUnauthrorized = () => {
    router.push('/login')
} 

//백앤드api요청 함수 
            //인자{get,경로,payload}

const request = (method, url, data) => {
    //내부적으로 axios에 인자전달
    return axios({
        method,
        url: DOMAIN + url,
        data
    })
    //성공시 결과받고 결과에 데이터넘겨줌
    .then(result => result.data)
        //실패시 에러처리
        .catch(result => {
            //결과.response에서 status값을 가져옴(해체문법)
            const {status} = result.response
            //상태값이(status) 401이면 onUauthrorized함수 리턴(/login페이지로 리다이렉트)
            if(status === UNAUTHORIZED) onUnauthrorized()
            //정의되지 않은 에러는 바로 에러를 던짐(필요하면 로직추가)
            throw result.response
        })
}
/* const {token} = localStorage
if (token) setAuthInHeader(token)  */ 

//헤더값에 토큰정보넣기 login컴포넌트에서 호출
export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}


export const board = {
    fetch(){
        return request('get','/boards')
    },
    create(title){
        return request('post','/boards',{title}) 
    }
}

export const auth = {
    login(email,password){
        return request('post','/login',{email,password})
    }
}




