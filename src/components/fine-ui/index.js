// import defaultImg from '@/assets/images/bg.png' // 懒加载失败图片
// import Message from '@/components/Message'
// import Confirm from '@/components/Confirm'

// import './fonts/iconfont.css'
// import './styles/common.css'
// 自动的批量注册组件。使用 require 提供的函数 context 加载某一个目录下的所有 .vue 后缀的文件。
// 然后 context 函数会返回一个导入函数 importFn
// 它有一个属性 keys() 获取所有的文件路径
// 通过文件路径数组，通过遍历数组，再使用 importFn 根据路径导入组件对象
// 遍历的同时进行全局注册即可
// context(目录路径， 是否加载子目录， 加载文件的匹配（可以写正则）)
const importFn = require.context('@/components/fine-ui', false, /\.vue$/)
// console.log(importFn.keys())
export default {
  install(app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    // app.component(FineSkeleton.name, FineSkeleton)

    // 根据keys批量注册
    importFn.keys().forEach((path) => {
      // 导入组件
      const component = importFn(path).default
      // 组件注册
      app.component(component.name, component)
    })
    // 挂载原型 app.config.globalProperties 方式
    // app.config.globalProperties.$message = Message
    // app.config.globalProperties.$confirm = Confirm

    // 定义指令 图片懒加载
    defineDirective(app)
  }
}

// 定义图片懒加载指令
const defineDirective = (app) => {
  // 原理 先存储图片，但是地址不能在 src 上，当图片进入可视区，将存储图片地址设置给图片元素即可（操作dom）
  app.directive('lazy', {
    // vue2.x 中监听使用指令的Dom是否创建好，钩子函数：inderted （组合式api写法）
    // vue3.x 的指令拥有的钩子函数和组件的一样，使用指令的DOm是否创建好，钩子函数：mounted （选项api）
    mounted(el, binding) {
      // 在 mounted 配置选项中 中操作 dom
      // 创建一个观察对象 来观察当点使用指令的元素是否进入可视区 IntersectionObserver 懒加载api
      const observe = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 在可视区的时候，停止观察
            observe.unobserve(el)
            // 将指令的值设置给 el 的 src属性
            // binding.value就是绑定指令的值
            el.onerror = () => {
              // 处理图片加载失败 (onerror 是图片加载失败的原生属性 load为图片加载成功的原生属性)
              el.src = '' // el.src = defaultImg
            }
            el.src = binding.value
          }
        },
        {
          threshold: 0.01 // 相交距离
        }
      )
      // 开启观察
      observe.observe(el)
    }
  })
}
