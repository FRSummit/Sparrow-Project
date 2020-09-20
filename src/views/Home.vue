<template>
  <div class="home">
    <Slider />
    This is home
  </div>
</template>

<script>
import Slider from '../components/Slider/Slider'

export default {
  name: 'Home',
  components: {
    Slider,
  },
  created() {
    console.log("Home")
  }
}
</script>
