<!-- 轮播图基础结构 -->
<script>
import { ref, provide, computed, onMounted } from 'vue'
export default {
  name: 'FnCarousel',
  props: {
    // 是否自动轮播
    autoPlay: {
      type: Boolean,
      default: false
    },
    amount: {
      type: Number,
      default: 1
    },
    // 间隔时间
    duration: {
      type: Number,
      default: 2000
    },
    width: {
      type: String,
      default: '50%'
    },
    height: {
      type: String,
      default: '50%'
    }
  },
  setup(props) {
    const index = ref(0)
    // 左侧按钮
    const leftClick = (count, step) => {
      const newIndex = index.value + step
      if (newIndex < 0) {
        // 超出情况 过小
        index.value = count - 1
        return
      }
      index.value = newIndex // 正常情况
    }
    // 右侧按钮
    const rightClick = (count, step) => {
      const newIndex = index.value + step
      if (newIndex > count - 1) {
        // 超出情况 过大
        index.value = 0
        return
      }
      index.value = newIndex // 正常情况
    }
    // 点击指示器切换
    const tabClick = (item, i) => {
      index.value = i
    }
    // 1 自动轮播逻辑
    let timer = null
    const autoPlayFn = () => {
      clearInterval(timer) // 开启定时器之前清除定时器
      // 自动轮播，每隔一段时间切换异常索引
      timer = setInterval(() => {
        index.value++
        if (index.value >= props.amount) {
          index.value = 0
        }
      }, props.duration)
    }
    // 2 鼠标进入暂停，离开又自动播放（autoPlayFn()）
    const stop = () => {
      if (timer) clearInterval(timer)
    }
    const start = () => {
      if (props.autoPlay && props.amount) {
        autoPlayFn()
      }
    }
    onMounted(() => {
      if (props.autoPlay && props.amount >= 1) {
        autoPlayFn()
      } else {
        clearInterval(timer)
      }
    })

    provide(
      'index',
      computed(() => index.value + 1)
    )

    return { index, tabClick, leftClick, rightClick, autoPlayFn, stop, start }
  },

  render() {
    // 1 获取默认插槽节点
    const slideshow = this.$slots.default()

    // 动态的slideshow组件集合
    const dynamic = []
    const dynamiclength = []
    slideshow.forEach((item, i) => {
      if (item.type.name === 'FnCarouselItem') {
        dynamic.push(item)
        dynamiclength.push(i)
      } else {
        item.children.forEach((item, i) => {
          dynamic.push(item)
          dynamiclength.push(i)
        })
      }
    })
    const indicator = dynamic.map((item, i) => {
      return (
        <span onClick={() => this.tabClick(item, i)} class={{ active: i === this.index }}></span>
      )
    })
    // console.log(indicator.length)
    return (
      <div
        class="fn-carousel"
        style={{ width: this.width, height: this.height }}
        onMouseenter={() => this.stop()}
        onMouseleave={() => this.start()}
      >
        <ul class="carousel-body">{dynamic}</ul>
        <a
          onClick={() => this.leftClick(indicator.length, -1)}
          href="javascript:;"
          class="carousel-btn prev"
        >
          <i class="icon fine-arrow-left-bold"></i>
        </a>
        <a
          onClick={() => this.rightClick(indicator.length, 1)}
          href="javascript:;"
          class="carousel-btn next"
        >
          <i class="icon fine-arrow-right-bold"></i>
        </a>
        <div class="carousel-indicator">{indicator}</div>
      </div>
    )
  }
}
</script>
<style lang="less">
.fn-carousel {
  width: 600px;
  height: 300px;
  border-radius: 4px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        // ~ span {
        margin: 0 3px;
        // }
        &.active {
          width: 10px;
          height: 10px;
          background: #fff;
        }
      }
    }
    &-btn {
      width: 30px;
      height: 30px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      text-align: center;
      line-height: 30px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 10px;
      }
      &.next {
        right: 10px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
/* ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #333;
    outline: none;
  }
  i {
    font-style: normal;
  } */
</style>
