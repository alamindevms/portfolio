<template>
  <header
    class="top-0 inset-x-0 z-40 transition-all duration-300"
    :class="[isSticky ? 'sticky bg-white shadow-md' : 'fixed bg-transparent']"
  >
    <div class="container">
      <nav>
        <ul class="flex items-center justify-center gap-4 laptop:gap-8 py-6">
          <li v-for="menu in menus" :key="menu.id">
            <a
              :href="menu.link"
              class="hover:text-light-1 text-black-soft transition-colors duration-300"
              >{{ menu.name }}</a
            >
          </li>
        </ul>
      </nav>
    </div>

    <!-- back to top -->
    <button
      @click="backToTop"
      class="invisible fixed bottom-5 right-5 z-10 bg-white h-10 w-10 rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
      :class="{ '!visible': isSticky }"
    >
      <ArrowUpIcon class="h-5 w-5" />
    </button>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { ArrowUpIcon } from '@heroicons/vue/24/solid'

const isSticky = ref(false)

const handleScroll = () => {
  if (window.scrollY > 100) {
    isSticky.value = true
  } else {
    isSticky.value = false
  }
}
const backToTop = () => {
  window.scrollTo({
    top: 0
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const menus = [
  {
    id: 1,
    name: 'Home',
    link: '#home'
  },
  {
    id: 2,
    name: 'Services',
    link: '#services'
  },
  {
    id: 3,
    name: 'About',
    link: '#about'
  },
  {
    id: 4,
    name: 'Projects',
    link: '#projects'
  },
  {
    id: 5,
    name: 'Contact',
    link: '#contact'
  }
]
</script>
