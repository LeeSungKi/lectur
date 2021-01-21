<template>
  <div> 
  <div class="login">
    <h2>Log in to Trello</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <!-- // v-model 로 data 와 연결 -->
        <input class="form-control" type="text" name="email"
          v-model="email" autofocus placeholder="e.g., test@test.com" />
      </div>
      <div>
        <label for="password">Passwrod</label>
        <input class="form-control" type="password"
          v-model="password" placeholder="123123" />
      </div>
      <button  class="btn" :class="{'btn-success': !invalidForm}" type="submit"
        :disabled="invalidForm">Log In</button>
    </form>
    <p class="error" v-if="error">{{error}}</p>
  </div>
  </div>
</template>
<script>
import {auth,setAuthInHeader} from '../api'
export default {

  data() {
    return {
      email: '',
      password: '',
      error: '',
      rPath: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  created(){
            //라우트에 rPath 의 쿼리 문자열  없으면 '/'
      this.rPath = this.$route.query.rPath || '/' 
  },
  methods: {
    onSubmit() {
        auth.login(this.email,this.password)
            .then(data => {
                //로컬스토리지에 토큰정보저장후
                localStorage.setItem('token',data.accessToken)
                //토큰정보전달 ()
                setAuthInHeader(data.accessToken) 
                this.$router.push(this.rPath)
                
            })
            .catch(err =>{ 
                
                this.error = err.data.error
                
            })
      }
  }
}
</script>
<style>
.login {
  width: 400px;
  margin: 0 auto;
}
.error {
  color: #f00;
}

 </style>