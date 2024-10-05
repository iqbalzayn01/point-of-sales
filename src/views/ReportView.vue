<script setup>
import { ref, onMounted } from 'vue';
import { exportToExcel, convertToReadableDatetime } from '../utils/helpers';
import Tables from '../components/Tables.vue';

const reportData = ref([]);

onMounted(() => {
  const transactions = localStorage.getItem('transactions');
  if (transactions) {
    reportData.value = JSON.parse(transactions);
  }
});

const handleExport = () => {
  const exportData = reportData.value.map((item, index) => ({
    No: index + 1,
    'Tanggal & Jam': convertToReadableDatetime(item.report_datetime),
    Subtotal: item.report_subtotal,
  }));

  exportToExcel(exportData);
};
</script>

<template>
  <main
    class="w-full bg-transparent border border-zinc-800 ml-1 mr-5 my-5 rounded-xl"
  >
    <div>
      <div class="border-b border-zinc-800 p-10">
        <h1 class="text-3xl text-white font-bold mb-2">Report</h1>
        <p class="text-white">
          Selamat datang di halaman laporan penjualan kami, tempat di mana data
          bertemu dengan analisis untuk memberikan wawasan yang lebih dalam
          tentang kinerja bisnis Anda.
        </p>
      </div>
      <div class="p-10">
        <Tables
          :headers="['No.', 'Tanggal & Jam', 'Subtotal']"
          :data="reportData"
          :subtotal="null"
          :showActions="false"
        />
      </div>
      <div class="flex justify-end px-10">
        <button
          @click="handleExport"
          type="button"
          class="w-[120px] h-10 bg-teal-600 hover:bg-teal-700 transition-all duration-300 ease-in-out flex items-center justify-center text-sm text-white font-bold px-1 rounded-lg"
        >
          Export to Excel
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
