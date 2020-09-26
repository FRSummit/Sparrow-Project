import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/product-details',
    name: 'Product Details',
    component: () => import('../views/Product/ProductDetails.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
  },
  {
    path: '/blog-details',
    name: 'Blog Details',
    component: () => import('../views/BlogDetails.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/contact-information',
    name: 'Contact Information',
    component: () => import('../views/ContactInformation.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/error404',
    name: 'Error 404',
    component: () => import('../views/Error.vue'),
  },
  {
    path: '/account-information',
    name: 'Account Information',
    component: () => import('../views/AccountInformation.vue'),
  },
  {
    path: '/address-book',
    name: 'Address Book',
    component: () => import('../views/AddressBook.vue'),
  },
  {
    path: '/checkout',//done adding url
    name: 'Checkout',
    component: () => import('../views/Checkout.vue'),
  },
  {
    path: '/checkout-billing-info',
    name: 'Checkout Billing Info',
    component: () => import('../views/CheckoutBillingInfo.vue'),
  },
  {
    path: '/checkout-method',
    name: 'Checkout Method',
    component: () => import('../views/CheckoutMethod.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue'),
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword.vue'),
  },
  {
    path: '/product-grid-view',
    name: 'Product Grid View',
    component: () => import('../views/Product/GridView.vue'),
  },
  {
    path: '/product-list-view',
    name: 'Product List View',
    component: () => import('../views/Product/ListView.vue'),
  },
  {
    path: '/shopping-cart',//done adding url
    name: 'Shopping Cart',
    component: () => import('../views/ShoppingCart/ShoppingCart.vue'),
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import('../views/WishList/WishList.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
