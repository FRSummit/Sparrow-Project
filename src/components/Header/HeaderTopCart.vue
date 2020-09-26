<template>
  <div class="mini-cart">
    <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle">
      <a>
        My Cart
        <!-- <span class="cart_count">2</span> -->
      </a>
    </div>
    <div>
      <div class="top-cart-content" style="display: none;">
        <div class="actions">
          <button class="btn-checkout" title="Checkout" type="button" @click="checkoutBtnClick">
            <span>Checkout</span>
          </button>
          <a @click="viewCartCLick" class="view-cart">
            <span>View Cart</span>
          </a>
        </div>
        <ul class="mini-products-list" id="cart-sidebar">
          <li class="item first" v-for="(item, i) in miniProductList" :key="i">
            <div class="item-inner">
              <a
                class="product-image"
                title="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White"
                href="#l"
              >
                <img :alt="item.alt" :src="item.src"
                />
              </a>
              <div class="product-details">
                <!-- <div class="access">
                  <a class="btn-remove1" title="Remove This Item" href="#">Remove</a>
                  <a class="btn-edit" title="Edit item" href="#">
                    <i class="icon-pencil"></i>
                    <span class="hidden">Edit item</span>
                  </a>
                </div> -->
                <p class="product-name">
                  <a href="#">{{ item.name }}</a>
                </p>
                <strong>{{ item.totalItem }}</strong> x
                <span class="price">BDT {{ item.price }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      miniProductList: [
        {
          src: "http://themesground.com/Superb/products-images/p1.jpg",
          alt: "img 1",
          totalItem: "5",
          price: "2000",
          name: "Item 1",
          productUrl: "#"
        },
        {
          src: "http://themesground.com/Superb/products-images/p1.jpg",
          alt: "img 1",
          totalItem: "5",
          price: "2000",
          name: "Item 2",
          productUrl: "#"
        },
        {
          src: "http://themesground.com/Superb/products-images/p1.jpg",
          alt: "img 1",
          totalItem: "5",
          price: "2000",
          name: "Item 3",
          productUrl: "#"
        }
      ]
    }
  },
  created() {
  },
  methods: {
    checkoutBtnClick() {
      window.location.pathname = "/checkout"
    },
    viewCartCLick() {
      window.location.pathname = "/shopping-cart"
    }
  }
}
</script>