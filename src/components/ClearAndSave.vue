<script setup>
const props = defineProps({
  clear: Function,
  saveLocalStorage: Function,
});
</script>

<template>
  <div class="flex justify-end gap-2">
    <button
      @click="clear"
      class="col-span-1 w-[120px] h-10 bg-transparent hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-center text-sm text-white font-bold border border-white hover:border-none px-1 rounded-lg"
      type="button"
    >
      Clear
    </button>
    <button
      @click="saveLocalStorage"
      class="col-span-1 w-[120px] h-10 bg-teal-600 hover:bg-teal-700 transition-all duration-300 ease-in-out flex items-center justify-center text-sm text-white font-bold px-1 rounded-lg"
      type="button"
    >
      Save
    </button>
  </div>
</template>
