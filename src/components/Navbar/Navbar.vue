<template>
  <div id="navbar" class="navbar" style="background: #dedede;">
    <!-- Navbar -->
    <nav>
      <div class="container">
        <!-- Header Logo -->
        <div class="logo">
          <a title="Skynet" href="index.html">
            <img alt="Skynet" src="../../superb-template/images/logo.png" />
          </a>
        </div>
        <!-- End Header Logo -->

        <div class="mm-toggle-wrap">
          <div class="mm-toggle">
            <i class="fa fa-bars"></i>
            <span class="mm-label">Menu</span>
          </div>
        </div>

        <ul class="nav hidden-xs menu-item menu-item-left">
          <li class="level0 parent drop-menu active">
            <a @click="homeClick">
              <span>Home</span>
            </a>
          </li>
          <li class="level0 parent drop-menu">
            <a>
              <span>Pages</span>
            </a>
            <Pages />
          </li>
          <li class="mega-menu">
            <a href="grid.html" class="level-top">
              <span>Women</span>
            </a>
            <div style="left: 0px; display: none;" class="level0-wrapper dropdown-6col">
              <div class="container">
                <div class="level0-wrapper2">
                  <div class="col-1">
                    <div class="nav-block nav-block-center">
                      <WomenCategory />
                    </div>
                  </div>
                  <!--nav-block nav-block-center-->
                  <div class="col-2">
                    <div class="menu_image">
                      <a href="#" title>
                        <img src="../../superb-template/images/menu_image.png" alt="menu_image" />
                      </a>
                    </div>
                  </div>
                </div>
                <!--level0-wrapper2-->
              </div>
            </div>
          </li>
          <li class="mega-menu">
            <a href="grid.html" class="level-top">
              <span>Men</span>
            </a>
            <div style="left: 0px; display: none;" class="level0-wrapper dropdown-6col">
              <div class="container">
                <div class="level0-wrapper2">
                  <div class="nav-block nav-block-center">
                    <MenCategory />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul class="nav hidden-xs menu-item menu-item-right">
          <li class="mega-menu">
            <a href="grid.html" class="level-top">
              <span>Electronics</span>
            </a>
            <div style="left: 0px; display: none;" class="level0-wrapper dropdown-6col">
              <div class="container">
                <div class="level0-wrapper2">
                  <div class="nav-block nav-block-center">
                    <ElectronicsCategory />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="mega-menu">
            <a class="level-top" href="grid.html">
              <span>Furniture</span>
            </a>
          </li>
          <li class="level0 nav-8 level-top">
            <a href="grid.html" class="level-top">
              <span>Kids</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- end nav -->
  </div>
</template>

<script>
import Pages from './Menus/Pages'
import WomenCategory from './Menus/Women'
import MenCategory from './Menus/Men'
import ElectronicsCategory from './Menus/Electronics'
// import FurnitureCategory from './Menus/Furniture'
// import KidsCategory from './Menus/Kids'
// import FlowerCategory from './Menus/Flower'
// import StudentCategory from './Menus/Students'

export default {
  components: {
    Pages,
    WomenCategory,
    MenCategory,
    ElectronicsCategory,
    // FurnitureCategory,
    // KidsCategory,
    // FlowerCategory,
    // StudentCategory,
  },
  data() {
    return {
    }
  },
  methods: {
    homeClick() {
      window.location.pathname = '/';
    }
  }
}
</script>