<template>
    <div class="wrap">
        <div class="top">
            <div class="box1 ge_pic_icon_Infor">
                <img class="old_pic" :src="licence_img" alt="placeholder+image">     
            </div>
            <div class="upload">
                <input  id="file" class="files" type="file" name=""  @change="uploadLicence($event)"/>
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
                        <img class="old_pic1" :src="id_crad_img" alt="placeholder+image">     
                    </div>

                    <div class="upload1">
                        <input  id="file" class="files2" type="file" name=""  @change="uploadIdCard($event)" />
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
            <label>姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：</label><input type="text"  v-model="username" name="" placeholder="请输入姓名"></li>
        </div>
        <div class="list">
            <label>手机号码：</label>
            <input class="tel" v-model="tel" type="" placeholder="请输入手机号码" name="">             
            <input type="button" class="code_btn" name="" value="获取验证码" onclick="settime(this)" >
        </div>
        <div class="list">
            <label>验&nbsp&nbsp证&nbsp&nbsp码：</label><input type="text" v-model="codename" name="" placeholder="请输入验证码">
        </div>
        <div class="list">
            <label>店&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：</label><input type="text"  v-model="shop_name" name="" placeholder="请输入店铺全名">
        </div>
        <div class="list area">
            <label>所在地区：</label>
            <input class="address" id="address" @click="onSelAddr" v-model="addrInfo" type="" readonly="true" name=""> 
            <van-popup v-model="show" position="bottom">
                <van-area :area-list="areaList" @confirm="onAddrConfirm" @cancel="onAddrCancel"/>
            </van-popup>  
        </div>
        <div class="list add">
            <label class="fl">详细地址：</label>
            <textarea   v-model="address_deatil" rows="5" cols="28" placeholder="请输入详细地址"></textarea> 
        </div>
        <p class="tips">*请确认地址准确，该地址将作为获取奖励收货地址！</p>
        <div class="rule">
            <p><请详细阅读中烟追溯零售商户许可协议></p>
        </div>
        <div class="btn"  @click="sure_btn()">
            <p  id="btnConfirm">保存</p>
        </div>
    </div>
    
</template>



<style src='../../static/css/sellerupload.css' scoped></style>
<script>
import '../../static/js/jquery-1.10.2.js';
import AreaList from '../../static/js/area.js';
import Vue from 'vue'
var openId;
export default {
  data() {
    return {
        licence_img:"http://127.0.0.1:8080/static/image/retail_terminal/photo.png",
        id_crad_img:"http://127.0.0.1:8080/static/image/retail_terminal/photo.png",
		images: [],
        openId:'',
        show : false,
        addrInfo:'',
        areaList:AreaList,
        address_deatil:'',
        username:'',
        tel:'',
        codename:'',
        shop_name:''
    }
  },
  created(){
        this.get();
  },
  methods: {
    onSelAddr(){   
        //选择地区
        this.show = true;
    },
    onAddrConfirm(val){  
        //确定选择
        this.show = false; 
        this.addrInfo = val[0].name+ val[1].name +val[2].name
    },
    onAddrCancel(){  //取消选择
        this.show = false;
    },
  	get(){
		  const token = window.localStorage.getItem('token')
          var that = this;
          that.openId = token;
	  },
    uploadIdCard: function(e){
            var that = this;
            let file = e.target.files[0];
            var formFile = new FormData();
        	formFile.append("file", file);
            $.ajax({
                url: 'http://127.0.0.1:8080/upload/image?openId='+this.openId,
                type: 'POST',
                dataType: 'json',
                cache: false,
                data: formFile,
                processData: false,
                contentType: false,
                success: function(res){
                    that.uploadimg=res.data;
                    that.id_crad_img='http://127.0.0.1:8080/api/file/get/image/'+res.data;
                }
            })
    },
    uploadLicence: function(e){
            var that = this;
            let file = e.target.files[0];
            var formFile = new FormData();
        	formFile.append("file", file);
            $.ajax({
                url: 'http://127.0.0.1:8080/upload/image?openId='+this.openId,
                type: 'POST',
                dataType: 'json',
                cache: false,
                data: formFile,
                processData: false,
                contentType: false,
                success: function(res){
                    that.uploadimg=res.data;
                    that.licence_img='http://127.0.0.1:8080/api/file/get/image/'+res.data;
                }
            })
    },
    sure_btn(){
        var that = this;
        let data = {
            "openId":this.openId,
            "name":this.username,
            "phone":this.tel,
            "shopName":this.shop_name,
            "address":this.addrInfo,
            "addressDetail":this.address_deatil,
            "businessLicense":this.licence_img,
            "idcardImg":this.id_crad_img

        };
        that.$http.post('/api//sellers/save?openId='+this.openId+'&code='+this.codename, data).then(function(res){
            if(res.data.code==1000){
                that.$router.push ({path: '/audit', query: {from:'1'}});
            }
        });
    },

  },
  mounted(){
     
    
  }
}
</script>