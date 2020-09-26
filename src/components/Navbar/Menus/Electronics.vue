<template>
  <ul class="level0">
    <li class="level1 nav-6-1 parent item" v-for="(item, i) in electronicsCatelog" :key="i">
      <a :href="item.url" class>
        <span>{{ item.name }}</span>
      </a>
      <ul class="level1" v-if="item.name === 'Mobiles'">
        <li class="level2 nav-6-1-1" v-for="(item_mobiles, j) in mobiles" :key="j">
          <a :href="item_mobiles.url">
            <span>{{ item_mobiles.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name === 'Accesories'">
        <li class="level2 nav-6-1-1" v-for="(item_accesories, j) in accesories" :key="j">
          <a :href="item_accesories.url">
            <span>{{ item_accesories.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name === 'Cameras'">
        <li class="level2 nav-6-1-1" v-for="(item_cameras, j) in cameras" :key="j">
          <a :href="item_cameras.url">
            <span>{{ item_cameras.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name === 'Audio & Video'">
        <li class="level2 nav-6-1-1" v-for="(item_audioAndVideo, j) in audioAndVideo" :key="j">
          <a :href="item_audioAndVideo.url">
            <span>{{ item_audioAndVideo.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name === 'Computer'">
        <li class="level2 nav-6-1-1" v-for="(item_computer, j) in computer" :key="j">
          <a :href="item_computer.url">
            <span>{{ item_computer.name }}</span>
          </a>
        </li>
      </ul>
      <ul class="level1" v-if="item.name === 'Aappliances'">
        <li class="level2 nav-6-1-1" v-for="(item_aappliances, j) in aappliances" :key="j">
          <a :href="item_aappliances.url">
            <span>{{ item_aappliances.name }}</span>
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
      electronicsCatelog: [
        { name: "Mobiles", url: "" },
        { name: "Accesories", url: "" },
        { name: "Cameras", url: "" },
        { name: "Audio & Video", url: "" },
        { name: "Computer", url: "" },
        { name: "Aappliances", url: "" },
      ],
      mobiles: [
        { name: "Samsung", url: "" },
        { name: "Nokia", url: "" },
        { name: "IPhone", url: "" },
        { name: "Sony", url: "" },
      ],
      accesories: [
        { name: "Mobile Memory Cards", url: "" },
        { name: "Cases & Covers", url: "" },
        { name: "Mobile Headphones", url: "" },
        { name: "Bluetooth Headsets", url: "" },
      ],
      cameras: [
        { name: "Camcorders", url: "" },
        { name: "Point & Shoot", url: "" },
        { name: "Digital SLR", url: "" },
        { name: "Camera Accesories", url: "" },
      ],
      audioAndVideo: [
        { name: "MP3 Players", url: "" },
        { name: "IPods", url: "" },
        { name: "Speakers", url: "" },
        { name: "Video Players", url: "" },
      ],
      computer: [
        { name: "External Hard Disk", url: "" },
        { name: "Pendrives", url: "" },
        { name: "Headphones", url: "" },
        { name: "PC Components", url: "" },
      ],
      aappliances: [
        { name: "Vaccum Cleaners", url: "" },
        { name: "Indoor Lighting", url: "" },
        { name: "Kitchen Tools", url: "" },
        { name: "Water Purifier", url: "" },
      ],
    };
  },
};
</script>
