<template>
  <div id="app">
    <div id="nav">
    <TopMenu />
    <!-- <Sidebar /> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'
// import Sidebar from './components/Sidebar'

export default {
  name: 'Home',
  components: {
    TopMenu,
    // Sidebar
  }
}
</script>

<style>
#app {
}

</style>
