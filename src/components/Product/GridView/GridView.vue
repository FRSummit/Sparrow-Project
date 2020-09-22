<template>
  <div>
    <!-- Breadcrumbs -->
    <Breadcrumbs />
    <!-- Breadcrumbs End -->
    <!-- Main Container -->
    <section class="main-container col2-left-layout bounceInUp animated">
      <div class="container">
        <div class="row">
          <div class="col-main col-sm-9 col-sm-push-3">
            <TopCollectionBanner />
            <Article />
          </div>
          <div class="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9">
              <SideMenuBar />
          </div>
        </div>
      </div>
    </section>
    <!-- Main Container End -->
  </div>
</template>

<script>
import Breadcrumbs from "./Breadcrumbs";
import TopCollectionBanner from "./TopCollectionBanner";
import Article from "./Article";
import SideMenuBar from "./SideMenuBar";

export default {
  components: {
    Breadcrumbs,
    TopCollectionBanner,
    Article,
    SideMenuBar,
  },
};
</script>