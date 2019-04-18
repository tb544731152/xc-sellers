<template>
    <div class="wrap">
        <div class="tab1">
                <header>
                    <div class="left fl">
                        <a href=""><img src="../../static/image/retail_terminal/icon1.png"></a>
                        <span></span>
                    </div>
                
                     <p class="shop_name">{{name}}</p>

                    <div class="right rule fr"  @click="help()">
                        <img src="../../static/image/retail_terminal/icon2.png">
                    </div>
                </header>
                <div class="img">
                    <img src="../../static/image/retail_terminal/pic1.png">
                </div>
                <div class="business_grade">
                    <h2> <em class="fl">推广等级：</em> <span></span><span></span><span></span><span></span><span></span></h2>
                </div>
                <div class="grade">
                    <div class="fl left_div">
                        <p>321</p>
                        <p>推广积分</p>
                    </div>

                    <div class="fl left_div">
                        <p>600</p>
                        <p>推广商家</p>
                    </div>

                    <div class="fl left_div">
                        <p>1005</p>
                        <p>当前排名</p>
                    </div>
                </div>
        </div>
        <div class="tab2">
            <div class="activity">
                    <img src="../../static/image/retail_terminal/pic2.png" alt="placeholder+image">
            </div>
            <div class="code_box">              
                <div class="code_img">
                     <img :src="extensionCode" alt="placeholder+image">
                </div>
                <p>中烟追溯认证诚信终端二维码</p> 
            </div>
        </div>
        <div class="mask" v-show="ishelp"></div>
        <div class="q_survey_box"  v-show="ishelp">
            <p class="q_close1"><img src="../../static/image/retail_terminal/retail_close.png" @click="close()" alt="placeholder+image"></p>
            <ol>
                <li>一 餐馆入驻新创[易点餐]平台,并支付完成服务使用费，即为邀请入驻成功！</li>
                <li>二 入驻成功后邀请人即可得20 元- 50 元 随机红包（发放到个人中心钱包）！
                </li>
                <li>3 活动时间：长期有效。</li>
                <li>4 如有任何问题请反馈至新创追溯客服。联系电话：15210785738</li>        
            </ol>
        </div>
    </div>
</template>



<style src='../../static/css/extensionadopt.css' scoped></style>
<script>
import '../../static/js/jquery-1.10.2.js';
import Vue from 'vue'
var openId;
export default {
  data() {
    return {
        ishelp:false,
		images: [],
        name:'',
        extensionCode:''
    }
  },
  created(){
   this.get();
  },
  methods: {
    close(){
  		this.ishelp=false;
  	},
    help(){
  		this.ishelp=true;
  	},
  	get(){
		   openId=window.localStorage.getItem('token');
		   var that=this;
           that.$http.get('/api/extension/query?openId='+openId).then(function(res){
            if(res.data.code==1000){
                if(res.data.data.status=='0'){
                 that.$router.push ({path: '/audit', query: {openId:openId,from:'0'}});
                }
                that.name = res.data.data.name;
                that.extensionCode = res.data.data.extensionCode;
            }else{
                that.$router.push ({path: '/extension', query: {openId:openId}});
            }
        });
	  }
  },
  mounted(){
     
    
  }
}
</script>