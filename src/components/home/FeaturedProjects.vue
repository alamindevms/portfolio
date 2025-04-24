<template>
  <section id="featured-projects" class="mt-20">
    <div class="container">
      <div
        class="border border-gray-200 rounded-lg pl-6 pr-6 laptop:pl-24 laptop:pr-16 py-6 laptop:py-16 flex flex-col laptop:flex-row gap-10"
      >
        <div class="shrink-0 w-80 space-y-5">
          <h2 class="text-3xl font-bold text-black-soft">Featured Projects</h2>
          <p class="text-base font-normal text-gray-500">
            Dive into a showcase of my notable web development projects, where I've brought creative
            solutions to life, solving unique challenges, and crafting engaging online experiences.
          </p>
          <PrimaryLink text="All Projects" link="#projects" class="!inline-block" />
        </div>
        <div class="flex-1 grid grid-cols-2 gap-6">
          <div
            class="col-span-1 overflow-hidden rounded-lg shadow"
            v-for="project in featuredProjects"
            :key="project.id"
          >
            <a :href="project.site_link" target="_blank">
              <img
                :src="project.thumbnail"
                class="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                :alt="project.site_name"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import PrimaryLink from '../buttons/PrimaryLink.vue'

const featuredProjects = reactive([
  {
    id: 1,
    site_name: 'Jamana BD',
    site_link: 'https://jamanabd.com/',
    thumbnail: '/portfolio/images/jamanabd.png',
    technologies: ['React', 'Next.js', 'Tailwind', 'Redux']
  },
  {
    id: 2,
    site_name: 'Firewood LPG',
    site_link: 'https://firewoodlpg.com/',
    thumbnail: '/portfolio/images/firewoodlpg.png',
    technologies: ['Nuxt.js', 'Pinia']
  }
])
</script>
