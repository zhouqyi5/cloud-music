<template>
  <div class="rank-music-list">
    <MusicList />
  </div>
</template>
<script>
import MusicList from '@/components/music-list'
export default {
  name: 'RankMusicList',
  components: { MusicList }
}
</script>
<style scoped lang="less">
.music-paly-list {
  width: 100%;
}
</style>
