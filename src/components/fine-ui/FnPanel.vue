<!-- 面板组件 -->
<template>
  <div class="fn-panel" :style="{ width: width }">
    <div class="fn-panel_head" @click.self="visible">
      <span @click="visible">
        <slot name="left">
          <!-- 左侧标题，将span放到slot内，这样不仅可以定义title文本，还可以定义样式等 -->
          <h3>{{ title }}</h3>
        </slot>
      </span>
      <!-- 右侧right插槽 -->
      <span class="right">
        <slot name="right" />
      </span>
    </div>
    <div class="fn-panel_content" v-if="visibleShow">
      <!-- 默认插槽 -->
      <slot />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'FnPanel',
  props: {
    title: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    }
  },
  setup(props) {
    const visibleShow = ref(true)
    const visible = () => {
      if (props.clearable) {
        visibleShow.value = !visibleShow.value
      }
    }
    return { visibleShow, visible }
  }
}
</script>

<style scoped lang="less">
.fn-panel {
  background-color: #fff;
  border-radius: 4px;
  .fn-panel_head {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(230, 230, 230);
    h3 {
      display: inline-block;
      font-size: 24px;
      font-weight: normal;
    }
  }
  .fn-panel_content {
    margin-top: 6px;
    padding-bottom: 6px;
  }
}
/* 动画 */
/* .panel-action-enter-active {
  animation: action 0.4s;
}
.panel-action-leave-active {
  animation: action 0.4s reverse;
}
@keyframes action {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
} */
</style>
