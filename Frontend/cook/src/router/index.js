import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RecipeList from '../views/RecipeList.vue';
import AddRecipe from '../views/AddRecipe.vue';
import EditRecipe from '../views/EditRecipe.vue';
import RecipeDetail from '../views/RecipeDetail.vue';
import UserLogin from '../views/UserLogin.vue';
import UserRegister from '../views/UserRegister.vue';
import { auth } from '../firebase';  // Import the auth instance from your Firebase config

const routes = [
  { path: '/', component: HomeView },
  { path: '/recipes', component: RecipeList },
  { path: '/add-recipe', component: AddRecipe, meta: { requiresAuth: true } },
  { path: '/edit-recipe/:id', component: EditRecipe, meta: { requiresAuth: true } },
  { path: '/recipes/:id', component: RecipeDetail },
  { path: '/login', component: UserLogin },
  { path: '/register', component: UserRegister },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
