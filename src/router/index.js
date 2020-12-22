import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ItemsIndex from "../views/ItemsIndex.vue"
import ItemsNew from "../views/ItemsNew.vue";
import ItemsShow from "../views/ItemsShow.vue";
import ItemsEdit from "../views/ItemsEdit.vue";


Vue.use(VueRouter);



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/login", name: "Login", component: Login },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/items", name: "items-index", component: ItemsIndex },
  { path: "/items/new", name: "items-new", component: ItemsNew },
  { path: "/items/:id", name: "items-show", component: ItemsShow },
  { path: "/items/:id/edit", name: "items-edit", component: ItemsEdit },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
