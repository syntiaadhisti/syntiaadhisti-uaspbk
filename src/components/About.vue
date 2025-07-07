<template>
  <div class="about">
    <h1>Tentang Toko Es Krim Kami</h1>
    <p class="intro">
      Kami adalah toko es krim lokal yang berdedikasi untuk menyajikan kebahagiaan dalam setiap rasa. Berdiri sejak 2024, kami telah menjadi pilihan keluarga untuk menikmati es krim segar dan kreatif.
    </p>

    <div class="section">
      <h2>Rasa Otentik & Segar</h2>
      <p>
        Semua es krim kami dibuat dari bahan-bahan alami tanpa pengawet dan varian yang unik.
      </p>
    </div>

    <div class="section">
      <h2>Dibuat Dengan Sepenuh Hati</h2>
      <p>
        Dibuat secara handmade oleh tim kami yang kreatif dan berdedikasi. Kami percaya bahwa es krim adalah karya seni yang bisa membawa senyum untuk siapa saja.
      </p>
    </div>

    <div class="section">
      <h2>Lokasi Kami</h2>
      <p>
        Toko kami hadir di pusat kota dengan suasana ceria dan ramah anak. Kami juga melayani pesan antar dan pemesanan acara khusus!
      </p>
    </div>

    <div class="contact-section">
      <h2>Kontak Kami</h2>
      <p><strong>Alamat:</strong> Jl. Stadion Gg Nuri</p>
      <p>
        <strong>WhatsApp:</strong>
        <a href="https://wa.me/6281234567890" target="_blank" class="link">0812-3456-7890</a>
      </p>
      <p>
        <strong>Instagram:</strong>
        <a href="https://instagram.com/eskrimtia" target="_blank" class="link">@eskimtia</a>
      </p>
      <p><strong>Email:</strong> eskrimtia@gmail.com</p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.about {
  max-width: 820px;
  margin: 50px auto;
  padding: 50px 40px;
  background: linear-gradient(135deg, #fff0f5, #ffeef2, #fffaf0);
  border-radius: 28px;
  box-shadow: 0 12px 30px rgba(255, 183, 197, 0.4);
  font-family: 'Poppins', sans-serif;
  color: #8b2a4a;
  background-image: radial-gradient(circle at 15% 15%, #ffe1eb 1px, transparent 1px),
                    radial-gradient(circle at 85% 85%, #ffd1dc 1px, transparent 1px);
  background-size: 70px 70px;
  transition: box-shadow 0.3s ease;
}

.about:hover {
  box-shadow: 0 18px 40px rgba(255, 183, 197, 0.6);
}

h1 {
  font-size: 3rem;
  margin-bottom: 30px;
  color: #d81b60;
  text-align: center;
  text-shadow: 2px 2px 6px #ffe1ed;
  font-weight: 800;
  letter-spacing: 2px;
}

.intro {
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 50px;
  color: #7a4a5a;
  line-height: 1.6;
}

.section {
  background: #fffafc;
  border: 2px dashed #ffcce0;
  border-radius: 24px;
  padding: 25px 30px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 18px rgba(255, 180, 210, 0.35);
}

.section:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 28px rgba(255, 180, 210, 0.5);
}

.section h2,
.contact-section h2 {
  font-size: 1.7rem;
  color: #d81b60;
  margin-bottom: 14px;
  font-weight: 800;
  letter-spacing: 1.2px;
}

.section p,
.contact-section p {
  font-size: 1.1rem;
  color: #6f4b5a;
  line-height: 1.7;
  margin: 0;
}

.contact-section {
  background: #fff8fb;
  border: 2px dashed #ffbdd3;
  border-radius: 24px;
  padding: 25px 30px;
  margin-top: 40px;
  box-shadow: 0 6px 18px rgba(255, 192, 203, 0.4);
  transition: box-shadow 0.3s ease;
}

.contact-section:hover {
  box-shadow: 0 10px 28px rgba(255, 192, 203, 0.6);
}

a.link {
  color: #f95b99;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease;
}

a.link:hover {
  color: #d81b60;
  text-decoration: underline;
}
</style>
