<template>
<div class="wrap">
	<!--banner-->
	<div class="banner" id="banner">
		<van-swipe :autoplay="3000">
		<van-swipe-item  @click="imgurl(image.skipurl)" v-for="(image, index) in images" :key="index">
			<img v-lazy="image.imgurl" />
		</van-swipe-item>
		</van-swipe>	
	</div>
	<!--公告-->
	<div class="notice">
			<p class='notice_icon'><img src="../../static/image/userCenter/user_center2.png" alt=""></p>
			<marquee class='article' onMouseOut="this.start()" onMouseOver="this.stop()">最新消息</marquee>
	</div>

	<div class="person_info">
			<div class="photo fl">
				<img src="../../static/image/userCenter/personal1.jpg" alt="">
			</div>
	
			<!-- 未认证 -->
			<div class="authentication"></div>

			<!-- 认证过 -->
			<!-- <div class="authentication on"></div> -->

			<div class="fl">
			<div class="member_info">
						<p class="name fl">太阳花你好啊嘿嘿</p><span ></span> 
						<p class="fl grade gold_medal">金烟杆会员</p> 
			<!--  ordinary普通  bronze_medal铜 silver_medal银 gold_medal金 platinum白金 -->
			</div>

			<p class="address">收货地址、二维码ID、手机号认证</p>
			</div>
			<div class="fr arrow"></div>
	</div>

    <div class="info_box webkit_box">
             <div class="flex1">
                  <p>钱包</p>
                  <p><span>60.8</span>元</p>
                  <div class="icon"></div>
             </div>
             <p class="line"></p>
             <div class="flex1">
                  <p>乐豆</p>
                  <p><span>60.8</span>元</p>
                  <div class="icon"></div>
             </div>
    </div>
    <div class="nav">
        <ul>
             <li>
                    <a href="">
                        <div class="pic">
                              <img src="../../static/image/userCenter/user_center17.png" alt="placeholder+image">
                         </div>
                         <p>数据分析</p>
                     </a>                     
                 </li>

                 <li>
                     <a href="">
                         <div class="pic">
                            <img src="../../static/image/userCenter/user_center5.png" alt="placeholder+image">
                         </div>
                         <p>生成餐桌码</p>
                     </a>                    
                 </li>
                  <li>    
                      <a href="">
                         <div class="pic">
                                <img src="../../static/image/userCenter/user_center6.png" alt="placeholder+image">
                         </div>
                         <p>我的店铺</p> 
                      </a>                 
                                                
                     
                 </li>
                   <li>
                        <a href="">
                             <div class="pic">
                                  <img src="../../static/image/userCenter/user_center7.png" alt="placeholder+image">
                             </div>
                             <p>管理系统</p>
                        </a>
                 </li>

                 <li>
                        <a href="">
                             <div class="pic">
                                  <img src="../../static/image/userCenter/user_center10.png" alt="placeholder+image">
                             </div>
                             <p>店铺活动</p>
                        </a>
                 </li>
                 <li>
                        <a href="">
                             <div class="pic">
                                  <img src="../../static/image/userCenter/user_center11.png" alt="placeholder+image">
                             </div>
                             <p>帮助</p>
                        </a>
                 </li>

                 <li>
                        <a href="">
                             <div class="pic">
                                  <img src="../../static/image/userCenter/user_center12.png" alt="placeholder+image">
                             </div>
                             <p>我的奖品</p>
                        </a>
                 </li>
        </ul>
    </div>
</div>
</template>
<style src='../../static/css/sellers.css' scoped></style>
<script>
import '../../static/js/jquery-1.10.2.js';
var openId;
export default {
  data() {
    return {
		images: [],
        openId:''
    }
  },
  created(){
   this.get();
  },
  methods: {
  	get(){
		  const token = window.localStorage.getItem('token')
          var that = this;
          that.openId = token;
	  }
  },
  mounted(){
     var that=this;
     that.$http.get('/api/nolimit/banners/get?htmlname=usercenter').then(function(res){
        that.images=res.data.data;
     });
  }
}
</script>