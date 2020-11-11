import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./views/HomePage";
import FavoritesPage from "./views/FavoritesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/favorites",
    name: "FavoritesPage",
    component: FavoritesPage,
  },
  {
    path: "/movie-details/:id",
    name: "MovieDetailsPage",
    component: MovieDetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
