<template>
  <div class="rank-header">
    <div class="header-img">
      <img src="../../../assets/images/biaoshengbang.jpg" alt="" />
    </div>
    <div class="header-title">
      <div class="header-title-text">
        <span class="text-name">飙升榜</span>
        <span class="update-time">更新时间：2022-07-15</span>
      </div>
      <div class="header-title-play">
        <span><FnButton round>全部播放</FnButton></span>
        <span><FnButton round>添加</FnButton></span>
        <span><FnButton round>收藏</FnButton></span>
        <span><FnButton round>评论</FnButton></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RankHeader'
}
</script>
<style scoped lang="less">
.rank-header {
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  background-color: rgb(136, 247, 210);
  .header-img {
    width: 150px;
    height: 150px;
    margin-right: 30px;
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }
  .header-title {
    width: 600px;
    display: inline-block;
    .header-title-text {
      width: 100%;
      height: 68px;
      line-height: 68px;
      .text-name {
        display: inline-block;
        width: 150px;
        height: 100%;
        font-size: 38px;
        font-weight: 600px;
        color: #333;
      }
      .update-time {
        font-size: 14px;
        color: #999;
      }
    }
    .header-title-play {
      width: 100%;
      height: 68px;
      line-height: 68px;
      > span {
        margin: 0 15px;
      }
    }
  }
}
</style>
