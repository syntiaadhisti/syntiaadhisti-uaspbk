<template>
  <div class="pemesanan-page">
    <h1>Pesan Es Krim 🍦</h1>
    <p class="subtext">Isi form di bawah untuk melakukan pemesanan es krim favoritmu!</p>

    <div class="pemesanan-container">
      <!-- Form pemesanan -->
      <form class="pemesanan-form" @submit.prevent="kirimPesanan" v-if="!pesananTerkirim">
        <p v-if="produk && harga">
          <strong>Produk yang dipilih:</strong> {{ produk }} <br />
          <strong>Harga:</strong> Rp {{ harga.toLocaleString() }}
        </p>

        <input type="text" v-model="nama" placeholder="Nama Kamu" required />
        <input type="tel" v-model="telepon" placeholder="Nomor Telepon Aktif" required />
        <textarea v-model="alamat" rows="3" placeholder="Alamat Rumah" required></textarea>
        <textarea v-model="pesan" rows="3" placeholder="Catatan Tambahan (opsional)"></textarea>

        <!-- Metode Pembayaran -->
        <div class="metode-pembayaran">
          <p><strong>Metode Pembayaran:</strong></p>
          <label>
            <input type="radio" value="Transfer Bank" v-model="metodePembayaran" required />
            Transfer Bank
          </label>
          <div v-if="metodePembayaran === 'Transfer Bank'" class="transfer-bank-details">
            <label for="bank">Pilih Bank:</label>
            <select id="bank" v-model="bank" required>
              <option disabled value="">-- Pilih Bank --</option>
              <option>Bank Mandiri</option>
              <option>Bank BCA</option>
              <option>Bank BNI</option>
              <option>Bank BRI</option>
            </select>
            <label for="accountNumber">Nomor Rekening:</label>
            <input id="accountNumber" v-model="accountNumber" type="text" required />
            <label for="accountName">Nama Pemilik Rekening:</label>
            <input id="accountName" v-model="accountName" type="text" required />
          </div>
          <label>
            <input type="radio" value="Cash on Delivery (COD)" v-model="metodePembayaran" />
            Cash on Delivery (COD)
          </label>
          <label>
            <input type="radio" value="E-Wallet (Gopay/Dana/OVO)" v-model="metodePembayaran" />
            E-Wallet (Gopay/Dana/OVO)
          </label>
          <div v-if="metodePembayaran === 'E-Wallet (Gopay/Dana/OVO)'" class="ewallet-details">
            <label for="ewalletType">Pilih E-Wallet:</label>
            <select id="ewalletType" v-model="ewalletType" required>
              <option disabled value="">-- Pilih E-Wallet --</option>
              <option>Gopay</option>
              <option>Dana</option>
              <option>OVO</option>
            </select>
            <div v-if="ewalletType === 'Dana'">
              <label for="danaNumber">Nomor Dana:</label>
              <input id="danaNumber" v-model="danaNumber" type="text" required />
            </div>
          </div>
        </div>

        <button type="submit">Kirim Pesanan 💌</button>
      </form>

      <!-- Konfirmasi setelah kirim -->
      <div class="confirmation" v-else>
        <h2>🎉 Pesanan Diterima!</h2>
        <p>Terima kasih, pesanan kamu sedang kami proses 🍨</p>
        <div class="pesanan-detail">
          <p><strong>Nama:</strong> {{ nama }}</p>
          <p><strong>Telepon:</strong> {{ telepon }}</p>
          <p><strong>Jumlah:</strong> {{ jumlah }} es krim</p>
          <p><strong>Alamat:</strong> {{ alamat }}</p>
          <p><strong>Catatan:</strong> {{ pesan || 'Tidak ada' }}</p>
          <p v-if="produk && harga">
            <strong>Produk:</strong> {{ produk }} <br />
            <strong>Harga:</strong> Rp {{ harga.toLocaleString() }}
          </p>
          <p><strong>Metode Pembayaran:</strong> {{ metodePembayaran }}</p>
        </div>
      </div>
    </div>

    <!-- Pop-up notifikasi -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <p>🍧 Pesanan kamu telah berhasil dikirim!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const nama = ref('')
const telepon = ref('')
const jumlah = ref(1)
const alamat = ref('')
const pesan = ref('')
const metodePembayaran = ref('')

const bank = ref('')
const accountNumber = ref('')
const accountName = ref('')

const ewalletType = ref('')
const danaNumber = ref('')

import { store } from '../store.js';

const produk = ref('')
const harga = ref(0)

const pesananTerkirim = ref(false)
const showPopup = ref(false)

const route = useRoute()

onMounted(() => {
  // Read order data from store instead of query params
  if (store.order.products.length > 0) {
    produk.value = store.order.products.join(', ');
  }
  if (store.order.prices.length > 0) {
    harga.value = store.order.prices.reduce((a, b) => a + b, 0);
  }
})

