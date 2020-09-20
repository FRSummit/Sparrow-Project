<template>
  <div class="promo-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" v-for="(item, i) in promoBanner" :key="i">
          <img :alt="item.alt" :src="item.src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            promoBanner: [
                {src: "http://themesground.com/Superb/images/promo-banner1.jpg", alt: "Promotion banner 1"},
                {src: "http://themesground.com/Superb/images/promo-banner2.jpg", alt: "Promotion banner 2"},
                {src: "http://themesground.com/Superb/images/promo-banner3.jpg", alt: "Promotion banner 3"},
                // {src: "../../superb-template/images/promo-banner1.jpg", alt: "Promotion banner 1"},
                // {src: "../../superb-template/images/promo-banner2.jpg", alt: "Promotion banner 2"},
                // {src: "../../superb-template/images/promo-banner3.jpg", alt: "Promotion banner 3"},
            ]
        }
    }
}
</script>