<template>
  <div class="container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'UserRegister',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/login');
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>
