<template>
  <div class="rank-list-left">
    <div class="ranking-list">金榜排行</div>
    <div class="ranking-name-list active">
      <div class="ranking-avatar">
        <img src="../../../assets/images/avatar.jpg" alt="" />
      </div>
      <div class="ranking-text">
        <span class="ranking-name">热歌榜</span>
        <span class="ranking-update">今日更新</span>
      </div>
    </div>
    <div class="ranking-name-list">
      <div class="ranking-avatar">
        <img src="../../../assets/images/avatar.jpg" alt="" />
      </div>
      <div class="ranking-text">
        <span class="ranking-name">热歌榜</span>
        <span class="ranking-update">今日更新</span>
      </div>
    </div>
    <div class="ranking-name-list">
      <div class="ranking-avatar">
        <img src="../../../assets/images/avatar.jpg" alt="" />
      </div>
      <div class="ranking-text">
        <span class="ranking-name">热歌榜</span>
        <span class="ranking-update">今日更新</span>
      </div>
    </div>
    <div class="ranking-name-list">
      <div class="ranking-avatar">
        <img src="../../../assets/images/avatar.jpg" alt="" />
      </div>
      <div class="ranking-text">
        <span class="ranking-name">热歌榜</span>
        <span class="ranking-update">今日更新</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RankListLeft'
}
</script>
<style scoped lang="less">
.rank-list-left {
  width: 280px;
  background-color: pink;
  .ranking-list {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    line-height: 50px;
  }
  .ranking-name-list {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 10px;
    .ranking-avatar {
      width: 60px;
      height: 60px;
      margin-right: 10px;
      img {
        background-size: cover;
      }
    }
    .ranking-text {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      color: #999;
      .ranking-name {
        font-weight: 600;
        margin-bottom: 10px;
        color: #333;
      }
    }
  }
  .active {
    background-color: #f2f2f2;
  }
}
</style>
