<template>
  <div>
    <AppHeaderNav />
  </div>
  <router-view></router-view>
</template>

<script>
import AppHeaderNav from '@/components/app-header-nav'
export default {
  name: 'App',
  components: { AppHeaderNav }
}
</script>
<style lang="less"></style>
