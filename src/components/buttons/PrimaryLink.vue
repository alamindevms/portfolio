<template>
  <a
    :href="link"
    class="text-sm laptop:text-base font-medium bg-primary px-4 laptop:py-2 laptop:px-6 py-3 rounded-xl text-white flex items-center gap-2"
    >{{ text }}
    <component :is="icon" v-if="icon" />
  </a>
</template>

<script setup>
// import { RouterLink } from 'vue-router'

defineProps(['text', 'link', 'icon'])
</script>
