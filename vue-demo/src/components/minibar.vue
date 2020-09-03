<template>

    <div class="minibar">
         
      <div class="content">
    
   <router-link :to="{ name:'Blog',params: { id:index1 } } "  class="contentlist" v-for="(item1,index1) in contentlist" :key="item1.id">
    {{index1+1}} : {{item1.name}}  <div class="date">{{item1.date}}</div>
   </router-link>
    
   </div>
       
    </div>

</template>

<script>

export default {
    name:'minibar',
   data(){
     return{
      

         contentlist:[
           {name:"利用node.js编写合适的路由",date:'2020/08/25',id:'0'},
           {name:"git使用指南",date:'2020/08/25',id:'1'},
           {name:"animate.css使用指南",date:'2020/08/25',id:'2'},
           {name:"animate.css使用指南",date:'2020/08/25',id:'3'},
           {name:"animate.css使用指南",date:'2020/08/25',id:'4'},
           {name:"animate.css使用指南",date:'2020/08/25',id:'5'},
           {name:"animate.css使用指南",date:'2020/08/25',id:'6'},
         ],

        
     }
   },

  
   
}
</script>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

.minibar{
width: 200px;
height: 300px;
background: #E8CBC0;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #636FA4, #E8CBC0);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #636FA4, #E8CBC0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
box-shadow:  32px 32px 64px #ababab, 
             -32px -32px 64px #d5d5d5;
position: absolute;
right: 0px;

overflow-x: hidden;
overflow-y:auto;

}
   /*滚动条样式 firefox不得行*/
        .minibar::-webkit-scrollbar {
            width: 4px;    
            /*height: 4px;*/
        }
        .minibar::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }
        .minibar::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 0;
            background: rgba(0,0,0,0.1);

        }

.content{
    display: flex;
    flex-direction: column;
    text-decoration: none;
}
.contentlist{
    display: block;
    margin: 15px;
   font-size: 14px;
 text-decoration: none;
 color: black;
 opacity: 0.7;
}
.date{
font-size: 10px;
}
</style>