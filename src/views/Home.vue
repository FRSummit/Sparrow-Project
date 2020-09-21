<template>
  <div class="home">
    <Slider />
    <PromoSection />
    <FeaturedSlider />
    <PromotionBanner />
    <PromoProducts />
  </div>
</template>

<script>
import Slider from '../components/Slider/Slider'
import PromoSection from '../components/Home/PromoSection'
import FeaturedSlider from '../components/Home/FeaturedSlider'
import PromotionBanner from '../components/Home/PromotionBanner'
import PromoProducts from '../components/Home/PromoProducts'

export default {
  name: 'Home',
  components: {
    Slider,
    PromoSection,
    FeaturedSlider,
    PromotionBanner,
    PromoProducts,
  },
  created() {
    console.log("Home")
  }
}
</script>
