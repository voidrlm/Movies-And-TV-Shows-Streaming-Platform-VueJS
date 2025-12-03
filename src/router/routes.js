const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/dashboard.vue"),
  },
];
export default routes;
