<template>
  <div class="container">
    <header class="d-flex justify-content-between align-items-center py-3">
      <h1>Recipe App</h1>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/recipes" class="nav-link">Recipes</router-link>
        <router-link to="/add-recipe" class="nav-link" v-if="isAuthenticated">Add Recipe</router-link>
        <router-link v-if="!isAuthenticated" to="/login" class="nav-link">Login</router-link>
        <router-link v-if="!isAuthenticated" to="/register" class="nav-link">Register</router-link>
        <span v-if="isAuthenticated" class="nav-link">{{ userEmail }}</span>
        <button v-if="isAuthenticated" @click="logout" class="btn btn-link">Logout</button>
      </nav>
    </header>
    <main>
      <h2>Welcome to Recipe App</h2>
    </main>
  </div>
</template>

<script>
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: 'HomeView',
  data() {
    return {
      isAuthenticated: false,
      userEmail: ''
    };
  },
  created() {
    onAuthStateChanged(auth, user => {
      this.isAuthenticated = !!user;
      this.userEmail = user ? user.email : '';
    });
  },
  methods: {
    logout() {
      signOut(auth).then(() => {
        this.isAuthenticated = false;
        this.userEmail = '';
        this.$router.push('/login');
      });
    }
  }
};
</script>

<style>
.nav-link {
  margin-right: 1rem;
}
</style>
