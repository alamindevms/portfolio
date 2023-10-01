<template>
  <button
    v-if="download"
    @click="downloadAction"
    class="text-base font-medium bg-transparent px-6 py-3 rounded-xl text-black-soft hover:text-primary flex items-center gap-2 transition-colors duration-300"
  >
    {{ text }}
    <component :is="icon" v-if="icon" class="h-5 w-5 text-primary" />
  </button>

  <RouterLink
    v-else
    :to="link"
    class="text-base font-medium bg-transparent px-6 py-3 rounded-xl text-black-soft hover:text-primary flex items-center gap-2 transition-colors duration-300"
    >{{ text }}
    <component :is="icon" v-if="icon" class="h-5 w-5 text-primary" />
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps(['text', 'link', 'icon', 'download'])

const downloadAction = () => {
  window.open(props.link, '_blank')
}
</script>
