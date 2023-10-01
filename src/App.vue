<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Layout/Header.vue'
</script>

<template>
  <Header />

  <main class="">
    <RouterView />
  </main>
</template>
