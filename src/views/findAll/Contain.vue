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
        <ul class="find-list"></ul>
        <div class="pager-pages">    
            <a class="active" data-page="1">1</a>    
            <a class="" data-page="2">2</a>   
            <a class="" data-page="3">3</a>    
            <a class="" data-page="4">4</a>    
            <a class="" data-page="5">5</a>    
            <strong>...</strong>    
            <a class="" data-page="8">8</a>    
            <a class="page-next" data-page="2">下一页</a>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'findAll',
  data(){
      return{
          data:{
              count:20,
              page:1
          }
      }
  },
  created(){
     this.page()
  },
  methods:{
      getPage(count,page){
        var url=this.HOST+'/discover/'+localStorage.tag_id+'/category?count='+count+'&page'+page;
        this.$http.get(url).then(res=>{
            var obj=res.data.post_list;
            console.log(obj);
            var findStr='';
            $.each(obj,function(index,val){
                findStr=`
                   <li class='find-item'>
                      
                   </li>
                `
            })
        },res=>{
            console.log('调用失败')
        })
      },
      page(){
          this.getPage(this.count,this.page)   
      }
  }
}
</script>
