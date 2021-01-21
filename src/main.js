import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  //라우터 속성을 뷰인스턴스에 전달
  router, 
  store,
  render: h =>h(App)
})
