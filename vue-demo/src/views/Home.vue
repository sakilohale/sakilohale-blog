<template>

    <div class="home">
      

<transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
    <sidebar v-if="show"></sidebar>
</transition>
<div class="me">
    <img alt="ljy logo" src="../assets/me.gif" @mousedown="toggleshow()">
    <h1>刘俊言の博客</h1>
    <mylink></mylink>
    </div>
   
  </div>


</template>

<script>
// @ is an alias to /src

import mylink from '@/components/mylink.vue'
import sidebar from  '@/components/sidebar.vue'

export default {
  name: 'Home',
   
 data(){
  return{
    show:false
  }
  },

  components:{
   
    mylink:mylink,
    sidebar:sidebar
  },

methods:{
    toggleshow(){
     this.show=!this.show
     console.log(this.show)
  }
  
  },
  
  }
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';
.home{
  
  width: auto;
}
.me{
   width:20%;
   height: auto;
  margin: auto;
  
}
.me img{
  
  width: 100%;
  height: 100%;
  
}
.me h1{
  width: 100%;
  font-size: 2vw;
}


</style>