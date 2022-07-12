<template>
  <li class="carousel-item" :class="{ fade: name === index }">
    <slot />
  </li>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'FnCarouselItem',
  props: {
    name: {
      type: [String, Number],
      dafault: ''
    }
  },
  setup() {
    const index = inject('index')
    return { index }
  }
}
</script>

<style scoped lang="less"></style>
