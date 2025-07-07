import { reactive, computed } from 'vue';

// Store reactive untuk keranjang es krim
export const vinia = reactive({
  items: [],

  async fetchItemsFromAPI(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch items from API');
      }
      const data = await response.json();
      // Menambahkan kuantitas default jika belum ada
      vinia.items = data.map(item => ({
        ...item,
        quantity: item.quantity || 1
      }));
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  },

  addItem(item) {
    const existingItem = vinia.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
    } else {
      vinia.items.push({ ...item, quantity: item.quantity || 1 });
    }
  },

  removeItem(itemId) {
    vinia.items = vinia.items.filter(item => item.id !== itemId);
  },

  updateItemQuantity(itemId, quantity) {
    const item = vinia.items.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
    }
  }
});

// Getter: jumlah total item
export const totalItems = computed(() =>
  vinia.items.reduce((sum, item) => sum + item.quantity, 0)
);

// Getter: total harga semua item
export const totalPrice = computed(() =>
  vinia.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
