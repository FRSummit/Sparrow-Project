<template>
  <div id="app">
    <div id="page">
      <Header />
      <Navbar />
    <router-view />
    </div>
    <MobileMenu />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MobileMenu from "./components/Navbar/MobileMenu";

export default {
  name: "Home",
  components: {
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
