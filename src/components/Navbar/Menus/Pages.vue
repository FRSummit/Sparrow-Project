<template>
  <ul class="level1" style="display: none;">
    <li class="level1 first" v-for="(item, i) in  pages" :key="i">
      <a :href="item.url">
        <span>{{ item.name }}</span>
      </a>
      <ul
        class="level2 right-sub"
        v-if="item.name === 'Checkout'"
        style="top: 0px; left: 165px; display: none;"
      >
        <li class="level2 nav-2-1-1 first" v-for="(item_checkout, j) in  checkout" :key="j">
          <a :href="item_checkout.url">
            <span>{{ item_checkout.name }}</span>
          </a>
        </li>
      </ul>
      <ul
        class="level2 right-sub"
        v-if="item.name === 'Dashboard'"
        style="top: 0px; left: 165px; display: none;"
      >
        <li class="level2 nav-2-1-1 first" v-for="(item_dashboard, k) in  acInfo" :key="k">
          <a :href="item_dashboard.url">
            <span>{{ item_dashboard.name }}</span>
          </a>
        </li>
      </ul>
      <ul
        class="level2 right-sub"
        v-if="item.name === 'Blog'"
        style="top: 0px; left: 165px; display: none;"
      >
        <li class="level2 nav-2-1-1 first" v-for="(item_blog, m) in  blog" :key="m">
          <a :href="item_blog.url">
            <span>{{ item_blog.name }}</span>
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { name: "Grid", url: "" },
        { name: "List", url: "" },
        { name: "Product Detail", url: "" },
        { name: "Shopping Cart", url: "" },
        { name: "Checkout", url: "" },
        { name: "Wishlist", url: "" },
        { name: "Dashboard", url: "" },
        { name: "Multiple Addresses", url: "" },
        { name: "About us", url: "" },
        { name: "FAQ", url: "" },
        { name: "Login", url: "" },
        { name: "Forgot Password", url: "" },
        { name: "Quick view", url: "" },
        { name: "Blog", url: "" },
        { name: "Contact us", url: "" },
        { name: "404 Error Page", url: "" },
      ],
      checkout: [
        { name: "Checkout Method", url: "" },
        { name: "Checkout Billing Info", url: "" },
      ],
      acInfo: [
        { name: "Account Information", url: "" },
        { name: "Address Book", url: "" },
        { name: "Contact Information", url: "" },
      ],
      blog: [{ name: "Blog Detail", url: "" }],
    };
  },
};
</script>