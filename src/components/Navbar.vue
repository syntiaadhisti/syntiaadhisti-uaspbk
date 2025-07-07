<template>
  <nav class="navbar">
    <div class="nav-left">
      <router-link to="/" class="link">Beranda</router-link>
      <router-link to="/about" class="link">Tentang</router-link>
      <router-link to="/product" class="link">Produk</router-link>
      <router-link to="/pemesanan" class="link">Pemesanan</router-link>
    </div>

    <div class="nav-right">
      <div class="user-info" v-if="username">
        <img v-if="userImage" :src="userImage" alt="User Image" class="user-image" />
        <span class="username">Welcome, {{ username }}</span>
        <button @click="logout" class="logout-button">Logout</button>
      </div>
      <div class="register-link" v-else>
        <router-link to="/register" class="link">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { store } from '../store.js'

export default {
  computed: {
    username() {
      return store.username;
    }
  },
  methods: {
    logout() {
      store.username = '';
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 20px 40px;
  background: linear-gradient(90deg, #e91e63, #b71c1c);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 6px 16px rgba(183, 28, 28, 0.5);
  border-radius: 0 0 20px 20px;
  font-family: 'Poppins', sans-serif;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-image {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ff80ab;
}

.username {
  color: #ff80ab;
  font-weight: 600;
  font-size: 1.1rem;
}

.logout-button {
  background-color: #b71c1c;
  border: none;
  color: white;
  padding: 6px 14px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #7b1fa2;
}

.link {
  text-decoration: none;
  color: #ffc1e3;
  font-weight: 700;
  font-size: 1.1rem;
  margin-right: 20px;
  transition: color 0.3s ease;
}

.link:hover {
  color: #ff80ab;
}
</style>
