<template>
  <div>
    <swipe />
    <contain />
  </div>
</template>
<script>
import "@/assets/css/home"
import Swipe from '@/views/home/Swipe'
import Contain from '@/views/home/Contain'
export default {
  name:'home',
  components:{
      swipe:Swipe,
      contain:Contain
  }
}
</script>
