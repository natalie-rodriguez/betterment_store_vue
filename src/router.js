import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import NewProduct from "./views/ProductsNew.vue";
import ShowProduct from "./views/ProductsShow.vue";
import ProductsEdit from "./views/ProductsEdit.vue";
import Signup from "./views/signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import CartedProducts from "./views/CartedProducts.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/products/new",
      name: "products-new",
      component: NewProduct
    },
    {
      path: "/products/:id",
      name: "products-show",
      component: ShowProduct
    },
    {
      path: "/products/:id/edit",
      name: "products-edit",
      component: ProductsEdit
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/carted_products",
      name: "carted_products",
      component: CartedProducts
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
