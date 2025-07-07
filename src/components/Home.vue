<script>
import iceCreamImage from '../assets/Homemade Strawberry Ice Cream.jpg';

export default {
  data() {
    return {
      iceCreamImage
    }
  }
}
</script>

<template>
  <div class="home">
    <div class="hero">
      <div class="hero-text">
        <h1>Selamat Datang di Toko Es Krim Tia</h1>
        <p>Segarkan harimu dengan rasa manis dan tampilan ceria</p>
        <button class="order-btn" @click="$router.push('/product')">Pesan Sekarang 🍦</button>
      </div>
      <div class="hero-image">
        <img :src="iceCreamImage" alt="Es Krim" />
      </div>
    </div>

    <div class="features">
      <div class="feature-card">
        <h2>🍓 Bahan Segar</h2>
        <p>Buah asli dan susu premium tanpa pengawet.</p>
      </div>
      <div class="feature-card">
        <h2>🍬 Rasa Unik</h2>
        <p>Varian rasa kreatif seperti bubblegum dan matcha cookies.</p>
      </div>
      <div class="feature-card">
        <h2>🏠 Tempat Ceria</h2>
        <p>Toko colorful yang nyaman untuk anak-anak dan keluarga.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.home {
  padding: 60px 20px;
  background: linear-gradient(135deg, #ffe4f1, #fff0f7);
  font-family: 'Poppins', sans-serif;
  animation: softFade 1.8s ease-in-out;
  color: #d63384;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

@keyframes softFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  max-width: 1100px;
  width: 100%;
  min-height: 420px;
  padding: 0 10px;
}

.hero-text {
  flex: 1 1 350px;
  text-align: left;
  max-width: 600px;
}

.hero-text h1 {
  font-size: 3.4rem;
  color: #e91e63;
  margin-bottom: 18px;
  text-shadow: 2px 2px 8px #f8bbd0;
  font-weight: 700;
  letter-spacing: 1.5px;
  line-height: 1.1;
}

.hero-text p {
  font-size: 1.4rem;
  color: #6f4b5a;
  margin-bottom: 35px;
  line-height: 1.5;
}

.order-btn {
  background: linear-gradient(45deg, #e91e63, #ad1457);
  color: white;
  border: none;
  padding: 16px 36px;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.3rem;
  box-shadow: 0 8px 16px rgba(217, 48, 109, 0.6);
  transition: background 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease;
  user-select: none;
}

.order-btn:hover {
  background: linear-gradient(45deg, #ad1457, #e91e63);
  box-shadow: 0 12px 24px rgba(217, 48, 109, 0.8);
  transform: translateY(-3px);
}

.order-btn:active {
  transform: translateY(0);
  box-shadow: 0 6px 12px rgba(217, 48, 109, 0.5);
}

.hero-image {
  flex: 1 1 350px;
  max-width: 420px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 16px 32px rgba(233, 30, 99, 0.3);
  transition: transform 0.4s ease;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 30px;
}

.hero-image:hover {
  transform: scale(1.05);
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  max-width: 1100px;
  width: 100%;
  padding: 0 10px;
}

.feature-card {
  background: linear-gradient(180deg, #fff0f5, #fff7fb);
  border-radius: 30px;
  width: 280px;
  padding: 32px 28px;
  border: 3px dashed #ffc7e2;
  box-shadow: 0 16px 32px rgba(233, 30, 99, 0.3);
  transition: all 0.4s ease;
  animation: floatCard 3s ease-in-out infinite;
  color: #9c2750;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.feature-card:hover {
  transform: scale(1.07);
  background: linear-gradient(180deg, #ffe9f2, #ffffff);
  box-shadow: 0 20px 36px rgba(233, 30, 99, 0.5);
}

.feature-card h2 {
  font-size: 1.6rem;
  color: #d81b60;
  margin-bottom: 14px;
  font-weight: 700;
  text-shadow: 1px 1px #ffecf2;
}

.feature-card p {
  font-size: 1.1rem;
  color: #6f4b5a;
  line-height: 1.6;
  margin: 0;
}

@keyframes floatCard {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    min-height: auto;
  }
  .hero-text {
    max-width: 100%;
    text-align: center;
  }
  .hero-text h1 {
    font-size: 2.8rem;
  }
  .hero-text p {
    font-size: 1.2rem;
  }
  .order-btn {
    width: 100%;
    padding: 14px 0;
    font-size: 1.2rem;
  }
  .hero-image {
    max-width: 100%;
    border-radius: 20px;
    margin-top: 20px;
  }
  .features {
    gap: 25px;
  }
  .feature-card {
    width: 100%;
    max-width: 320px;
    padding: 24px 20px;
  }
}
</style>
