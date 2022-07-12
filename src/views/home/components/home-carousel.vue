<template>
  <div class="home-carousel container">
    <FnCarousel class="carousel" width="700px" height="350px" autoPlay duration="1500" amount="5">
      <FnCarouselItem :name="1">1 </FnCarouselItem>
      <FnCarouselItem :name="2">2</FnCarouselItem>
      <FnCarouselItem v-for="i in 3" :key="i" :name="i + 2">{{ i + 2 }}</FnCarouselItem>
    </FnCarousel>
  </div>
</template>
<script>
export default {
  name: 'HomeCarousel'
}
</script>
<style scoped lang="less">
.carousel {
  background-color: pink;
}
</style>
