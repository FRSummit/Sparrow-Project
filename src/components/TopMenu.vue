<template>
  <div class="top-menu" id="top-menu">
    <!-- DESKTOP VERSION -->
    <div class="top-bar-section-desktop">
      <!-- logo & menu -->
      <div class="logo-section">
        <div class="menu-icon-sec">&#9776;</div>
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
        <div class="trade-help-section">
          <span class="trade-sec">
            Trade with us
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
          <span>Sign In</span>
        </div>
        <div class="cart-section">
          <span>My Cart</span>
          <span>
            <i class="fas fa-shopping-cart"></i>
          </span>
          <span class="total-cart-item">0</span>
        </div>
      </div>
    </div>

    <!-- MOBILE VERSION -->
    <div class="top-bar-section-mobile">
      <!-- logo & menu -->
      <div class="logo-section">
        <div class="menu-icon-sec">&#9776;</div>
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
          <span>My Cart</span>
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





    <div class="topnav" id="myTopnav">
      <a class="active">Home</a>
      <a>News</a>
      <a>Contact</a>
      <a>About</a>
      <a class="icon" @click="myFunction()">
        <!-- <i class="fa fa-bars"></i> -->
        &#9776;
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  components: {},
  methods: {
    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
  },
};
</script>

<style scoped>
.topnav {
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
}
</style>
