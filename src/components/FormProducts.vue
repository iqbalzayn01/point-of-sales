<script setup>
import Products from '../data/products.json';
</script>

<template>
  <form class="grid grid-cols-7 gap-5">
    <div class="card-products col-span-5 w-full">
      <select
        name="products"
        class="w-full h-[42px] bg-transparent text-white border border-zinc-800 cursor-pointer p-2 rounded-lg"
      >
        <option
          v-for="item in Products"
          :key="item._id"
          :value="item._id"
          class="bg-black text-white"
        >
          {{ item.product_name }} - Rp.{{ item.product_price }}
        </option>
      </select>
    </div>
    <div class="card-qty col-span-1">
      <input
        type="number"
        class="w-full h-[42px] bg-transparent flex items-center justify-center text-center text-white border border-zinc-800 p-2 rounded-lg"
      />
    </div>
    <button
      class="col-span-1 w-full h-[41.6px] bg-white hover:bg-zinc-200 transition-all duration-300 ease-in-out flex items-center justify-center text-sm text-black font-bold px-1 rounded-lg"
      type="button"
    >
      Add
    </button>
  </form>
</template>

<style scoped></style>
