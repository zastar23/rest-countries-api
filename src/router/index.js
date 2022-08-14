import { createRouter, createWebHistory } from "vue-router";
import CardDetails from "../Views/CardDetails.vue";
import Home from "../Views/Home.vue";
import SearchView from "../Views/SearchView.vue";
import RegionView from "../Views/RegionView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/CardDetails",
    name: "CardDetails",
    component: CardDetails,
    props: true,
  },
  {
    path: "/search",
    name: "SearchView",
    component: SearchView,
    props: true,
  },
  {
    path: "/region",
    name: "RegionView",
    component: RegionView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
