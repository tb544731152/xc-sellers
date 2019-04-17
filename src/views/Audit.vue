<template>
<div class="wrap">
      <div class="img">
           <img src="../../static/image/retail_terminal/pic1.png">
       </div> 
       <div class="pic">
          <img src="../../static/image/retail_terminal/retail_terminal2.jpg">
       </div>
  </div>
</template>
<style src='../../static/css/audit.css' scoped></style>

<script>
import '../../static/js/jquery-1.10.2.js';
var openId,from;
export default {
  data() {
    return {
		images: []
    }
  },
  created(){
   this.get();
  },
  methods: {
  	get(){
		   openId=this.$route.query.openId;
		   //查询此人是否审核通过
       from = this.$route.query.from;
       var that=this;
       if(from=='0'){
        that.$http.get('/api/extension/query?openId='+openId).then(function(res){
            console.log(res.data.data);
            if(res.data.code==1000){
                if(res.data.data.status=='1'){
                 that.$router.push({path: '/extensionadopted', query: {openId:openId}});
                }
            }else{
                that.$router.push({path: '/extension', query: {openId:openId}});
            }
        });
       }
	  }
  }
}
</script>
