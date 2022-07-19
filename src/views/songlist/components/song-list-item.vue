<template>
  <div class="song-list-item container">
    <!-- <div>全部歌手</div> -->
    <div class="song-list clearfix">
      <ul>
        <li class="song-list-item" v-for="item in 30" :key="item">
          <div class="song-list-item-img">
            <img src="../../../assets/images/10000.jpg" alt="" />
          </div>
          <div class="song-list-item-text">
            <span class="song-list-item-text-name ellipsis-2">每日最新单曲</span>
            <span class="icon fine-bofang song-list-iten-text-icon">&nbsp;30340.2万</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SongListItem'
}
</script>
<style scoped lang="less">
.song-list-item {
  margin-top: 10px;
  .song-list {
    &-item {
      float: left;
      width: 180px;
      height: 260px;
      margin-right: 32px;
      &:nth-child(6n) {
        margin-right: 0;
      }
      &-img {
        width: 100%;
        height: 180px;
      }
      &-text {
        width: 100%;
        margin-top: 10px;
        &-name {
          font-size: 16px;
          color: black;
        }
        .song-list-iten-text-icon {
          display: inline-block;
          margin-top: 8px;
          font-size: 14px;
          color: #969696;
        }
      }
    }
  }
}
</style>
