<template>
  <div id="header" class="header">
    <!-- Header -->
    <header>
      <div class="header-container">
        <div class="header-top">
          <div class="container">
            <div class="row">
              <!-- Header Language -->
              <div class="col-xs-7 col-sm-6">
                <HeaderLanguage />
                <!-- End Header Language -->

                <!-- Header Currency -->
                <HeaderCurrency />
                <!-- End Header Currency -->

                <div class="welcome-msg hidden-xs">Modern Life - Modern Shopping</div>
              </div>
              <div class="col-xs-5 col-sm-6">
                <div class="top-cart-contain pull-right">
                  <!-- Top Cart -->
                  <HeaderTopCart />

                  <!-- Top Cart -->
                  <HeaderTopCart2 />
                  <!-- Top Cart -->
                </div>

                <!-- Search -->
                <HeaderTopSearch />

                <!-- Header Top Links -->
                <HeaderTopLinks />
                <!-- End Header Top Links -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- end header -->
  </div>
</template>

<script>
import HeaderLanguage from './HeaderLanguage'
import HeaderCurrency from "./HeaderCurrency";
import HeaderTopCart from "./HeaderTopCart";
import HeaderTopCart2 from "./HeaderTopCart2";
import HeaderTopSearch from "./HeaderTopSearch";
import HeaderTopLinks from "./HeaderTopLinks";

export default {
  components: {
    HeaderLanguage,
    HeaderCurrency,
    HeaderTopCart,
    HeaderTopCart2,
    HeaderTopSearch,
    HeaderTopLinks,
  },
};
</script>