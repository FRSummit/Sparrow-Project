<template>
  <ul class="level0">
    <li class="level1 nav-6-1 parent item" v-for="(item, i) in menCatelog" :key="i">
      <a :href="item.url" class>
        <span>{{ item.name }}</span>
      </a>
      <ul class="level1" v-if="item.name === 'Shirt'">
        <li class="level2 nav-6-1-1" v-for="(item_shirt, j) in shirt" :key="j">
          <a :href="item_shirt.url">
            <span>{{ item_shirt.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name === 'Jackets'">
        <li class="level2 nav-6-1-1" v-for="(item_jackets, j) in jackets" :key="j">
          <a :href="item_jackets.url">
            <span>{{ item_jackets.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name === 'Shoes'">
        <li class="level2 nav-6-1-1" v-for="(item_shoes, j) in shoes" :key="j">
          <a :href="item_shoes.url">
            <span>{{ item_shoes.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name === 'Blazer'">
        <li class="level2 nav-6-1-1" v-for="(item_blazer, j) in blazer" :key="j">
          <a :href="item_blazer.url">
            <span>{{ item_blazer.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name === 'Wallet'">
        <li class="level2 nav-6-1-1" v-for="(item_wallet, j) in wallet" :key="j">
          <a :href="item_wallet.url">
            <span>{{ item_wallet.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name === 'Watch'">
        <li class="level2 nav-6-1-1" v-for="(item_watch, j) in watch" :key="j">
          <a :href="item_watch.url">
            <span>{{ item_watch.name }}</span>
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
      menCatelog: [
        { name: "Shirt", url: "" },
        { name: "Jackets", url: "" },
        { name: "Shoes", url: "" },
        { name: "Blazer", url: "" },
        { name: "Wallet", url: "" },
        { name: "Watch", url: "" },
      ],
      shirt: [
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
      blazer: [
        { name: "Bracelets", url: "" },
        { name: "Necklaces & Pendent", url: "" },
        { name: "Pendants", url: "" },
        { name: "Pins & Brooches", url: "" },
      ],
      wallet: [
        { name: "Casual Dresses", url: "" },
        { name: "Evening", url: "" },
        { name: "Designer", url: "" },
        { name: "Party", url: "" },
      ],
      watch: [
        { name: "Swimsuits", url: "" },
        { name: "Beach Clothing", url: "" },
        { name: "Clothing", url: "" },
        { name: "Bikinis", url: "" },
      ],
    };
  },
};
</script>








<!--
Names of Men’s Clothes
------------------------
Sweater
Shirt
Jeans
Gloves
Cap
Suit
Hawaiian shirt
Singlet
Business shoes
Flip flops
Shorts
Cardigan
Jacket
Sport shoes
Bow tie
Sleeveless shirt
Vest
Long-sleeve top
Polo shirt
Jumper
Trench coat
Bathrobe
Cargo pants
Swimsuit
Blazer
T-shirt
Belt
Underpants
Waistcoat
Socks
Tie
Pullover
Umbrella
Scarf
Sunglasses
Glasses
Boots
Wallet
Handbag
Watch
-->