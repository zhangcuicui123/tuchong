<template>
  <div>
      <div class="h-sec">
          <div class="container-fluid">
            <section class="welcome-cover" id="welcome-cover">
                <div class="cover-wrapper">
                    <h1 class="cover-slogan">最好的摄影师都在这</h1>
                    <a class="cover-enter register-trigger">马上加入</a>
                    <div class="cover-qrcode"><a class="qrcode-image" href="/app"></a></div>
                    <a href="https://appsto.re/cn/JSA9_.i" class="link-ios"></a>
                    <a href="https://tuchong.com/rest/android/download" class="link-android"></a>
                </div>
                <a class="cover-author" href="/" target="_blank"></a>
                <!--<div class="bottom-bar-mask"></div>-->
                <div class="guide-bar">
                    <div class="wrap">
                        <i class="icon"></i>
                        <span>高清正版图片下载</span>
                        <a target="_blank" id="tuchong_stock_enter">点此进入<i>›</i></a>
                    </div>
                </div>
            </section>
        </div>
      </div>
    
  </div>
</template>
<script>
export default {
  name:'Swipe',
  data(){
    return {
        data:{
            imgBg:'',
            author:''
        }
    }
  },
  created(){
    this.getImgBg()
  },
  methods:{
      getImgBg(){
          var imgArr=['/static/img/h-b1.jpg','/static/img/h-b2.jpg','/static/img/h-b3.jpg',
          '/static/img/h-b4.jpg','/static/img/h-b5.jpg','/static/img/h-b6.jpg'];
          var author=['By: @馒猫子','By: @馒猫子','By: @GoMustang-奔驰野马','By: @虎子-HU','By: @Sean_T','By: @左耳右耳']
          var idx=parseInt(Math.random()*imgArr.length);
          this.imgBg=imgArr[idx];
          $('.welcome-cover').css('background-image','url('+this.imgBg+')');
          this.author=author[idx];
          $('.cover-author').html(this.author);
      }
  },
  mounted() {
      window.addEventListener('load', this.getImgBg)
    },
}
</script>
