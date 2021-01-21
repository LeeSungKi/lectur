import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'
import NotFound from '../components/NotFound.vue' 

//미들웨어 vue.use함수사용하여 vuerouter 추가해야 사용가능
Vue.use(VueRouter)

//뷰 라우터 네비게이션 가드 설정 1-2 토큰확인후 리다이렉트
const requireAuth = (to, from, next) =>{
  const inAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`  
 
   inAuth ? next() : next(loginPath)  
}

//뷰라우터 객체생성
const router = new VueRouter({
  //해쉬뱅모드를 히스토리로 바꿔줌(해쉬없애줌)
  mode:'history',
  //라우트는 우선순위에의해 선언된순서로 매칭됨 
  routes : [
                                //뷰 라우터 네비게이션 가드 설정 1-1
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login },
            //변수로받기         중첩라우팅
    {path: '/b/:bid',component: Board, beforeEnter: requireAuth, children:[
      {path: 'c/:cid', component: Card, beforeEnter: requireAuth}
    ]},
    //위의 경로매칭안되면 아래마지막 경로로 매칭됨(notfound처리)
    { path: '*', component: NotFound}
  ]
})
 
//모듈로 사용하게끔 export
export default router
