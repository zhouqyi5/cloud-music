<template>
  <div class="home-singer-list">
    <FnPanel class="home-panel" title="推荐歌手" width="390px">
      <template #right>
        <FnMore path="/me" />
      </template>
      <!-- 面板内容 -->
      <div class="singer-list clearfix">
        <ul>
          <li class="singer-list-item" v-for="item in 6" :key="item">
            <div class="singer-list-item-img">
              <img src="../../../assets/images/10000.jpg" alt="" />
            </div>
            <div class="singer-list-item-text">
              <span class="singer-list-item-text-name">名字</span>
              <span class="singer-list-iten-text-icon">12334首歌</span>
            </div>
          </li>
        </ul>
      </div>
    </FnPanel>
  </div>
</template>
<script>
export default {
  name: 'HomeSingererList'
}
</script>
<style scoped lang="less">
.home-singer-list {
  .singer-list-item {
    float: left;
    width: 180px;
    height: 260px;
    margin-right: 30px;
    &:nth-child(even) {
      margin-right: 0;
    }
    &-img {
      width: 100%;
      height: 180px;
      img {
        border-radius: 50%;
      }
    }
    &-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 10px;
      &-name {
        font-size: 16px;
        color: black;
      }
      .singer-list-iten-text-icon {
        display: inline-block;
        margin-top: 10px;
        font-size: 14px;
        color: #969696;
      }
    }
  }
}
</style>
