<template>
  <div class="home-play-list container">
    <MusicList />
  </div>
</template>
<script>
import MusicList from '@/components/music-list'
export default {
  name: 'HomePlayList',
  components: { MusicList }
}
</script>
<style scoped lang="less">
.home-play-list {
  width: 820px;
  margin-top: -6px;
  margin-right: 30px;
}
</style>
