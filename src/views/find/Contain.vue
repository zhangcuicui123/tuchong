<template>
  <div>
    <div class="contain-fluid">
        <nav class="secondary-nav">
            <ul class="nav-list">
                <li class="active" data-index="0">
                    <a target="_self" href="/explore">标签</a>
                </li>
                <li class="" data-index="1">
                    <a target="_self" href="/contacts">摄影师</a>
                </li>
                        <li class="" data-index="2">
                    <a target="_blank" href="/vision">影像频道</a>
                </li>
                        <li class="" data-index="3">
                    <a target="_blank" href="/course">教程</a>
                </li>
                        <li class="" data-index="4">
                    <a target="_blank" href="/equipments">器材</a>
                </li>
            </ul>
        </nav>
        <div class="page-content">
            
        </div>
    </div>
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
    this.getTagData()
  },
  methods:{
    getTagData(){
        var url=this.HOST+'/discover-app';
        this.$http.get(url).then(res => {
            var categories=res.data.categories;
            // console.log(res);
            // console.log(categories);
            var tagStr='';
            for(var i=0;i<3;i++){
                tagStr += `
                <div class="row-group">
                    <div class="row-title" tag_id=${categories[i].tag_id}>
                        <h2 class="text-linear">${categories[i].tag_name}</h2>
                        <a class="tags-all-link" href="/find"> 查看全部 &gt; </a>
                    </div>
                    <ul class="row-content tags-list">

                    </ul>
                </div>
                `
            }
            $('.page-content').append(tagStr);
            this.getTagCon();
        },res=>{
            console.log('调用失败');
        })
    },
    getTagCon(){
        var self=this;
        $('.row-title').each(function(){
            var tag_id=$(this).attr('tag_id');
            // console.log(tag_id);
            var url=self.HOST+'/discover/'+tag_id+'/category?count=12&page=1';
            self.$http.get(url).then(res => {
                var cateCon=res.data.post_list;
                console.log(cateCon);
                var tagConStr='';
                $.each(cateCon,function(index,val){
                    tagConStr += `
                    <li class="tag-square-base">
                        <a href="${val.url}" title="" target="_blank">
                            <img class="" alt="" style="background-color: #828282;" src="https://photo.tuchong.com/${val.images[0].user_id}/g/${val.images[0].img_id}.webp">
                            <span class="tag-title"></span>
                        </a>
                    </li>
                    `
                })
                $(this).next('.tags-list').append(tagConStr);
                // $('.page-content').append(tagStr);
            },res=>{
                console.log('调用失败');
            })
        })
    }
  }
}
</script>
