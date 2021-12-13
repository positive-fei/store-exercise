<template>
  <div id = "loginTest">
    <h4>登录测试</h4>
    <form class="loginForm">
      账号: <input v-model="userName" type="text" name="userName"><br>
      密码: <input v-model ="userPassWord" :type="passwordType" name="userPassWord">
      <img @click="viewPassWord" src = "../../assets/img/tabbar/1.png">
    </form>
    <input id="loginSubmit" type="submit" @click="submit" value="登录">
    <router-view></router-view>
  </div>
  
</template>

<script>
export default{
   data() {
    return {
      userName: '',
      userPassWord: '',
      passwordTypeSign: true,
      passwordType: 'password'
    }
  },
  methods:{
    viewPassWord(){
      if(this.passwordTypeSign){
        this.passwordType = 'text';
        this.passwordTypeSign = false;
      }else{
        this.passwordType = 'password';
        this.passwordTypeSign = true;
      }
      this.$store.commit('increment')

      console.log(this.$store.state.count) // -> 1
    },
    submit(){
        console.log(this.userName + this.userPassWord)
        // 模拟登录
        if(this.userName =='admin' && this.userPassWord =='123456'){
           this.$router.push('/homepage')
        }else{
          window.alert("账号或密码输出错误");
        }

    }

  }
  
}
</script>

<style>

  #loginTest {

    background-color: #646199;
    text-align: center;
    padding-top: 210px;
    padding-bottom: 210px;
    padding-right: 50px;
    padding-left: 50px;
    
  }

  .loginForm {
    font-size: 18px;
    
  }
  #loginSubmit {
    width: 80px;
    font-size: 18px;
  }

  .loginForm img {
    width: 40px;
    height: 20px;
    position:fixed;
    top: 305px;
    right: 60px;
  }
  
</style>