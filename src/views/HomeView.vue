<script setup>
import { ref } from 'vue';
import SelectProducts from '../components/SelectProducts.vue';
import Tables from '../components/Tables.vue';

import {
  addItemToCart,
  removeItemFromCart,
  calculateSubTotal,
  saveLocalStorage,
} from '../utils/services';

const cart = ref([]);
const subtotal = ref(0);

const addProduct = (item) => {
  cart.value = addItemToCart(cart.value, item);
  subtotal.value = calculateSubTotal(cart.value);
};

const deleteProduct = (id) => {
  cart.value = removeItemFromCart(cart.value, id);
  subtotal.value = calculateSubTotal(cart.value);
};

const clearAll = () => {
  cart.value = [];
  subtotal.value = 0;
};

const saveCart = () => {
  saveLocalStorage(cart.value);
  cart.value = [];
  subtotal.value = 0;
};
</script>

<template>
  <main
    class="w-full bg-transparent border border-zinc-800 ml-1 mr-5 my-5 rounded-xl"
  >
    <div>
      <div class="border-b border-zinc-800 p-10">
        <h1 class="text-3xl text-white font-bold mb-2">Dashboard</h1>
        <p class="text-white">
          An any way to manage sales with care and precision.
        </p>
      </div>
      <div class="p-10">
        <SelectProducts @add-to-cart="addProduct" />
      </div>
      <div class="px-10">
        <Tables
          :cart="cart"
          :subtotal="subtotal"
          :clear="clearAll"
          :saveLocalStorage="saveCart"
          @delete-item="deleteProduct"
        />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
