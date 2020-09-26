<template>
  <div id="header" class="header">
    <header>
      <div class="header-container">
        <div class="header-top">
          <div class="container">
            <div class="row">
              <div class="col-xs-7 col-sm-6">
                <!-- <HeaderLanguage />
                <HeaderCurrency /> -->
                <div class="welcome-msg hidden-xs">Sparrow Shopping</div>
              </div>
              <div class="col-xs-5 col-sm-6">
                <div class="top-cart-contain pull-right">
                  <HeaderTopCart />
                  <HeaderTopCart2 />
                </div>
                <HeaderTopSearch />
                <HeaderTopLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
// import HeaderLanguage from './HeaderLanguage'
// import HeaderCurrency from "./HeaderCurrency";
import HeaderTopCart from "./HeaderTopCart";
import HeaderTopCart2 from "./HeaderTopCart2";
import HeaderTopSearch from "./HeaderTopSearch";
import HeaderTopLinks from "./HeaderTopLinks";

export default {
  components: {
    // HeaderLanguage,
    // HeaderCurrency,
    HeaderTopCart,
    HeaderTopCart2,
    HeaderTopSearch,
    HeaderTopLinks,
  },
};
</script>