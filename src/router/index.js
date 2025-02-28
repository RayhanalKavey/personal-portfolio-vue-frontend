import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import AdminLayout from "@/components/layouts/AdminLayout.vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Default Layout",
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
        {
          path: "/projects",
          name: "projects",
          component: ProjectsView,
        },
        {
          path: "/contact",
          name: "contact",
          component: ContactView,
        },
      ],
    },
    {
      path: "/admin",
      name: "Admin Layout",
      component: AdminLayout,
      children: [],
    },
  ],
});

export default router;
