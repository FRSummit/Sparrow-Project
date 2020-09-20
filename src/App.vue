<template>
  <div id="app">
    <div id="page">
      <Header />
      <Navbar />
    </div>
    <MobileMenu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// import TopMenu from './components/TopMenu'
// import Sidebar from './components/Sidebar'

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MobileMenu from "./components/Navbar/MobileMenu";

export default {
  name: "Home",
  components: {
    // TopMenu,
    // Sidebar,
    Header,
    Navbar,
    Footer,
    MobileMenu,
  },
};
</script>

<style>
#app {
}
</style>
