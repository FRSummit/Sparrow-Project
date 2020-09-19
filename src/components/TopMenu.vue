<template>
  <div class="top-menu" id="top-menu">
    <!-- DESKTOP VERSION -->
    <div class="top-bar-section-desktop">
      <!-- logo & menu -->
      <div class="logo-section">
        <div class="menu-icon-sec">
          <a @click="openSideNav()">
            <i class="fas fa-bars"></i>
          </a>
          <!-- SIDE NAVIGATION -->
          <!-- <div id="side-navigation-menu" class="side-navigation-menu">
            <p>Categories</p>
            <a class="closebtn" @click="closeNav()">
              <i class="fas fa-arrow-left"></i>
            </a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>-->
        </div>
        <div class="logo-sec">
          <img src="../assets/images/logo.webp" alt="logo" />
        </div>
      </div>
      <!-- search -->
      <div class="search-section">
        <form class="search-form">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <span>
              <i class="fa fa-search"></i>
            </span>
          </button>
        </form>
      </div>
      <!-- cart & account login -->
      <div class="help-ac-cart-section">
        <div class="trade-help-sec">
          <span class="trade-sec">
            <i class="fa fa-globe"></i>
          </span>
          <span class="help-sec">
            <i class="fas fa-info-circle"></i>
          </span>
        </div>
        <div class="account-section">
          <span>
            <i class="fas fa-user"></i>
          </span>
          <span>Sign in</span>
        </div>
        <div class="cart-section">
          <span>
            <i class="fas fa-shopping-cart"></i>
          </span>
          <span class="total-cart-item">5</span>
        </div>
      </div>
    </div>

    <!-- MOBILE VERSION -->
    <div class="top-bar-section-mobile">
      <!-- logo & menu -->
      <div class="logo-section">
        <div class="menu-icon-sec">
          <a @click="openSideNav()">
            <i class="fas fa-bars"></i>
          </a>
          <!-- SIDE NAVIGATION -->
          <!-- <div id="side-navigation-menu" class="side-navigation-menu">
            <p>Categories</p>
            <a class="closebtn" @click="closeNav()">
              <i class="fas fa-arrow-left"></i>
            </a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>-->
        </div>
        <div class="logo-sec">
          <img src="../assets/images/logo.webp" alt="logo" />
        </div>
      </div>
      <!-- cart & account login -->
      <div class="help-ac-cart-section">
        <div class="account-section">
          <span>
            <i class="fas fa-user"></i>
          </span>
          <span>Sign In</span>
        </div>
        <div class="cart-section">
          <span>
            <i class="fas fa-shopping-cart"></i>
          </span>
          <span class="total-cart-item">0</span>
        </div>
      </div>
      <!-- search -->
      <div class="search-section">
        <form class="search-form">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <span>
              <i class="fa fa-search"></i>
            </span>
          </button>
        </form>
      </div>
    </div>

    <!-- SIDE NAVIGATION -->
    <div id="side-navigation-menu" class="side-navigation-menu">
      <p>Categories</p>
      <a class="closebtn" @click="closeNav()">
        <i class="fas fa-arrow-left"></i>
      </a>
      <div v-for="(item, i) in categories" :key="i">
        <a @click="categoryClick(item)">
          <!-- Electronics -->
          {{ item }}
          <span>
            <i class="fas fa-chevron-right"></i>
          </span>
        </a>
      </div>
    </div>

    <!-- SubCategory -->
    <div class="subcategories-section">
      <p>Sub categories</p>
      <a class="closebtn" @click="closeSubCategory()">
        <i class="fas fa-arrow-left"></i>
      </a>
      <p class="subCategoryTitle">{{ subCategoryTitle }}</p>
      <div v-for="(item, i) in subCategories" :key="i">
        <a @click="subCategoryClick(item)">
          <!-- Electronics -->
          {{ item }}
          <span>
            <i class="fas fa-chevron-right"></i>
          </span>
        </a>
      </div>
    </div>

    <!-- Tertiary Category -->
    <div class="tertiarycategories-section">
      <p>Tertiary categories</p>
      <a class="closebtn" @click="closeTertiaryCategory()">
        <i class="fas fa-arrow-left"></i>
      </a>
      <p class="tertiaryCategoryTitle">{{ tertiaryCategoryTitle }}</p>
      <div v-for="(item, i) in tertiaryCategories" :key="i">
        <a @click="tertiaryCategoryClick(item)">
          <!-- Electronics -->
          {{ item }}
          <span>
            <i class="fas fa-chevron-right"></i>
          </span>
        </a>
      </div>
    </div>

    <!-- <div class="topnav" id="myTopnav">
      <a class="active">Home</a>
      <a>News</a>
      <a>Contact</a>
      <a>About</a>
      <a class="icon" @click="myFunction()">
        &#9776;
      </a>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  components: {},
  data() {
    return {
      categories: [
        "Electronics",
        "Accessories",
        "Men's Fashion",
        "Women's Fashion",
        "Ornaments",
        "Gift Ideas",
        "Baking Items",
        "Flower",
      ],
      //Sub-Category
      subCategoryTitle: null,
      subCategories: [],
      subElectronics: ["Electrical", "Lighting"],
      subAccessories: ["Mobile", "Computer", "Audio", "Watch"],
      subMenFashion: ["Clothing", "Foot Wear", "Accessories"],
      subWomenFashion: ["Clothing", "Foot Wear", "Accessories"],
      subOrnaments: [],
      subGiftIdeas: ["Birthday Gifts", "Aniversary Gifts", "Valentine Gifts"],
      subBakingItems: [],
      subFlower: [],
      //Tertiary-Category
      tertiaryCategoryTitle: null,
      tertiaryCategories: [],
      tertiaryElectrical: [
        "Blender",
        "Grinder",
        "Juicer",
        "Treamer & Shaver",
        "Hair Dryer",
      ],
      tertiaryLighting: ["Table Lamp", "Energy Light"],
      ourRange: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618",
            },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: "-68.6102",
              lng: "-47.0653",
            },
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
          },
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
              lat: "29.4572",
              lng: "-164.2990",
            },
          },
          phone: "493-170-9623 x156",
          website: "kale.biz",
          company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services",
          },
        },
      ],
      ourRange2: [
        {
          id: 1,
          name: "Category",
          product: "Electronics",
          subCategory: [
            {
              name: "Sub Category",
              product: "Electrical",
              tertiaryCategory: [
                {
                  product: "Blender",
                },
                {
                  product: "Grinder",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "Category",
          product: "Accessories",
          subCategory: [
            {
              name: "Sub Category",
              product: "Mobile",
              tertiaryCategory: [
                {
                  product: "Phone Cover and Case",
                },
                {
                  product: "Phone Charger",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    // myFunction() {
    //   var x = document.getElementById("myTopnav");
    //   if (x.className === "topnav") {
    //     x.className += " responsive";
    //   } else {
    //     x.className = "topnav";
    //   }
    // },
    openSideNav() {
      if (
        document.getElementById("side-navigation-menu").style.width !== "200px"
      ) {
        document.getElementById("side-navigation-menu").style.width = "200px";
      } else {
        document.getElementById("side-navigation-menu").style.width = "0";
      }
    },
    closeNav() {
      document.getElementById("side-navigation-menu").style.width = "0";
    },
    categoryClick(categoryName) {
      this.subCategoryTitle = categoryName;
      //   console.log(this.ourRange)
        console.log(this.ourRange2)
      //   for (let i = 0; i < this.categories.length; i++) {
      for (let i = 0; i < 2; i++) {
        // console.log(this.ourRange[i].id)
        // console.log(this.ourRange[i].address.geo.lat);
        // if (categoryName === this.categories[i]) console.log(i);
        // else console.log("not found");
        // console.log(this.ourRange2)
      }
      if (categoryName === "Electronics") {
        this.subCategories = this.subElectronics;
      }
      if (categoryName === "Accessories") {
        this.subCategories = this.subAccessories;
      }
      if (categoryName === "Men's Fashion") {
        this.subCategories = this.subMenFashion;
      }
      if (categoryName === "Women's Fashion") {
        this.subCategories = this.subWomenFashion;
      }
      if (categoryName === "Ornaments") {
        this.subCategories = this.subOrnaments;
      }
      if (categoryName === "Gift Ideas") {
        this.subCategories = this.subGiftIdeas;
      }
      if (categoryName === "Baking Items") {
        this.subCategories = this.subBakingItems;
      }
      if (categoryName === "Flower") {
        this.subCategories = this.subFlower;
      }
    },
    subCategoryClick(subCategoryName) {
      this.tertiaryCategoryTitle = subCategoryName;
      if (subCategoryName === "Electrical") {
        this.tertiaryCategories = this.tertiaryElectrical;
      }
    },
  },
};
</script>

<style scoped>
/* .topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4caf50;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
} */
</style>
