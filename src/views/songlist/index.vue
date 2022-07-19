<template>
  <div class="container">
    歌单
    <SongListFilter />
    <SongListItem />
  </div>
</template>
<script>
import SongListFilter from './components/song-list-filter'
import SongListItem from './components/song-list-item'
export default {
  name: 'SongList',
  components: { SongListFilter, SongListItem }
}
</script>
<style scoped lang="less"></style>
