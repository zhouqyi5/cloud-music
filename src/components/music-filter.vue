<template>
  <!-- 筛选区 -->
  <div class="music-filter">
    <div class="item" v-for="i in 3" :key="i">
      <!-- <div class="head">品牌：</div> -->
      <div class="body">
        <a href="javascript:;">全部</a>
        <a href="javascript:;" v-for="i in 26" :key="i">A</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MusicFilter'
}
</script>
<style scoped lang="less">
/* 筛选区 */
.music-filter {
  background: #f5f5f5;
  padding: 10px;
  .item {
    display: flex;
    line-height: 40px;
    /* .head {
      width: 80px;
      color: #999;
    } */
    .body {
      flex: 1;
      a {
        margin-right: 30px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @fineColor;
        }
      }
    }
  }
}
</style>
