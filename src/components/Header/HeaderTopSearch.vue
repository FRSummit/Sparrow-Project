<template>
  <div class="top-search">
    <div class="block-icon pull-right">
      <a
        data-target=".bs-example-modal-lg"
        data-toggle="modal"
        class="search-focus dropdown-toggle links"
      >
        <i class="fa fa-search"></i>
      </a>
      <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button aria-label="Close" data-dismiss="modal" class="close" type="button">
                <img src="../../superb-template/images/interstitial-close.png" alt="close" />
              </button>
            </div>
            <div class="modal-body">
              <form class="navbar-form">
                <div id="search">
                  <div class="input-group">
                    <input name="search" placeholder="Search" class="form-control" type="text" />
                    <button @click="searchBtnClick" type="button" class="btn-search">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    searchBtnClick() {
      alert('Searching...');
    }
  }
}
</script>