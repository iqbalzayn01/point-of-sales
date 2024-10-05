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
