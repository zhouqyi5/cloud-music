<template>
  <div class="home-song-list container">
    <FnPanel class="home-panel" title="推荐歌单" width="1240px">
      <template #right>
        <FnMore path="/me" />
      </template>
      <!-- 面板内容 -->
      <div class="song-list clearfix">
        <ul>
          <li class="song-list-item" v-for="item in 6" :key="item">
            <div class="song-list-item-img">
              <img
                src="../../../assets/images/10000.jpg"
                alt=""
              />
            </div>
            <div class="song-list-item-text">
              <span class="song-list-item-text-name ellipsis-2">每日最新单曲</span>
              <span class="icon fine-bofang song-list-iten-text-icon">&nbsp;30340.2万</span>
            </div>
          </li>
        </ul>
      </div>
    </FnPanel>
  </div>
</template>
<script>
export default {
  name: 'HomeSongList'
}
</script>
<style scoped lang="less">
.home-song-list {
  margin-top: 20px;
  .song-list-item {
    float: left;
    width: 200px;
    height: 300px;
    /* background-color: pink; */
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
    &-img {
      width: 100%;
      height: 200px;
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
        margin-top: 10px;
        font-size: 14px;
        color: #969696;
      }
    }
  }
}
</style>
