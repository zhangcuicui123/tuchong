<template>
  <div>
    <footer>
        <div class="over-auto">
            <div class="fl footer-fluid">
                <p class="fluid-title"> 关于我们 </p>
                <div class="fluid-content tuchong-desc">
                    已经有超过百万的摄影爱好者入驻了图虫 <br>
                    在这里，发现基于共同兴趣的同好，鼓励原创和分享精神 <br>
                    除了美好的摄影和技能，我们更在意影像背后价值观的认同
                </div>
            </div>
            <div class="fl footer-fluid">
                <p class="fluid-title"> 下载APP </p>
                <div class="fluid-content">
                    <a class="qrcode download" href="javascript:;"></a>
                    <div class="qrcode-parallel">
                        <a class="app-link" data-type="iOS" data-referer="official" target="_blank" title="点击下载iPhone客户端" href="https://itunes.apple.com/cn/app/tu-chong-zui-hao-she-ying/id1073064739?l=en&amp;mt=8"> iPhone版下载 </a>
                        <a class="app-link" data-type="Android" data-referer="official" title="点击下载Android客户端" href="https://tuchong.com/rest/android/download"> Android版下载 </a>
                    </div>
                </div>
            </div>
            <div class="fr footer-fluid text-center">
                <p class="fluid-title"> 关注图虫 </p>
                <div class="fluid-content">
                    <div class="qrcode-parallel">
                        <div href="javascript:;" class="link-logo wechat">
                            <a href="javascript:;">
                                <i class="icon-wechat"></i>
                            </a>
                            <a class="qrcode wechat"></a>
                        </div>
                        <div href="javascript:;" class="link-logo">
                            <a href="http://weibo.com/tuchong" target="_blank">
                                <i class="icon-weibo"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="over-auto tuchong-detail">
            <div class="footer-left">
                <span>©2017 tuchong.com</span>
                <span>沪ICP备12005590-5</span>            
                <div class="slash-list">
                    <a class="slash-item" href="https://tuchong.com/info/terms/"><i>用户协议</i></a>
                    <a class="slash-item" href="https://tuchong.com/info/copyright/"><i>版权政策</i></a>
                    <a class="switch-layout slash-item" href="javascript:void(0);" data-version="mobile"><i>移动版</i></a>
                    <a class="switch-layout slash-item" href="javascript:void(0);" data-version="pc"><i>电脑版</i></a>
                </div>
            </div>
            <div class="footer-right slash-list">
                <a class="slash-item" href="//exif.cn/"><i>EXIF查看器</i></a>
                <a class="slash-item" href="https://tuchong.com/help/"><i>帮助</i></a>
                <a class="slash-item" href="https://tuchong.com/info/aboutus/"><i>关于</i></a>
                <a class="slash-item" href="https://tuchong.com/info/contactus/"><i>联系</i></a>
                <a class="slash-item" href="https://tuchong.com/info/service/"><i>服务</i></a>
                <a class="slash-item" href="https://tuchong.com/job/"><i>加入我们</i></a>
            </div>
        </div>
    </footer>
<a class="icon-gotop"></a>
  </div>
</template>
<script>
export default {
  name:'Foot',
  data(){
      return{
         scroll: ''
      }
  },
  created(){
       this.gotop()
  },
  methods:{
      gotop(){
          this.scroll = document.body.scrollTop;
        //   console.log(this.scroll);
          $('.icon-gotop').click(function(){
              document.body.scrollTop=0;
          })
            if(this.scroll >= 80){
                console.log("aaa");
                $('.icon-gotop').css('display','inline');
            }else{
                $('.icon-gotop').css('display','');
            }

      },
    mounted() {
      window.addEventListener('scroll', this.gotop)
    },
  }
}
</script>
