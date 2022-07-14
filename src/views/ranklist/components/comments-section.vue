<template>
  <div class="comments-section">
    <CommentsSectionList />
  </div>
</template>
<script>
import CommentsSectionList from '@/components/comments-section-list'
export default {
  name: 'CommentsSection',
  components: { CommentsSectionList }
}
</script>
<style scoped lang="less">
.comments-section {
  width: 100%;
  margin-top: 30px;
}
</style>
