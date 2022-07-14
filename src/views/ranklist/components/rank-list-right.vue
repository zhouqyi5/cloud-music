<template>
  <div class="rank-list-right">
    <RankHeader />
    <RankMusicList />
    <CommentsSection />
  </div>
</template>
<script>
import RankHeader from './rank-header'
import RankMusicList from './rank-music-list'
import CommentsSection from './comments-section'
export default {
  name: 'RankListRight',
  components: { RankHeader, RankMusicList, CommentsSection }
}
</script>
<style scoped lang="less">
.rank-list-right {
  width: 960px;
  padding-left: 30px;
}
</style>
