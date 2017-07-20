<template>
    <div>
        <hedr></hedr>
        <router-view></router-view>
        <foot></foot>
    </div>
</template>

<script>
    import Hedr from '@/components/Header'
    import Foot from '@/components/Foot' 
  export default {
    name: 'app',
    data() {
      return {
          username: 'zcc'
      }
    },
    components:{
        hedr:Hedr,
        foot:Foot
    }
  }
</script>

<style>
</style>
