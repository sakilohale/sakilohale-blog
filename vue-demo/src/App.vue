<template>
<body>
      <div id="app" @mousedown="resize()">
    <div id="nav" >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      
    </div>

   




    <router-view :key='key' />
    



    <p class="bottom">19823319810@163.com</p>
  </div>
</body>

</template>
<script>
import router from './router/index'


export default {
  
data(){
return {

  routername:router.history.current.name
}

},
computed:{
          key() {
            //解决同一组件路由跳转，数据不刷新问题
            return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
        },
         
},
}

</script>






<style>
body{
 width: 100%;
 height: 100vh;
 margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height:100%;
  color: whitesmoke;
  background: url('./assets/background2.jpg') no-repeat;
  background-size: 100%;
  font-size: 1rem;
 
  

}



.bottom{
  margin: auto;
  width: 10rem;
  font-size:1rem;
  color: gray;
}

#nav {
  padding: 2rem;
  width: auto;
  margin: auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #DC143C;
}

</style>
