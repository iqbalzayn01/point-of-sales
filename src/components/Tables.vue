<script setup></script>

<template>
  <table
    class="table-auto w-full text-left border-collapse border-spacing-0 rounded-lg overflow-hidden"
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
      <tr class="border border-zinc-800">
        <td class="text-white p-3 border border-zinc-800">1</td>
        <td class="text-white p-3 border border-zinc-800">Laptop</td>
        <td class="text-white p-3 border border-zinc-800">1</td>
        <td class="text-white p-3 border border-zinc-800">Rp. 50.000</td>
        <td class="p-3 border border-zinc-800">
          <button
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
          Rp 50.000
        </td>
        <td
          colspan="1"
          class="text-white p-3 border border-zinc-800 font-bold"
        ></td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped></style>
