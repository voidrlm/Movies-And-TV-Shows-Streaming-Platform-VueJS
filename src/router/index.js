import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

router.afterEach((to) => {
  document.title = to.name !== null ? to.name : "Vue And Vuetify";
});

export default router;
