<template>
  <div id="app">
    <div id="page">
      <Header />
      <Navbar />
      <Slider />
      <Footer />
    </div>
    <MobileMenu />
    <router-view />
  </div>
</template>

<script>
// import TopMenu from './components/TopMenu'
// import Sidebar from './components/Sidebar'

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import MobileMenu from "./components/Navbar/MobileMenu";

export default {
  name: "Home",
  components: {
    // TopMenu,
    // Sidebar,
    Header,
    Navbar,
    Slider,
    Footer,
    MobileMenu,
  },
};
</script>

<style>
#app {
}
</style>
