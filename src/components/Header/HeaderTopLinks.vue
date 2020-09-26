<template>
  <div class="toplinks">
    <div class="links">
      <div class="myaccount">
        <a title="My Account" @click="myACBtnClick">
          <span class="hidden-xs">My Account</span>
        </a>
      </div>
      <div class="check">
        <a title="Checkout" @click="checkoutBtnCLick">
          <span class="hidden-xs">Checkout</span>
        </a>
      </div>
      <div class="demo">
        <a title="Blog" @click="blogBtnClick">
          <span class="hidden-xs">Blog</span>
        </a>
      </div>
      <div class="login">
        <a @click="loginBtnClick">
          <span class="hidden-xs">Log In</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    myACBtnClick() {
      window.location.pathname = '/account-information';
    },
    checkoutBtnCLick() {
      window.location.pathname = '/checkout';
    },
    blogBtnClick() {
      window.location.pathname = '/blog';
    },
    loginBtnClick() {
      window.location.pathname = '/login';
    }
  }
}
</script>