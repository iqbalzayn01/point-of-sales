<script setup>
import { formatCurrency, convertToReadableDatetime } from '../utils/helpers';

const emit = defineEmits(['delete-item']);

const props = defineProps({
  headers: Array,
  data: Array,
  subtotal: Number,
  showActions: Boolean,
});
</script>

<template>
  <table
    class="table-auto w-full text-left border-collapse border-spacing-0 mb-5 rounded-lg overflow-hidden"
  >
    <thead>
      <tr class="bg-zinc-900 text-white rounded-t-lg">
        <!-- Menampilkan col secara dinamis pada header -->
        <th
          v-for="(header, index) in headers"
          :key="index"
          class="p-3 border border-zinc-800"
        >
          {{ header }}
        </th>
        <th v-if="showActions" class="p-3 border border-zinc-800">Action</th>
      </tr>
    </thead>
    <tbody>
      <!-- Iterasi data dan menampilkan row secara dinamis -->
      <tr
        v-for="(item, index) in data"
        :key="item.id || index"
        class="border border-zinc-800"
      >
        <td class="text-white p-3 border border-zinc-800">{{ index + 1 }}</td>
        <td class="text-white p-3 border border-zinc-800">
          {{
            item.product_name || convertToReadableDatetime(item.report_datetime)
          }}
        </td>
        <td class="text-white p-3 border border-zinc-800">
          {{ item.qty || formatCurrency(item.report_subtotal) }}
        </td>
        <td v-if="item.qty" class="text-white p-3 border border-zinc-800">
          {{ formatCurrency(item.qty * item.product_price) }}
        </td>
        <td v-if="showActions" class="p-3 border border-zinc-800">
          <button
            @click="$emit('delete-item', item.id)"
            class="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="subtotal">
      <tr class="bg-zinc-900 rounded-b-lg">
        <td colspan="3" class="text-white p-3 border border-zinc-800 font-bold">
          Subtotal
        </td>
        <td colspan="1" class="text-white p-3 border border-zinc-800 font-bold">
          {{ formatCurrency(subtotal) }}
        </td>
        <td
          v-if="showActions"
          class="text-white p-3 border border-zinc-800 font-bold"
        ></td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped></style>
