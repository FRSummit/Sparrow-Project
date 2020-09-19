import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.config.productionTip = false

// global.jQuery = require('jquery');
// var $ = global.jQuery;
// window.$ = $;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
