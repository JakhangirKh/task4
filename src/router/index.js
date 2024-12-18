import { createRouter, createWebHistory } from "vue-router";

import PHome from "../pages/PHome.vue";
import PBlogList from "../pages/PBlogList.vue";
import PBlogDetail from "../pages/PBlogDetail.vue";

const routes = [
  { path: "/", name: "Home", component: PHome },
  { path: "/blog-list", name: "BlogList", component: PBlogList },
  {
    path: "/blog-detail/:id",
    name: "BlogDetail",
    component: PBlogDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
