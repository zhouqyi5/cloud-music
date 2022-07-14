<template>
  <div class="comments-section-list">
    <span class="hot-comments-section">热门评论 <i>76条</i></span>
    <div class="content-comments-section" v-for="item in 10" :key="item">
      <span class="head-portrait">
        <img src="../assets/images/avatar.jpg" alt="" />
      </span>
      <div class="omments-body">
        <span class="avatar-name">用户使用名</span>
        <div class="comments">
          课程通俗易懂，手把手从0搭建项目。
        </div>
        <span class="release-time">2022-7-15 13：00：01</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommentsSectionList'
}
</script>
<style scoped lang="less">
.comments-section-list {
  width: 100%;
  .hot-comments-section {
    width: 88px;
    height: 30px;
    font-size: 22px;
    font-weight: 600;
    color: #333;
    i {
      font-size: 14px;
      font-weight: 400;
      color: #999;
    }
  }
  .content-comments-section {
    display: flex;
    margin-top: 20px;
    .head-portrait {
      width: 50px;
      height: 50px;
      margin-right: 20px;
      img {
        background-size: cover;
        border-radius: 4px;
      }
    }
    .omments-body {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #f0f0f0;
      .avatar-name {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .comments {
      }
      .release-time {
        margin: 5px 0;
      }
    }
  }
}
</style>
