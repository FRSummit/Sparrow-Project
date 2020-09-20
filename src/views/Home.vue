<template>
  <div class="home">
    <Slider />
    <PromoSection />
    <FeaturedSlider />
  </div>
</template>

<script>
import Slider from '../components/Slider/Slider'
import PromoSection from '../components/Home/PromoSection'
import FeaturedSlider from '../components/Home/FeaturedSlider'

export default {
  name: 'Home',
  components: {
    Slider,
    PromoSection,
    FeaturedSlider,
  },
  created() {
    console.log("Home")
  }
}
</script>
