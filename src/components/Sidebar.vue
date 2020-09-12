<template>
  <div class="sidebar" id="sidebar">
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
    <span style="font-size:30px;cursor:pointer" @click="openNav()">&#9776;</span>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  components: {},
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "200px";
    },

    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
};
</script>

<style scoped>

</style>
