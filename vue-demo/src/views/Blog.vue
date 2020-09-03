<template>

  
        <div class="passage" >

        <!--标题-->
     <div class="header">
         <div class="sidebarbutton" @mousedown="toggleshow()"><img src="../assets/eyes.png" alt="">
         <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
    <minibar v-if="show" style=""></minibar>
</transition></div>
        <p>{{passage[index].title}}</p>
     </div>
    <!--content-->
    <div class="content">
      <h1>{{passage[index].title}}</h1>
      
      <p>{{passage[index].content}}</p>
    </div>
    </div>


</template>
<script>

import router from '../router/index'
import minibar from  '@/components/minibar.vue'


export default {
    data(){
        return{
            route:router,
            index:router.history.current.params.id,
            show:false,
            passage:[{title:"Node.js知识总结",content:"大家好，我是sakilohale，这是我的关于nodejs学习知识总结的博客文章，希望你能喜欢。"},
            {title:"git知识总结",content:"大家好，我是sakilohale，这是我的关于git学习知识总结的博客文章，希望你能喜欢。"},
            {title:"mysql知识总结",content:"大家好，我是sakilohale，这是我的关于mysql学习知识总结的博客文章，希望你能喜欢。"},
             {title:"mysql知识总结",content:"大家好，我是sakilohale，这是我的关于mysql学习知识总结的博客文章，希望你能喜欢。"},
              {title:"mysql知识总结",content:"大家好，我是sakilohale，这是我的关于mysql学习知识总结的博客文章，希望你能喜欢。"},
               {title:"mysql知识总结",content:"大家好，我是sakilohale，这是我的关于mysql学习知识总结的博客文章，希望你能喜欢。"},
                {title:"mysql知识总结",content:"大家好，我是sakilohale，这是我的关于mysql学习知识总结的博客文章，希望你能喜欢。"}]
        }
    },
    components:{
        minibar:minibar
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

.passage{
   
    height: 100%;
    display: flex;
    flex-direction: column;
    scroll-behavior: auto;
    
}
.header{
  
    width: 100%;
    height:30%;
    font-size:3vw;
    text-align: center;
  
}


.content{
    width: 100%;
    height:70%;
    margin: auto;
   background: white;
    color: black;
}
.content h1{
text-align: left;
text-indent: 2em;
word-wrap: break-word;
font-size:2vw;
}
.content p{
    font-size: 1.5vw;
text-align: left;
text-indent: 2em;
}

.sidebarbutton{
    width:2vw;
    height: 2vw;
    position: fixed;
   left: 1400px;
   
}
.sidebarbutton img{
    width: 100%;
    height: 100%;
}


</style>