<template>
  <div>
      <header>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <!--当你切换到移动端或屏幕比较小的时候显示的logo-->
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <!--显示在页面的logo-->
                  <a class="navbar-brand" href="#"></a>
              </div>
              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                      <router-link to="/" exact tag="li"> <a> 首页 </a></router-link>
                      <router-link to="/" tag="li"> <a> 活动 </a> </router-link>
                      <router-link to="/find" tag="li" class="dropdown">
                          <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">发现</a>
                          <ul class="dropdown-menu">
                              <li><a href="#">标签</a></li>
                              <li><a href="#">摄影师</a></li>
                              <li><a href="#">影像频道</a></li>
                              <li><a href="#">教程</a></li>
                              <li><a href="#">频道</a></li>
                          </ul>
                      </router-link>
                      <router-link to="/" tag="li" class="dropdown">
                          <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">交流</a>
                          <ul class="dropdown-menu">
                              <li><a href="#">小组</a></li>
                              <li><a href="#">讨论</a></li>
                          </ul>
                      </router-link>
                      <router-link to="/" tag="li" class="dropdown">
                          <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">更多</a>
                          <ul class="dropdown-menu">
                              <li><a href="#">图虫创意</a></li>
                              <li><a href="#">下载APP</a></li>
                              <li><a href="#">商务合作</a></li>
                          </ul>
                      </router-link>                      
                  </ul>
                  <div class="navbar-right">
                    <div class="nav-search">
                        <i class="icon-search J-search-btn"></i>
                        <form action="/" method="get">
                            <input required="" class="search-input" type="text" name="query" placeholder="搜索" autocomplete="off">
                        </form>
                    </div>
                      <!-- 非登录状态 -->
                    <a class="nav-login login-trigger">登录</a>
                    <a class="nav-register register-trigger">注册</a>
                </div>
                <!-- /.nav-right -->
              </div>
              <!-- /.navbar-collapse -->
          </div>
          <!-- /.container-fluid -->
        </nav>
      </header>
  </div>
</template>
<script>
export default{
  name:'Hedr',
  data() {
      return {
        scroll: ''
      }
    },
    created(){
        this.menu()
    },
    methods: {
        menu() {
            $(document).ready(function(){
                //关闭单击实现显示或隐藏下拉菜单的功能
                $(document).off('click.bs.dropdown.data-api');
                dropdownOpen();
            });
            //鼠标悬停实现显示或隐藏下拉菜单
            function dropdownOpen() { 
                var $dropdownLi = $('li.dropdown');    
                $dropdownLi.mouseover(function() {
                    $(this).addClass('open');
                }).mouseout(function() {
                    $(this).removeClass('open');
                });
            }
        }
    }
}
</script>
