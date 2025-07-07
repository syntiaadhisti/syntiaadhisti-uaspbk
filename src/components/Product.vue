<template>
  <div class="product-page">
    <h1>🍦 Pilihan menu Ice Cream</h1>
    <div class="product-list">
      <div v-for="item in products" :key="item.id" class="product-card">
        <img :src="item.image" :alt="item.name" />
        <h2>{{ item.name }}</h2>
        <p class="description">{{ item.description }}</p>
        <p class="price">Rp {{ item.price.toLocaleString('id-ID') }}</p>
        <input
          type="number"
          v-model.number="item.quantity"
          min="0"
          placeholder="Jumlah"
          style="width: 60px; margin-bottom: 10px;"
        />
      </div>
    </div>
    <button @click="pesan" class="pesan-button">
      Pesan Sekarang 💌
    </button>
  </div>
</template>

<script>
import { store } from '../store.js';

const productsData = [
  {
    id: 1,
    name: 'Caramel Sweet',
    description: 'Es krim caramel manis dengan taburan gula karamel renyah.',
    price: 19000,
    image: new URL('../assets/Caramel-cookie-.jpg', import.meta.url).href
  },
  {
    id: 2,
    name: 'Strawberry Delight',
    description: 'Es krim stroberi segar dengan potongan buah asli.',
    price: 18000,
    image: new URL('../assets/Homemade Strawberry Ice Cream.jpg', import.meta.url).href
  },
  {
    id: 3,
    name: 'Minty Bear',
    description: 'Es krim mint segar dengan cokelat choco-chip lucu.',
    price: 19000,
    image: new URL('../assets/choco mint.jpg', import.meta.url).href
  },
  {
    id: 4,
    name: 'Biscoff Ice Cream',
    description: 'Biskuit Lotus yang premium dipadukan dengan es krim yang lembut.',
    price: 23000,
    image: new URL('../assets/Homemade Biscoff Ice Cream (1).jpg', import.meta.url).href
  },
  {
    id: 5,
    name: 'Hazelnut',
    description: 'Es krim dengan taburan Hazelnut yang lezat dan renyah.',
    price: 20000,
    image: new URL('../assets/Hazelnut Icecream.jpg', import.meta.url).href
  },
  {
    id: 6,
    name: 'Vanilla Sprinkle',
    description: 'Es krim vanilla klasik dengan taburan sprinkle warna-warni.',
    price: 17000,
    image: new URL('../assets/vanila sprinkle.jpg', import.meta.url).href
  }
];

export default {
  data() {
    return {
      products: productsData.map(product => ({
        ...product,
        quantity: 0
      }))
    };
  },
  methods: {
    pesan() {
      const selectedProducts = this.products.filter(p => p.quantity > 0);
      if (selectedProducts.length === 0) {
        alert('Silakan pilih jumlah produk yang ingin dipesan.');
        return;
      }

      store.order.products = selectedProducts.map(p => p.name);
      store.order.prices = selectedProducts.map(p => p.price);
      store.order.quantities = selectedProducts.map(p => p.quantity);

      this.$router.push('/pemesanan');
    }
  }
};
</script>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 30px;
  background: linear-gradient(135deg, #ffe6f0, #8b0000);
  text-align: center;
  font-family: 'Poppins', 'Comic Sans MS', cursive;
  color: #4a0000;
  min-height: 100vh;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(139, 0, 0, 0.3);
}

h1 {
  font-size: 3rem;
  margin-bottom: 45px;
  color: #ff80ab;
  text-shadow: 2px 2px 8px rgba(139, 0, 0, 0.6);
  font-weight: 800;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
}

.product-card {
  background: #ffe6f0;
  border-radius: 22px;
  padding: 28px;
  box-shadow: 0 14px 28px rgba(139, 0, 0, 0.25);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  border: none;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 24px 48px rgba(139, 0, 0, 0.45);
}

img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 22px;
  border: 5px solid #4c0404;
  box-shadow: 0 6px 18px rgba(176, 39, 39, 0.35);
}

h2 {
  font-size: 1.6rem;
  color: #530404;
  margin-bottom: 18px;
  font-weight: 700;
}

.description {
  font-size: 1.05rem;
  color: #aa2424;
  margin-bottom: 18px;
  line-height: 1.5;
}

.price {
  font-size: 1.4rem;
  font-weight: 800;
  color: #c70808;
  background-color: #f3e5f5;
  padding: 10px 18px;
  border-radius: 18px;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(188, 71, 71, 0.35);
  margin-bottom: 25px;
}

input[type="number"] {
  width: 75px;
  padding: 7px 12px;
  border-radius: 16px;
  border: 2px solid #510404;
  font-size: 1.05rem;
  font-weight: 700;
  color: #680202;
  text-align: center;
  margin-bottom: 18px;
  transition: border-color 0.35s ease;
}

input[type="number"]:focus {
  outline: none;
  border-color: #9c27b0;
  box-shadow: 0 0 10px rgba(156, 39, 176, 0.6);
}

.pesan-button {
  margin-top: 20px;
  background-color: #8b0000;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.35s ease, box-shadow 0.35s ease;
  font-weight: 800;
  font-size: 1.2rem;
  box-shadow: 0 8px 24px rgba(139, 0, 0, 0.7);
}

.pesan-button:hover {
  background-color: #5c0000;
  box-shadow: 0 10px 28px rgba(92, 0, 0, 0.85);
}
</style>
