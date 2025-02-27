import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import AdminLayout from "@/components/layouts/AdminLayout.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Default Layout",
      // Preload
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "/about",
          name: "about",
          component: AboutView,
        },
      ],
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited. (On demand load)
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: "/admin",
      name: "Admin Layout",
      // Preload
      component: AdminLayout,
    },
  ],
});

export default router;
