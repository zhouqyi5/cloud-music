<!-- 按钮组件 -->
<template>
  <button
    class="fn-button ellipsis"
    :class="[
      size,
      `fn-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      }
    ]"
    :disabled="disabled"
  >
    <i v-if="icon" :class="`icon ${icon}`"></i>
    <span v-if="$slots.default"><slot></slot></span>
    <div class="mask" v-if="disabled"></div>
  </button>
</template>
<script>
export default {
  name: 'FnButton',
  props: {
    size: {
      type: String,
      default: 'middle'
    },
    type: {
      type: String,
      default: ''
    },
    // 素色
    plain: {
      type: Boolean,
      default: false
    },
    // 半圆
    round: {
      type: Boolean,
      default: false
    },
    // 纯圆
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="less">
.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.fn-button {
  display: inline-block;
  position: relative;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  /* 禁止元素的文字被选中 */
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  /* font-size: 14px; */
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #05c364;
    border-color: #05c364;
  }
}

/* size：控制的大小 */
/* 特大按钮 */
.large {
  min-width: 142px;
  height: 60px;
  font-size: 26px;
  padding: 0 30px;
  i {
    font-size: 26px;
  }
}
/* 默认按钮 */
.middle {
  min-width: 90px;
  height: 46px;
  font-size: 16px;
  padding: 0 20px;
  i {
    font-size: 16px;
  }
}
/* 小型按钮 */
.small {
  min-width: 60px;
  height: 36px;
  font-size: 14px;
  padding: 0 12px;
  i {
    font-size: 14px;
  }
}
/* 迷你按钮 */
.mini {
  min-width: 46px;
  height: 28px;
  font-size: 12px;
  padding: 0 6px;
  i {
    font-size: 12px;
  }
}

/* type：颜色：默认灰白色 */
.fn-button-primary {
  color: #fff;
  background-color: #05c364;
  border-color: #05c364;
  &:hover,
  &:focus {
    color: #05c364;
    background: lighten(#05c364, 55%);
    border-color: lighten(#05c364, 30%);
  }
}
.fn-button-success {
  color: #fff;
  background-color: #1987fa;
  border-color: #1987fa;
  &:hover,
  &:focus {
    color: #1987fa;
    background: lighten(#1987fa, 40%);
    border-color: lighten(#1987fa, 25%);
  }
}
.fn-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    color: #909399;
    background: lighten(#909399, 35%);
    border-color: lighten(#909399, 20%);
  }
}
.fn-button-warning {
  color: #fff;
  background-color: #ff9664;
  border-color: #ff9664;
  &:hover,
  &:focus {
    color: #ff9664;
    background: lighten(#ff9664, 20%);
    border-color: lighten(#ff9664, 15%);
  }
}
.fn-button-danger {
  color: #fff;
  background-color: #ff5d5d;
  border-color: #ff5d5d;
  &:hover,
  &:focus {
    color: #ff5d5d;
    background: lighten(#ff5d5d, 25%);
    border-color: lighten(#ff5d5d, 15%);
  }
}
/* 朴素按钮样式 */
.fn-button-primary.is-plain {
  color: #05c364;
  background: lighten(#05c364, 45%);
  border-color: lighten(#05c364, 30%);
  &:hover,
  &:focus {
    color: #fff;
    background: #05c364;
    border-color: #05c364;
  }
}
.fn-button-success.is-plain {
  color: #1987fa;
  background: lighten(#1987fa, 40%);
  border-color: lighten(#1987fa, 25%);
  &:hover,
  &:focus {
    color: #fff;
    background: #1987fa;
    border-color: #1987fa;
  }
}
.fn-button-info.is-plain {
  color: #909399;
  background: lighten(#909399, 35%);
  border-color: lighten(#909399, 20%);
  &:hover,
  &:focus {
    color: #fff;
    background: #909399;
    border-color: #909399;
  }
}
.fn-button-warning.is-plain {
  color: #ff9664;
  background: lighten(#ff9664, 20%);
  border-color: lighten(#ff9664, 15%);
  &:hover,
  &:focus {
    color: #fff;
    background: #ff9664;
    border-color: #ff9664;
  }
}
.fn-button-danger.is-plain {
  color: #ff5d5d;
  background: lighten(#ff5d5d, 25%);
  border-color: lighten(#ff5d5d, 15%);
  &:hover,
  &:focus {
    background: #ff5d5d;
    border-color: #ff5d5d;
    color: #fff;
  }
}
/* round属性：半圆 */
.fn-button.is-round {
  border-radius: 30px;
}
/* circle属性: 纯圆 */
.fn-button.is-circle {
  min-width: 36px;
  width: 36px;
  height: 36px;
  font-size: 16px;
  padding: 0;
  border-radius: 50%;
}
/* icon配套样式 */
.fn-button [class*='one-icon-'] + span {
  margin-left: 3px;
}
/* disabled禁用属性 */
.fn-button.is-disabled {
  cursor: no-drop;
  color: #333;
  background-color: rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}
.fn-button.is-disabled .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 100;
}
.fn-button.is-round .mask {
  border-radius: 20px;
}

.fn-button.is-circle .mask {
  border-radius: 50%;
}
</style>
