<template>
  <section class="content-wrapper bounceInUp animated">
    <div class="container">
      <div class="std">
        <div class="page-not-found">
          <h1>404</h1>
          <h3>Oops! The Page you requested was not found!</h3>
          <div>
            <a @click="backToHome" class="btn-home">
              <span>Back To Home</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    methods: {
        backToHome() {
            window.location.pathname = "/"
        }
    }
}
</script>