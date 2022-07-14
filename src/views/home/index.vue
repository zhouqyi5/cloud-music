<template>
  <div class="home-carousel-music container">
    <HomeCarousel />
    <div>
      <MusicPlayList />
    </div>
  </div>
  <HomeSongList />
  <div class="home-music-singer-list container">
    <HomePlayList />
    <div>
      <HomeSingerList />
    </div>
  </div>
</template>
<script>
import HomeCarousel from './components/home-carousel'
import MusicPlayList from './components/music-play-list'
import HomeSongList from './components/home-song-list'
import HomeSingerList from './components/home-singer-list'
import HomePlayList from './components/home-play-list'
import { homeDate } from '@/api/home'
export default {
  name: 'Home',
  components: { HomeCarousel, MusicPlayList, HomeSongList, HomeSingerList, HomePlayList },
  setup() {
    homeDate().then((data) => {
      console.log(data)
    })
    return {}
  }
}
</script>
<style scoped lang="less">
.home-carousel-music {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}
.home-music-singer-list {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
</style>
