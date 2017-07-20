<template>
  <div>
    <section class="content">
        <section class="hot-posts">
            <h2>已经有超过百万的摄影爱好者入驻了图虫······</h2>
            <p>在这里，发现基于共同兴趣的同好；鼓励原创和分享精神；除了美好的摄影和技能，我们更在意影像背后价值观的认同。</p>
            <ul class="posts-list">
                
            </ul>
        </section>
        <section class="hot-events">
            <h2>全年超过百万奖金的活动和大赛，好照片不再寂寞······</h2>
            <p>中国最活跃的摄影赛事平台，层出不穷的活动创意，专业的摄影导师群体，一起帮助你成为中国最好的摄影师。</p>
            <ul class="events-list">
                
            </ul>
        </section>
    </section>
  </div>
</template>
<script>
export default {
  name:'Contain',
  data(){
      return{
          data:{}
      }
  },
  created(){
      this.getHotsData()
      this.getEventsData()
  },
  methods: {     
      getHotsData:function(){
            var url = this.HOST + '/feed-app'
            this.$http.get(url).then(res => {
            // console.log(res.data.feedList);
            var obj=res.data.feedList;
            var html='';
            for(var i=0;i<6;i++){
               html +=`
                 <li class="post-item">
                    <a class="post-cover" 
                        style="
                        width:393px;height:295px;
                        background-image:url(https://photo.tuchong.com/${obj[i].images[0].user_id}/ft640/${obj[i].images[0].img_id}.webp"
                        href="${obj[i].url}">
                        <div class="post-mask leave-left">
                            <h3 class="post-title">${obj[i].title}</h3>
                            <img class="post-author-icon" src="${obj[i].site.icon}">
                            <span class="post-author-name">${obj[i].site.name}</span>
                        </div>
                    </a>
                </li>
               `
            }
            $('.posts-list').append(html);
            $('.posts-list>li').each(function(idx){
                if(idx<3){
                    $('.posts-list>li').eq(idx).css('margin-top','0px');
                }
                if(idx%3==0){
                    $('.posts-list>li').eq(idx).css('margin-left','0px');
                }else{
                    $('.posts-list>li').eq(idx).css('margin-left','10px');
                }

                $(this).mouseover(function(){
                    $(this).find('.post-mask').css('z-index','0');
                }).mouseout(function(){
                    $(this).find('.post-mask').css('z-index','-1');
                })
            })
            },res => {
            console.info('调用失败');
            });
      },
      getEventsData:function(){
        var url = this.HOST + '/discover-app'
        this.$http.get(url).then(res => {
            var obj=res.data.hotEvents;
            // console.log(obj);
            var eventStr='';
            $.each(obj,function(index,val){
                eventStr += `
                  <li class="" style="background-image: url(${val.images});">
                    <a class="event-mask" href="${val.url}" target="_blank">
                        <h3 class="event-title">${val.title}</h3>
                        <p class="event-posts">已投稿${val.posts}</p>
                    </a>
                </li>
                `
            })
            $('.events-list').append(eventStr);
        },res => {
            console.info('调用失败');
        });
      }
  }
}
</script>
