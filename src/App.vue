<template>
  <div id="app">
 <!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<style>
  @import '../static/css/common.css';
</style>
<script>
export default{
    data(){
      return{

      }
    }
  }
  // rem适配页面
 fnResize()
  window.onresize = function () {
  fnResize()
  }
  function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
/*  if (deviceWidth >= 750) {
  deviceWidth = 750
  }
  if (deviceWidth <= 320) {
  deviceWidth = 320
   
  }*/
   document.documentElement.style.fontSize = (deviceWidth / 10) + 'px';
  }

</script>