function kirimPesanan() {
  if (jumlah.value < 1) {
    alert('Jumlah pesanan harus minimal 1!')
    return
  }
  if (!metodePembayaran.value) {
    alert('Mohon pilih metode pembayaran terlebih dahulu!')
    return
  }
  if (metodePembayaran.value === 'Transfer Bank') {
    if (!bank.value || !accountNumber.value || !accountName.value) {
      alert('Mohon lengkapi data transfer bank!')
      return
    }
  }
  if (metodePembayaran.value === 'E-Wallet (Gopay/Dana/OVO)') {
    if (!ewalletType.value) {
      alert('Mohon pilih jenis E-Wallet!')
      return
    }
    if (ewalletType.value === 'Dana' && !danaNumber.value) {
      alert('Mohon isi nomor Dana!')
      return
    }
  }

  pesananTerkirim.value = true
  showPopup.value = true

  setTimeout(() => {
    showPopup.value = false
  }, 3000)

  setTimeout(() => {
    resetForm()
    pesananTerkirim.value = false
    produk.value = ''
    harga.value = 0
    metodePembayaran.value = ''
    bank.value = ''
    accountNumber.value = ''
    accountName.value = ''
    ewalletType.value = ''
    danaNumber.value = ''
    // Clear order data in store after submission
    store.order.products = []
    store.order.prices = []
    store.order.quantities = []
  }, 10000)
}

function resetForm() {
  nama.value = ''
  telepon.value = ''
  jumlah.value = 1
  alamat.value = ''
  pesan.value = ''
  bank.value = ''
  accountNumber.value = ''
  accountName.value = ''
  ewalletType.value = ''
  danaNumber.value = ''
}
</script>

<style scoped>
.pemesanan-page {
  max-width: 600px;
  margin: 40px auto;
  background: linear-gradient(135deg, #ffe6f0, #8b0000);
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(139, 0, 0, 0.3);
  font-family: 'Poppins', sans-serif;
  color: #4a0000;
  text-align: center;
}

h1 {
  font-size: 2.8rem;
  color: #ff80ab;
  margin-bottom: 15px;
  font-weight: 800;
  text-shadow: 2px 2px 8px rgba(139, 0, 0, 0.6);
}

.subtext {
  font-size: 1.1rem;
  color: #4a0000;
  margin-bottom: 35px;
}

.pemesanan-container {
  display: flex;
  justify-content: center;
}

.pemesanan-form,
.confirmation {
  background: #fff0f6;
  padding: 30px 25px;
  border-radius: 20px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(139, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pemesanan-form input,
.pemesanan-form textarea {
  padding: 12px 16px;
  border-radius: 14px;
  border: 2px solid #ff80ab;
  font-size: 1rem;
  background-color: #fff8fb;
  color: #4a0000;
  transition: border-color 0.3s ease;
}

.pemesanan-form input:focus,
.pemesanan-form textarea:focus {
  border-color: #8b0000;
  outline: none;
  box-shadow: 0 0 10px rgba(139, 0, 0, 0.6);
}

.pemesanan-form button {
  background-color: #8b0000;
  color: white;
  border: none;
  padding: 14px 0;
  font-weight: 800;
  border-radius: 16px;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 8px 24px rgba(139, 0, 0, 0.7);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.pemesanan-form button:hover {
  background-color: #5c0000;
  box-shadow: 0 10px 28px rgba(92, 0, 0, 0.85);
}

.confirmation h2 {
  color: #ff80ab;
  margin-bottom: 15px;
  font-weight: 800;
}

.confirmation p {
  font-size: 1.1rem;
  color: #4a0000;
}

.pesanan-detail {
  background-color: #fff8fb;
  padding: 15px 20px;
  border-radius: 14px;
  text-align: left;
  margin-top: 20px;
  font-size: 1rem;
  color: #4a0000;
}

/* Metode Pembayaran */
.metode-pembayaran {
  text-align: left;
  margin: 15px 0 20px;
  font-size: 1rem;
  color: #4a0000;
}

.metode-pembayaran label {
  display: block;
  margin-bottom: 8px;
  cursor: pointer;
}

.metode-pembayaran input[type="radio"] {
  margin-right: 10px;
}

/* Pop-up tengah layar */
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffebf1;
  border: 1px solid #ff6fa1;
  padding: 20px 30px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(255, 105, 135, 0.3);
  z-index: 999;
  font-weight: 800;
  color: #d63384;
  animation: fadeInOut 3s ease-in-out;
  text-align: center;
  min-width: 280px;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translate(-50%, calc(-50% - 20px)); }
  10% { opacity: 1; transform: translate(-50%, -50%); }
  90% { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, calc(-50% - 20px)); }
}
</style>
