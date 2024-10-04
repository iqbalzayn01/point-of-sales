<script setup>
import { formatCurrency } from '../utils/helpers';

const emit = defineEmits(['delete-item']);

const props = defineProps({
  cart: Array,
  subtotal: Number,
  clear: Function,
  saveLocalStorage: Function,
});
</script>

<template>
  <table
    class="table-auto w-full text-left border-collapse border-spacing-0 mb-5 rounded-lg overflow-hidden"
  >
    <thead>
      <tr class="bg-zinc-900 text-white rounded-t-lg">
        <th class="p-3 border border-zinc-800">No</th>
        <th class="p-3 border border-zinc-800">Product Name</th>
        <th class="p-3 border border-zinc-800">Qty</th>
        <th class="p-3 border border-zinc-800">Total Price</th>
        <th class="p-3 border border-zinc-800">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in cart"
        :key="item.id"
        class="border border-zinc-800"
      >
        <td class="text-white p-3 border border-zinc-800">{{ index + 1 }}</td>
        <td class="text-white p-3 border border-zinc-800">
          {{ item.product_name }}
        </td>
        <td class="text-white p-3 border border-zinc-800">{{ item.qty }}</td>
        <td class="text-white p-3 border border-zinc-800">
          {{ formatCurrency(item.qty * item.product_price) }}
        </td>
        <td class="p-3 border border-zinc-800">
          <button
            @click="$emit('delete-item', item.id)"
            class="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="bg-zinc-900 rounded-b-lg">
        <td colspan="3" class="text-white p-3 border border-zinc-800 font-bold">
          Subtotal
        </td>
        <td colspan="1" class="text-white p-3 border border-zinc-800 font-bold">
          {{ formatCurrency(subtotal) }}
        </td>
        <td
          colspan="1"
          class="text-white p-3 border border-zinc-800 font-bold"
        ></td>
      </tr>
    </tfoot>
  </table>
  <div class="flex justify-end gap-2">
    <button
      @click="clear"
      class="col-span-1 w-[120px] h-10 bg-red-500 hover:bg-red-600 transition-all duration-300 ease-in-out flex items-center justify-center text-sm text-white font-bold px-1 rounded-lg"
      type="button"
    >
      Clear
    </button>
    <button
      @click="saveLocalStorage"
      class="col-span-1 w-[120px] h-10 bg-white hover:bg-zinc-200 transition-all duration-300 ease-in-out flex items-center justify-center text-sm text-black font-bold px-1 rounded-lg"
      type="button"
    >
      Save
    </button>
  </div>
</template>

<style scoped></style>
