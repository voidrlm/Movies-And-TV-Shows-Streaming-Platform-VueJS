const routes = [
  {
    path: "/",
    name: "Dashboard",
    meta: { authorized: false },
    component: () => import("../views/dashboard.vue"),
  },
];

export default routes;
