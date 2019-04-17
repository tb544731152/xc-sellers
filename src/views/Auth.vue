<template>
    <div class="content">
        <p>授权中...</p>
    </div>
</template>

<script>
import { getQueryString } from '@/utils/utils'
import '../../static/js/jquery-1.10.2.js';
export default {
  name: 'Author',
  data () {
    return {
    }
  },
  created () {
    // 判断链接有没有token参数，如果没有就跳微信授权，然后后台会重定向回来并携带token，如： www.xxxx.com/wx/author?token=xxxxxxxxx&msg=200
    if (!getQueryString('token')) {
      console.log('授权登录')
      this.returnGetCodeUrl()
    } else {
      console.log('已经登录')
      const code = getQueryString('code')
      const url = window.localStorage.getItem('beforeLoginUrl')
      this.login(code);
      window.localStorage.removeItem('beforeLoginUrl')
      this.$router.replace(url)
    }
  },
  methods: {
    async returnGetCodeUrl() { 
        var that=this;
        that.$http.get('/api/auth/get_wxauth').then(function(res){
            window.location.href = res.data.data;
        });
    },
    async login(code){
      var that=this;
      this.$http.get('/api/auth/login?code='+code+"&appId=wx82290dcde39ecd8c").then(function(res){
            console.log(res);
            window.localStorage.setItem('token', res.data.data);
      });
    }
  }
}
</script>

<style scoped>
.content{
  width:100%;
  height:100%;
  text-align:center;
  font-size:20px;
}
.content p{
   height:60px;
   line-height:60px;
   position:absolute;
   text-align:center;
   top:50%;
   maargin:0 auto;
   marguin-top:-30px;
   left:0;
   right:0;

}
</style>
