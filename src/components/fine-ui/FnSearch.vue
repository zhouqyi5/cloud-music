<template>
  <div class="fn-search" :class="{ active: searchValue }">
    <span class="fn-search_input">
      <input
        type="search"
        class="fn-search_inner"
        v-model.trim="searchValue"
        :name="name"
        :placeholder="placeholder"
        @keyup.enter="handleInput"
      />
      <i class="icon fine-close-bold" v-if="clearShow" @click="closeSearch"></i>
    </span>
    <span class="fn-search_change" @click="handleInput" :class="{ active: searchValue }">
      <i class="icon fine-search"></i>搜索
    </span>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
export default {
  name: 'FnSearch',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    // 清空内容
    clearable: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const searchValue = ref()
    const clearShow = ref(props.clearable)
    // 清空内容
    const closeSearch = () => {
      searchValue.value = ''
      clearShow.value = false
    }
    // 提交搜索
    const handleInput = () => {
      emit('update:modelValue', searchValue.value)
      emit('search', searchValue.value)
      searchValue.value = ''
      clearShow.value = false
    }
    watch(
      () => searchValue.value,
      () => {
        if (props.clearable && searchValue.value) {
          clearShow.value = true
        } else {
          clearShow.value = false
        }
      },
      { immediate: true }
    )
    return { searchValue, clearShow, closeSearch, handleInput }
  }
}
</script>
<style scpoed lang="less">
/* 去除默认的小叉 */
input[type='search']::-webkit-search-cancel-button {
  display: none;
}
.fn-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  position: relative;
  font-size: 14px;
  padding: 1px;
  border-radius: 4px !important;
  border: 1px solid #dcdfe6;
  /* 边框颜色过度 */
  transition: border-color 0.1s cubic-bezier(0.645, 045, 0.355, 1);
  &:hover {
    outline: none;
    border-color: #05c364;
  }
  &.active {
    border-color: #05c364;
  }
  .fn-search_input {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    .fn-search_inner {
      -webkit-appearance: none;
      display: inline-block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      font-size: inherit;
      color: #606266;
      outline: none;
      box-sizing: border-box;
      background-color: #fff;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .fine-close-bold {
      display: inline-block;
      position: absolute;
      width: 18px;
      height: 18px;
      right: 10px;
      font-weight: 500;
      line-height: 18px;
      text-align: center;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .fn-search_change {
    width: 20%;
    height: 40px;
    white-space: nowrap;
    outline: none;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    background-color: #fff;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    .fine-search {
      margin-right: 5px;
    }
    &.active {
      background: #c2e7b0;
      background-color: #c2e7b0;
      color: #fff;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:hover,
    &:focus {
      background: #05c364;
      background-color: #05c364;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>
