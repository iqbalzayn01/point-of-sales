<script setup>
import { RouterView } from 'vue-router';

import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="h-screen flex">
    <Sidebar />
    <RouterView />
  </div>
</template>

<style scoped></style>
