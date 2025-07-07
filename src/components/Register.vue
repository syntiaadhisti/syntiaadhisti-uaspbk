<template>
  <div class="auth-container">
    <!-- REGISTER -->
    <div v-if="!isLogin">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="reg-username">Username:</label>
          <input id="reg-username" v-model="regUsername" type="text" required />
        </div>
        <div class="form-group">
          <label for="reg-email">Email:</label>
          <input id="reg-email" v-model="regEmail" type="email" required />
        </div>
        <div class="form-group">
          <label for="reg-password">Password:</label>
          <input id="reg-password" v-model="regPassword" type="password" required />
        </div>
        <button type="submit">Register</button>
        <p @click="isLogin = true" style="cursor: pointer;">Sudah punya akun? Login</p>
      </form>
    </div>

    <!-- LOGIN -->
    <div v-else>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="login-username">Username:</label>
          <input id="login-username" v-model="loginUsername" type="text" required />
        </div>
        <div class="form-group">
          <label for="login-password">Password:</label>
          <input id="login-password" v-model="loginPassword" type="password" required />
        </div>
        <button type="submit">Login</button>
        <p @click="isLogin = false" style="cursor: pointer;">Belum punya akun? Daftar</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { store } from '../store.js'

export default {
  data() {
    return {
      isLogin: false,
      regUsername: '',
      regEmail: '',
      regPassword: '',
      loginUsername: '',
      loginPassword: ''
    }
  },
  methods: {
    async handleRegister() {
      try {
        // Removed username uniqueness check to simplify registration

        // Lanjut daftar
        const postRes = await axios.post('https://eskimtia-json.glitch.me/users', {
          username: this.regUsername.trim().toLowerCase(),
          email: this.regEmail.trim(),
          password: this.regPassword.trim()
        });
        console.log('Register: post response', postRes);

        alert('Registrasi berhasil! Silakan login.');
        this.isLogin = true;
      } catch (error) {
        console.error('Register error:', error);
        alert('Registrasi gagal: ' + (error.response?.data || error.message || error));
      }
    },
    async handleLogin() {
      try {
        console.log('Login: attempting with', this.loginUsername, this.loginPassword);
        const res = await axios.get(`https://eskimtia-json.glitch.me/users?username=${this.loginUsername.trim().toLowerCase()}&password=${this.loginPassword.trim()}`);
        console.log('Login: response', res);
        if (res.data.length > 0) {
          store.username = res.data[0].username;
          store.userImage = res.data[0].image || '';
          alert("Login berhasil!");
          this.$router.push('/');
        } else {
          alert('Login gagal: username atau password salah.');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('Terjadi kesalahan saat login.');
      }
    }
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffd6e8;
  font-family: 'Poppins', sans-serif;
  color: #4a0000;
  padding: 20px;
}

.auth-container > div {
  max-width: 480px;
  width: 100%;
  padding: 40px 35px;
  border-radius: 24px;
  background: #fff0f6;
  box-shadow: 0 10px 30px rgba(139, 0, 0, 0.35);
  transition: box-shadow 0.3s ease;
}

.auth-container > div:hover {
  box-shadow: 0 14px 40px rgba(139, 0, 0, 0.5);
}

h2 {
  text-align: center;
  color: #ff4d88;
  margin-bottom: 30px;
  font-weight: 900;
  text-shadow: 3px 3px 12px rgba(255, 77, 136, 0.9);
  font-size: 2.6rem;
}

.form-group {
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
}

label {
  width: 100px;
  color: #ff80ab;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: right;
}

input {
  flex: 1;
  padding: 14px 18px;
  border: 2px solid #ff80ab;
  border-radius: 18px;
  font-size: 1.1rem;
  background-color: #fff8fb;
  color: #4a0000;
  transition: border-color 0.3s ease;
  box-shadow: inset 0 2px 6px rgba(255, 128, 171, 0.2);
}

input:focus {
  border-color: #8b0000;
  outline: none;
  box-shadow: 0 0 12px rgba(139, 0, 0, 0.8);
}

button {
  width: 100%;
  padding: 16px 0;
  background-color: #8b0000;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1.3rem;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(139, 0, 0, 0.8);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background-color: #5c0000;
}
</style>
