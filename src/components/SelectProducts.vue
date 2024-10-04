<script setup>
import { ref } from 'vue';
import { formatCurrency } from '../utils/helpers';
import Products from '../data/products.json';

const emit = defineEmits(['add-to-cart']);

const selectedProduct = ref(null || '');
const qty = ref(1);
const errorMessage = ref('');

const addProduct = () => {
  errorMessage.value = '';

  if (!selectedProduct.value) {
    errorMessage.value = 'Please select a product.';
    return;
  }

  if (qty.value < 1) {
    errorMessage.value = 'Quantity must be at least 1.';
    return;
  }

  if (selectedProduct.value && qty.value >= 1) {
    emit('add-to-cart', { ...selectedProduct.value, qty: qty.value });
  }
};
</script>

<template>
  <form class="grid grid-cols-7 gap-5">
    <div class="card-products col-span-5 w-full">
      <select
        v-model="selectedProduct"
        @change="qty = 1"
        class="w-full h-[42px] bg-transparent text-white border border-zinc-800 cursor-pointer p-2 rounded-lg"
        required
      >
        <option value="" disabled selected>Select a product</option>
        <option
          v-for="item in Products"
          :key="item.id"
          :value="item"
          class="bg-black text-white"
        >
          {{ item.product_name }} - {{ formatCurrency(item.product_price) }}
        </option>
      </select>
    </div>
    <div class="card-qty col-span-1">
      <input
        v-model="qty"
        type="number"
        class="w-full h-[42px] bg-transparent flex items-center justify-center text-center text-white border border-zinc-800 p-2 rounded-lg"
        min="1"
      />
    </div>
    <button
      @click="addProduct"
      class="col-span-1 w-full h-[41.6px] bg-white hover:bg-zinc-200 transition-all duration-300 ease-in-out flex items-center justify-center text-sm text-black font-bold px-1 rounded-lg"
      type="button"
    >
      Add
    </button>
    <div
      v-if="errorMessage"
      class="bg-zinc-900 text-red-500 text-sm col-span-7 p-2 mt-2 rounded-lg"
    >
      {{ errorMessage }}
    </div>
  </form>
</template>

<style scoped></style>
