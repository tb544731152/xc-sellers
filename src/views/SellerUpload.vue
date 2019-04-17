<template>
    <div class="wrap">
        <div class="top">
            <div class="box1 ge_pic_icon_Infor">
                <img class="old_pic" src="../../static/image/retail_terminal/retail_terminal10.png" alt="placeholder+image">     
            </div>
            <div class="upload">
                <input  id="file" class="files" type="file" name="" onchange="getPhoto(this)" />
            </div>           
        </div>
        <div class="papers">
            <div class="title">
                <h1>店主手持身份证照片点击上传</h1>
                <p>手持身份证正面照片且能够看清文字和照片</p>
            </div>
            <div class="pic_box">
                <div class="pic_l">
                    <div class="box2 ge_pic_icon_Infor1">
                        <img class="old_pic1" src="../../static/image/retail_terminal/photo.png" alt="placeholder+image">     
                    </div>

                    <div class="upload1">
                        <input  id="file" class="files2" type="file" name="" onchange="getPhoto1(this)" />
                    </div>         
                </div>
                <div class="pic_r">
                    <div class="pic">
                         <img src="../../static/image/retail_terminal/papers.png" alt="">
                    </div>
                    <div class="shadow"></div>
                    <div class="example">
                        <p><img src="../../static/image/retail_terminal/big.png" alt=""></p>
                        <p>示例</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="list">
            <label>姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：</label><input type="text"  id="user_name" name="" placeholder="请输入姓名"></li>
        </div>
        <div class="list">
            <label>手机号码：</label>
            <input class="tel" id="tel" type="" placeholder="请输入手机号码" name="">             
            <input type="button" class="code_btn" name="" value="获取验证码" onclick="settime(this)" >
        </div>
        <div class="list">
            <label>验&nbsp&nbsp证&nbsp&nbsp码：</label><input type="text"  id="code_name" name="" placeholder="请输入验证码">
        </div>
        <div class="list">
            <label>店&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：</label><input type="text"  id="shop_name" name="" placeholder="请输入店铺全名">
        </div>
        <div class="list area">
            <label>所在地区：</label>
              <input class="address" id="address" type="" readonly="" name=""> 
            <div class="map">
                 <img  src="../../static/image/retail_terminal/map.png" alt="地图">
                 <p>当前位置 </p>
            </div>
        </div>
        <div class="list add">
            <label class="fl">详细地址：</label>
            <textarea id="address_deatil" rows="5" cols="28" placeholder="请输入详细地址"></textarea> 
        </div>
        <p class="tips">*请确认地址准确，该地址将作为获取奖励收货地址！</p>
        <div class="rule">
            <p><请详细阅读中烟追溯零售商户许可协议></p>
        </div>
        <div class="btn">
            <p  id="btnConfirm">保存</p>
        </div>
    </div>
    
</template>



<style src='../../static/css/sellerupload.css' scoped></style>
<script>
import '../../static/js/jquery-1.10.2.js';

var openId;
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
		   console.log(openId);
	  }
  },
  mounted(){
     
    
  }
}
</script>