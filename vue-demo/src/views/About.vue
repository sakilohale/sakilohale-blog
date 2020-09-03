<template>
<div class="box">
 

<div class="middle">
   <!--头像个人资料-->
  <div class="photobox">
  <img src="../assets/me.jpg" alt="">
  <div class="intro1">刘俊言</div>
  <div class="intro">20岁</div>
  <div class="intro">一条咸鱼</div>
  </div>
  <!--passagelist-->
  <div class="passagelist">
    
  </div>
</div>


  </div>
</template>

<script>
import about from '@/components/about.vue'
export default {
name:'About',
components:{
about:about
}

}
</script>
<style scoped>
.box{
  width: 100%;
  height: 100%;
  background: white;
 color: black;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #DC143C;
}

.middle{
  width: 70%;
  margin: auto;
  display: flex;
  background: lightyellow;
}
.photobox{
  margin: 20px;
  width: 20%;
  height: 20%;
  display: flex;
  flex-direction: column;
 align-items: center; 
}
.intro1{
  text-align: center;
  margin-top: 8px;
  opacity: 0.7;
  font-size: 2em;
}
.intro{
  text-align: center;
  margin-top: 8px;
  opacity: 0.7;
  font-size: 1em;
}

.photobox img{
  display: block;
  width: 100%;
  height: 100%;
}
.passagelist{
  flex: 80%;
}



</style>