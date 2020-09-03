

<template>

    <div class="sidebar">

    <div class="menulist">
    <div class="item" v-for="(item,index) in menulist" :key="item.id" :class="{active:num==index}" @click="getNum(index)">
    {{item.name}}
    </div>
    </div>
   
   <div class="content">
    
     <!--Passage选项内容-->
     <transition enter-active-class="animated flipInY" >
     <div id="passage" v-if="num==0">

    <div class="total">Total : {{total}}</div>

   <router-link :to="{ name:'Blog',params: { id:index1 } } "  class="contentlist" v-for="(item1,index1) in contentlist" :key="item1.id">
    {{index1+1}} : {{item1.name}}  <div class="date">{{item1.date}}</div>
   </router-link>
    
     </div>
     </transition>
      <!--完-->

       <!--News选项内容-->
       <transition enter-active-class="animated flipInY" >
    <div id="news" v-if="num==1">
      news part
      </div>  
       </transition>
      <!--完-->
    
     <!--Cate选项内容-->
     <transition enter-active-class="animated flipInY" >
    <div id="cate" v-if="num==2">
      cate part
    </div>
     </transition>
     <!--完-->

   </div>
    </div>

</template>

<script>

export default {
    name:'sidebar',
   data(){
     return{
       menulist:[
         {name:'Passage',id:1},
         {name:'News',id:2},
         {name:'Cate',id:3}
         
         ],

         contentlist:[
           {name:"利用node.js编写合适的路由",date:'2020/08/25',id:'0'},
           {name:"git使用指南",date:'2020/08/25',id:'1'},
           {name:"animate.css使用指南",date:'2020/08/25',id:'2'},
           {name:"animate.css使用指南",date:'2020/08/25',id:'3'},
           {name:"animate.css使用指南",date:'2020/08/25',id:'4'},
           {name:"animate.css使用指南",date:'2020/08/25',id:'5'},
           {name:"animate.css使用指南",date:'2020/08/25',id:'6'},
         ],

         num:0,
         total:3,
     }
   },

   methods:{
     getNum(a){
  this.num=a
     }
   },
   
}
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';



.sidebar{
float: left;
width: 25vw;
height: 50vh;
background: #C9D6FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}



.menulist{
  display: flex;
  
  width: 100%;
  
  height:15%;
}
.item{
  flex: 1;
  line-height: 40px;
  text-align: center;
  border: 1px whitesmoke solid;
}

.content{
  overflow-x: hidden;
  overflow-y:scroll;
  height: 85%;
}
.active{
  background: red;
}  

.total{
  margin-top: 15px;
  margin-left: 15px;
  text-align: left;
  color: red;
  font-size: 18px;
  font-style:unset;
}
.date{
font-size: 10px;
text-align: right;

}
.contentlist{
  display: block;
  text-decoration: none;
  margin-top: 15px;
  margin-left: 15px;
  color: black;
  text-align: left;
  padding: 10px;
}
a:hover{
  color: brown;
}

</style>