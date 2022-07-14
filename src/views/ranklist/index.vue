<template>
  <div class="rank-list container">
    <RankListLeft />
    <RankListRight />
  </div>
</template>
<script>
import RankListLeft from './components/rank-list-left'
import RankListRight from './components/rank-list-right'
export default {
  name: 'RankList',
  components: { RankListLeft, RankListRight }
}
</script>
<style scoped lang="less">
.rank-list {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
