<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
// import TopMenu from './components/TopMenu'
// import Sidebar from './components/Sidebar'

import Header from './components/Header/Header'

export default {
  name: 'Home',
  components: {
    // TopMenu,
    // Sidebar,
    Header
  }
}
</script>

<style>
#app {
}

</style>
