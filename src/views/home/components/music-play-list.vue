<template>
  <div class="music-play">
    <ul class="music-play-list">
      <li class="serial-number">
        <img src="../../../assets/images/xgb.png" alt="" />
      </li>
      <li class="music-play-item" v-for="item in 6" :key="item">
        <span style="width: 20px; text-align: center;">1</span>
        <div class="music-singer">
          <span class="music-name ellipsis">请带着浪漫远航</span>
          <span class="singer-name">周深</span>
        </div>
      </li>
    </ul>
    <ul class="music-play-list">
      <li class="serial-number">
        <img src="../../../assets/images/bsb.png" alt="" />
      </li>
      <li class="music-play-item" v-for="item in 6" :key="item">
        <span style="width: 20px; text-align: center;">1</span>
        <div class="music-singer">
          <span class="music-name">勇敢者</span>
          <span class="singer-name">陈奕迅</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'MusicPlayList',
  setup() {
    const Show = ref(true)
    return { Show }
  }
}
</script>
<style scoped lang="less">
.music-play {
  width: 540px;
  height: 350px;
  border-radius: 4px;
  .music-play-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    float: left;
    margin-left: 20px;
    width: 250px;
    .serial-number {
      width: 100%;
      height: 60px;
      position: relative;
      margin-bottom: 4px;
      background-color: rgb(253, 95, 95);
      img {
        position: absolute;
        width: 150px;
        height: 50px;
        left: 50%;
        top: 50%;
        background-size: cover;
        transform: translate(-50%, -50%);
      }
    }
    .music-play-item {
      display: flex;
      align-items: center;
      width: 250px;
      height: 48px;
      padding: 0 10px;
      &:nth-child(even) {
        background-color: #fff;
      }
      &:nth-child(odd) {
        background-color: #f5f5f5;
      }
      &:hover {
        background-color: #e9e9e9;
      }
      .music-singer {
        width: 220px;
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        cursor: pointer;
        .music-name {
          font-size: 16px;
          color: rgb(51, 51, 51);
          overflow: hidden;
        }
        .singer-name {
          margin-top: 2px;
          font-size: 14px;
          color: rgb(156, 155, 156)
        }
      }
    }
  }
}
</style>
