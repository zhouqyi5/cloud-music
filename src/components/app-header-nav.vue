<template>
  <nav class="app-nav">
    <div class="container">
      <span class="logo">
        <RouterLink to="/">Logo</RouterLink>
      </span>
      <ul class="navs">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li>
          <a href="#"><RouterLink to="/ranklist">排行榜</RouterLink></a>
        </li>
        <li>
          <a href="#"><RouterLink to="/singer">歌手</RouterLink></a>
        </li>
        <li>
          <a href="#"><RouterLink to="/songlist">歌单</RouterLink></a>
        </li>
      </ul>

      <FnSearch />

      <div class="login">登录/注册</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="less">
.app-nav {
  border-bottom: 1px solid rgb(230, 230, 230);
  .container {
    display: flex;
    align-items: center;
    .logo {
      width: 180px;
      a {
        display: block;
        height: 40px;
        width: 100%;
        text-indent: -999px;
        background: url(https://h5static.kuwo.cn/www/kw-www/img/logo.7bf8751.png) no-repeat 18px /
          contain;
      }
    }
    .navs {
      width: 580px;
      display: flex;
      li {
        padding: 0 25px;
        a {
          height: 52px;
          font-size: 16px;
          line-height: 52px;
          display: inline-block;
        }
        &:hover {
          a {
            color: @fineColor;
          }
        }
      }
    }
    .login {
      position: absolute;
      height: 52px;
      line-height: 52px;
      right: 50px;
    }
  }
}
</style>
