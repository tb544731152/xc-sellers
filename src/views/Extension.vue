<template>
    <div class="wrap">
        <div class="papers">
            <div class="title">
                <h1>店主手持身份证照片点击上传</h1>
                <p>手持身份证正面照片且能够看清文字和照片</p>
            </div>
            <div class="pic_box">
                <div class="pic_l">
                    <div class="box2 ge_pic_icon_Infor1">
                        <img class="old_pic1" :src="photo" alt="placeholder+image">     
                    </div>

                    <div class="upload1">
                        <input  id="file" class="files2" type="file" name="" @change="changeImage($event)" />
                    </div>         
                </div>
                <div class="pic_r">
                    <div class="pic">
                         <img src="../../static/image/retail_terminal/papers.png" alt="" >
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
            <label>身份证号：</label><input type="text"  v-model="idcardnum" name="" placeholder="请输入身份证号">
        </div>
        <div class="list">
            <label>手机号码：</label>
            <input class="tel" v-model="tel" type="" placeholder="请输入手机号码" name="">             
            <input type="button" class="code_btn" name="" value="获取验证码" onclick="settime(this)" >
        </div>
        <div class="list">
            <label>验&nbsp&nbsp证&nbsp&nbsp码：</label><input type="text"  v-model="codename" name="" placeholder="请输入验证码">
        </div>
       
        <p class="tips">*请确认所填信息必须准确，方便审核通过！</p>
        <div class="btn" @click="sure_btn()">
            <p  id="btnConfirm">提交</p>
        </div>
    </div>
    
</template>



<style src='../../static/css/extension.css' scoped></style>
<script>
import '../../static/js/jquery-1.10.2.js';
import Vue from 'vue'
var openId;
export default {
  data() {
    return {
        photo:"http://127.0.0.1:8888/static/image/retail_terminal/photo.png",
		images: [],
        username:'',
        idcardnum:'',
        tel:'',
        codename:'',
        uploadimg:''


    }
  },
  created(){
      this.get();
  },
  methods: {
    sure_btn(){
        var that = this;
        openId=this.$route.query.openId;

        let data = {
            "name":this.username,
            "idCardNum":this.idcardnum,
            "idCardImg":this.photo,
            "phone":this.tel,
            "openId":openId
        };
        that.$http.post('/api/extension/save?sid=123&code='+this.codename, data).then(function(res){
            if(res.data.code==1000){
                that.$router.push ({path: '/audit', query: {openId:openId,from:'0'}});
            }
        });
    },
  	get(){
		   openId=this.$route.query.openId;
		   console.log(openId);
	},
    changeImage: function(e){
            var that = this;
            let file = e.target.files[0];
            var formFile = new FormData();
        	formFile.append("file", file);
            $.ajax({
                url: 'http://127.0.0.1:8080/upload/image/123',
                type: 'POST',
                dataType: 'json',
                cache: false,
                data: formFile,
                processData: false,
                contentType: false,
                success: function(res){
                    that.uploadimg=res.data;
                    that.photo='http://127.0.0.1:8080/api/file/get/image/'+res.data;
                }
            })
    }
  },
  mounted(){
     
    
  }
}
</script>