<template>
  <div id="app">
    <Header/>
    <Navbar />
    <MobileMenu />
    <Slider />
    <Footer />
    <router-view/>
  </div>
</template>

<script>
// import TopMenu from './components/TopMenu'
// import Sidebar from './components/Sidebar'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import MobileMenu from './components/Navbar/MobileMenu'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'

export default {
  name: 'Home',
  components: {
    // TopMenu,
    // Sidebar,
    Header,
    Navbar,
    MobileMenu,
    Slider,
    Footer,
  }
}
</script>

<style>
#app {
}

</style>
