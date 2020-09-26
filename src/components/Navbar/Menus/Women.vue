<template>
  <ul class="level0">
    <li class="level1 nav-6-1 parent item" v-for="(item, i) in women" :key="i">
      <a :href="item.url" class>
        <span>{{ item.name }}</span>
      </a>
      <ul class="level1" v-if="item.name==='Handbag'">
        <li class="level2 nav-6-1-1" v-for="(item_handbag, j) in handbag" :key="j">
          <a :href="item_handbag.url" class>
            <span>{{ item_handbag.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name==='Jackets'">
        <li class="level2 nav-6-1-1" v-for="(item_jackets, j) in jackets" :key="j">
          <a :href="item_jackets.url" class>
            <span>{{ item_jackets.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name==='Shoes'">
        <li class="level2 nav-6-1-1" v-for="(item_shoes, k) in shoes" :key="k">
          <a :href="item_shoes.url" class>
            <span>{{ item_shoes.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name==='Juellery'">
        <li class="level2 nav-6-1-1" v-for="(item_juellery, x) in juellery" :key="x">
          <a :href="item_juellery.url" class>
            <span>{{ item_juellery.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name==='Dress'">
        <li class="level2 nav-6-1-1" v-for="(item_dress, y) in dress" :key="y">
          <a :href="item_dress.url" class>
            <span>{{ item_dress.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name==='Swimwear'">
        <li class="level2 nav-6-1-1" v-for="(item_swimwear, z) in swimwear" :key="z">
          <a :href="item_swimwear.url" class>
            <span>{{ item_swimwear.name }}</span>
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
      women: [
        { name: "Handbag", url: "" },
        { name: "Jackets", url: "" },
        { name: "Shoes", url: "" },
        { name: "Juellery", url: "" },
        { name: "Dress", url: "" },
        { name: "Swimwear", url: "" },
      ],
      handbag: [
        { name: "Clutch Handbags", url: "" },
        { name: "Diaper Bags", url: "" },
        { name: "Bags", url: "" },
        { name: "Hobo handbags", url: "" },
      ],
      jackets: [
        { name: "Bathtime Goods", url: "" },
        { name: "Bedding", url: "" },
        { name: "Blankets", url: "" },
        { name: "Shower Curtains", url: "" },
      ],
      shoes: [
        { name: "Flat Shoes", url: "" },
        { name: "Flat Sandals", url: "" },
        { name: "Boots", url: "" },
        { name: "Heels", url: "" },
      ],
      juellery: [
        { name: "Bracelets", url: "" },
        { name: "Necklaces & Pendent", url: "" },
        { name: "Pendants", url: "" },
        { name: "Pins & Brooches", url: "" },
      ],
      dress: [
        { name: "Casual Dresses", url: "" },
        { name: "Evening", url: "" },
        { name: "Designer", url: "" },
        { name: "Party", url: "" },
      ],
      swimwear: [
        { name: "Swimsuits", url: "" },
        { name: "Beach Clothing", url: "" },
        { name: "Clothing", url: "" },
        { name: "Bikinis", url: "" },
      ],
    };
  },
};
</script>