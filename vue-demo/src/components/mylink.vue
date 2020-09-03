<template>
    <div class="linkline">
        <a href="https://github.com/sakilohale"><img id='a' src="https://s1.ax1x.com/2020/08/22/dai1fI.png" alt="" @mouseover="git_on()" @mouseleave="git_leave()"></a>
        <a href="#"><img id="b" src="https://s1.ax1x.com/2020/08/22/daihN9.png" alt="" @mouseover="we_on()" @mouseleave="we_leave()"></a>
        <a href="#"><img id="c" src="https://s1.ax1x.com/2020/08/22/daiI91.png" alt="" @mouseover="st_on()" @mouseleave="st_leave()"></a>
        <div class="wexin"><img src="../assets/wx.png" alt="wx" style="width:200px;height:200px"></div>
        <div class="steam">649341164</div>
    </div>
    
</template>

<script>
export default {
    name:"mylink",

    methods:{

        git_on() {
            document.getElementById('a').src="https://s1.ax1x.com/2020/08/22/daio1x.png"

        },
         git_leave() {
            document.getElementById('a').src="https://s1.ax1x.com/2020/08/22/dai1fI.png"
        },
        
        
        we_on() {
            document.getElementById('b').src="https://s1.ax1x.com/2020/08/22/daifAJ.png"
            document.getElementsByClassName('wexin')[0].style.display='block'
        },
         we_leave() {
            document.getElementById('b').src="https://s1.ax1x.com/2020/08/22/daihN9.png"
            document.getElementsByClassName('wexin')[0].style.display='none'
        },
        
        st_on() {
            document.getElementById('c').src="https://s1.ax1x.com/2020/08/22/dai4hR.png"
             document.getElementsByClassName('steam')[0].style.display='block'
        },
         st_leave() {
            document.getElementById('c').src="https://s1.ax1x.com/2020/08/22/daiI91.png"
            document.getElementsByClassName('steam')[0].style.display='none'
        },
    }
}

</script>

<style scoped>
a{
    display:inline-block;
    margin-left: 1vw;
}
img{
    width: 2vw;
    height: 2vw;
}
.wexin{
    display: none;
    margin: 0;
}
.steam{
    display: none;
    margin: 0;
    margin-top: 1vw;
    color: white;
    font-size: 2vw;
}
</style>