<template>
      <!-- Featured Slider -->
  <section class="featured-pro container wow bounceInUp animated">
    <div class="slider-items-products container">
      <div class="new_title center">
        <h2>Sparrow Products</h2>
        <div class="starSeparator"></div>
      </div>
      <div id="featured-slider" class="product-flexslider hidden-buttons">
        <div class="slider-items slider-width-col4 products-grid">
          <div class="item" v-for="(item, i) in featuredSliderProduct" :key="i">
            <div class="item-inner">
              <div class="item-img">
                <div class="item-img-info"> <a class="product-image" :title="item.anchore_title" :href="item.anchore_href"> <img :alt="item.img_alt" :src="item.src"> </a>
                  <div class="new-label new-top-left" :class="item.new_or_sale_label_is_present">{{ item.new_or_sale_label }}</div>
                  <div class="box-timer" :class="item.offer_timer">
                      <div class="countbox_2 timer-grid"></div>
                    </div>
                  <div class="actions">
                    <div class="quick-view-btn"><a :href="item.quick_view_url" data-toggle="tooltip" data-placement="right" title="" data-original-title="Quick View"> <span>Quick View</span></a></div>
                    <div class="link-wishlist"><a :href="item.wishlist_url" data-toggle="tooltip" data-placement="right" title="" data-original-title="Wishlist"><span>Add to Wishlist</span></a></div>
                    <div class="link-compare"><a :href="item.compare_url" data-toggle="tooltip" data-placement="right" title="" data-original-title="Compare"><span>Add to Compare</span></a></div>
                    <p :class="item.availability" data-original-title="Out of Stock" title="" data-placement="right" data-toggle="tooltip" class="availability out-of-stock"><span class="ava-out-of-stock">Out of Stock</span></p>
                    <div class="add_cart" :class="item.add_to_cart">
                      <button class="button btn-cart" type="button" data-toggle="tooltip" data-placement="right" title="" data-original-title="Add to Cart"><span>Add to Cart</span></button>
                    </div>
                  </div>
                  <div class="rating">
                    <div class="ratings">
                      <div class="rating-box">
                        <div style="width:80%" class="rating"></div>
                      </div>
                      <p class="rating-links"> <a :href="item.rating_url">{{ item.rating_reviews }}</a> <span class="separator">|</span> <a :href="item.add_review_url">Add Review</a> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-info">
                <div class="info-inner">
                  <div class="item-title"> <a :title="item.product_title">{{ item.product_title }}</a> </div>
                  <div class="item-content">
                    <div class="item-price">
                      <div class="price-box"> <span class="regular-price"> <span class="price">BDT {{ item.product_price }}</span> </span> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  <!-- End Featured Slider -->
</template>

<script>
export default {
    data() {
        return {
            featuredSliderProduct: [
                {
                    anchore_title: "Retis lapen casen",
                    anchore_href: "#",
                    img_alt: "Retis lapen casen",
                    src: "http://themesground.com/Superb/products-images/p10.jpg",
                    new_or_sale_label_is_present: "",
                    new_or_sale_label: "New",
                    offer_timer: "",
                    quick_view_url: "#",
                    wishlist_url: "",
                    compare_url: "#",
                    availability: "",
                    add_to_cart: "hidden",
                    rating_url: "#",
                    rating_reviews: "1 Review(s)",
                    add_review_url: "#",
                    product_title: "Retis lapen casen",
                    product_price: "125.00"
                },
                {
                    anchore_title: "Retis lapen casen",
                    anchore_href: "#",
                    img_alt: "Retis lapen casen",
                    src: "http://themesground.com/Superb/products-images/p11.jpg",
                    new_or_sale_label_is_present: "hidden",
                    new_or_sale_label: "",
                    offer_timer: "hidden",
                    quick_view_url: "",
                    wishlist_url: "",
                    compare_url: "",
                    availability: "hidden",
                    add_to_cart: "",
                    rating_url: "",
                    rating_reviews: "1 Review(s)",
                    add_review_url: "#",
                    product_title: "Retis lapen casen",
                    product_price: "125.00"
                },
                {
                    anchore_title: "Retis lapen casen",
                    anchore_href: "#",
                    img_alt: "Retis lapen casen",
                    src: "http://themesground.com/Superb/products-images/p12.jpg",
                    new_or_sale_label_is_present: "hidden",
                    new_or_sale_label: "Sale",
                    offer_timer: "hidden",
                    quick_view_url: "",
                    wishlist_url: "",
                    compare_url: "",
                    availability: "hidden",
                    add_to_cart: "",
                    rating_url: "",
                    rating_reviews: "1 Review(s)",
                    add_review_url: "#",
                    product_title: "Retis lapen casen",
                    product_price: "125.00"
                },
                {
                    anchore_title: "Retis lapen casen",
                    anchore_href: "#",
                    img_alt: "Retis lapen casen",
                    src: "http://themesground.com/Superb/products-images/p13.jpg",
                    new_or_sale_label_is_present: "hidden",
                    new_or_sale_label: "",
                    offer_timer: "hidden",
                    quick_view_url: "",
                    wishlist_url: "",
                    compare_url: "",
                    availability: "hidden",
                    add_to_cart: "",
                    rating_url: "",
                    rating_reviews: "1 Review(s)",
                    add_review_url: "#",
                    product_title: "Retis lapen casen",
                    product_price: "125.00"
                },
                {
                    anchore_title: "Retis lapen casen",
                    anchore_href: "#",
                    img_alt: "Retis lapen casen",
                    src: "http://themesground.com/Superb/products-images/p14.jpg",
                    new_or_sale_label_is_present: "hidden",
                    new_or_sale_label: "",
                    offer_timer: "hidden",
                    quick_view_url: "",
                    wishlist_url: "",
                    compare_url: "",
                    availability: "hidden",
                    add_to_cart: "",
                    rating_url: "",
                    rating_reviews: "1 Review(s)",
                    add_review_url: "",
                    product_title: "Retis lapen casen",
                    product_price: "125.00"
                },
                {
                    anchore_title: "Retis lapen casen",
                    anchore_href: "#",
                    img_alt: "Retis lapen casen",
                    src: "http://themesground.com/Superb/products-images/p16.jpg",
                    new_or_sale_label_is_present: "hidden",
                    new_or_sale_label: "",
                    offer_timer: "hidden",
                    quick_view_url: "",
                    wishlist_url: "",
                    compare_url: "",
                    availability: "hidden",
                    add_to_cart: "",
                    rating_url: "",
                    rating_reviews: "1 Review(s)",
                    add_review_url: "",
                    product_title: "Retis lapen casen",
                    product_price: "125.00"
                },
                {
                    anchore_title: "Retis lapen casen",
                    anchore_href: "#",
                    img_alt: "Retis lapen casen",
                    src: "http://themesground.com/Superb/products-images/p10.jpg",
                    new_or_sale_label_is_present: "hidden",
                    new_or_sale_label: "",
                    offer_timer: "hidden",
                    quick_view_url: "",
                    wishlist_url: "",
                    compare_url: "",
                    availability: "hidden",
                    add_to_cart: "",
                    rating_url: "",
                    rating_reviews: "1 Review(s)",
                    add_review_url: "",
                    product_title: "Retis lapen casen",
                    product_price: "125.00"
                },
            ]
        }
    }
}
</script>