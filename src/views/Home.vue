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
    // this.addingHomeScript();
    // this.addingHomeCustomScript();
  },
  mounted() {
  },
  methods: {
      addingHomeScript() {
      //   Script
        let script1 = document.createElement('script');
        script1.setAttribute('type', 'text/javascript');
        script1.setAttribute('src', '../superb-template/js/jquery.min.js');
        document.body.appendChild(script1);

        let script2 = document.createElement('script');
        script2.setAttribute('type', 'text/javascript');
        script2.setAttribute('src', '../superb-template/js/bootstrap.min.js');
        document.body.appendChild(script2);

        let script3 = document.createElement('script');
        script3.setAttribute('type', 'text/javascript');
        script3.setAttribute('src', '../superb-template/js/common.js');
        document.body.appendChild(script3);

        let script4 = document.createElement('script');
        script4.setAttribute('type', 'text/javascript');
        script4.setAttribute('src', '../superb-template/js/countdown.js');
        document.body.appendChild(script4);

        let script5 = document.createElement('script');
        script5.setAttribute('type', 'text/javascript');
        script5.setAttribute('src', '../superb-template/js/owl.carousel.min.js');
        document.body.appendChild(script5);
  
        let script6 = document.createElement('script');
        script6.setAttribute('type', 'text/javascript');
        script6.setAttribute('src', '../superb-template/js/jquery.mobile-menu.min.js');
        document.body.appendChild(script6);

        let script7 = document.createElement('script');
        script7.setAttribute('type', 'text/javascript');
        script7.setAttribute('src', '../superb-template/js/revolution-slider.js');
        document.body.appendChild(script7);
  
        let script8 = document.createElement('script');
        script8.setAttribute('type', 'text/javascript');
        script8.setAttribute('src', '../superb-template/js/revolution.extension.js');
        document.body.appendChild(script8);
      },

      addingHomeCustomScript() {
        let customScript1 = document.createElement('script');
        customScript1.setAttribute('src', '../views_custom_js/HomeScript1.js');
        document.body.appendChild(customScript1);
        
        let customScript2 = document.createElement('script');
        customScript2.setAttribute('src', '../views_custom_js/HomeScript2.js');
        document.body.appendChild(customScript2);
      }
  }
}
</script>
