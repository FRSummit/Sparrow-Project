<template>
  <div class="home">
    <Slider />
    <PromoSection />
    <FeaturedSlider />
    <PromotionBanner />
    <PromoProducts />
    <LatestBlog />
    <CompanyLogo />
    <FeatureBox />
  </div>
</template>

<script>
import Slider from '../components/Slider/Slider'
import PromoSection from '../components/Home/PromoSection'
import FeaturedSlider from '../components/Home/FeaturedSlider'
import PromotionBanner from '../components/Home/PromotionBanner'
import PromoProducts from '../components/Home/PromoProducts'
import LatestBlog from '../components/Home/LatestBlog'
import CompanyLogo from '../components/Home/CompanyLogo'
import FeatureBox from '../components/Home/FeatureBox'

export default {
  name: 'Home',
  components: {
    Slider,
    PromoSection,
    FeaturedSlider,
    PromotionBanner,
    PromoProducts,
    LatestBlog,
    CompanyLogo,
    FeatureBox,
  },
  created() {
    console.log("Home")
  }
}
</script>
