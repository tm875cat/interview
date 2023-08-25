import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import topic1 from "../views/topic1.vue";
import topic2 from "../views/topic2.vue";
import topic3 from "../views/topic3.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/topic1",
    component: topic1,
    name: "topic1",
  },
  {
    path: "/topic2",
    component: topic2,
    name: "topic2",
  },
  {
    path: "/topic3",
    component: topic3,
    name: "topic3",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
