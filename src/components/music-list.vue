<template>
  <div class="home-play-list">
    <ul>
      <li class="home-play-list-item title-instructions">
        <span class="serial-number">序号</span>
        <span class="song-name">歌曲</span>
        <span class="singer-name">歌手</span>
        <span class="duration-time">时长</span>
      </li>
      <li class="home-play-list-item" v-for="item in 15" :key="item">
        <span class="serial-number">序号1</span>
        <span class="song-name">天亮以后再说</span>
        <span class="singer-name">荷野</span>
        <span class="duration-time">04:00</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MusicList'
}
</script>
<style scoped lang="less">
.home-play-list {
  width: 100%;
  font-size: 16px;
  &-item {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(50, 50, 50);
    &:nth-child(even) {
      background-color: #f5f5f5;
    }
    &:nth-child(odd) {
      background-color: #fff;
    }
    &:hover {
      background-color: #e9e9e9;
    }
    .serial-number {
      flex: 1;
    }
    .song-name {
      flex: 5;
    }
    .singer-name {
      flex: 3;
      color: rgb(102, 102, 102);
    }
    .duration-time {
      flex: 1;
      color: rgb(102, 102, 102);
    }
  }
  .title-instructions {
    height: 46px;
    color: rgb(153, 153, 153);
  }
}
</style>
