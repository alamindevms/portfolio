<template>
  <section id="projects" class="mt-20">
    <div class="container">
      <h2 class="text-3xl font-bold text-black-soft text-center">
        My <span class="text-primary">Works</span>
      </h2>
      <div class="grid laptop:grid-cols-2 desktop:grid-cols-4 gap-6 mt-10">
        <div v-for="project in projects" :key="project.id">
          <div class="relative overflow-hidden rounded-lg p-4 bg-gray-100 group">
            <img
              :alt="project.site_name"
              class="h-40 xl:h-44 w-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300 overflow-hidden"
              :src="project.thumbnail"
            />
            <div class="flex flex-wrap gap-2 mt-3">
              <p
                v-for="(tech, index) in project.technologies"
                :key="index"
                class="bg-gray-900 px-3 py-1 rounded-full text-xs font-light text-gray-50"
              >
                {{ tech }}
              </p>
            </div>
          </div>
          <a
            class="text-base desktop:text-lg font-normal text-gray-800 text-center mt-2 line-clamp-2 hover:underline hover:text-primary transition-all duration-300"
            :href="project.site_link"
            target="_blank"
            >{{ project.site_name }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const projects = reactive([
  {
    id: 1,
    site_name: 'Jamana BD',
    site_link: 'https://jamanabd.com/',
    thumbnail: '/portfolio/images/jamanabd.png',
    technologies: ['React', 'Next.js', 'Tailwind', 'Redux']
  },
  {
    id: 2,
    site_name: 'Islamic Foundation BD',
    site_link: 'https://islamicfoundationbd.com/',
    thumbnail: '/portfolio/images/islamic-foundation.png',
    technologies: ['Laravel Blade', 'Bootstrap']
  },
  {
    id: 3,
    site_name: 'Firewood LPG',
    site_link: 'https://firewoodlpg.com/',
    thumbnail: '/portfolio/images/firewoodlpg.png',
    technologies: ['Nuxt.js', 'Pinia']
  },
  {
    id: 4,
    site_name: 'CareGuru',
    site_link: 'https://careguru.aaraa.com.bd/',
    thumbnail: '/portfolio/images/careguru.png',
    technologies: ['Vue', 'Tailwind Css', 'Pinia']
  },
  {
    id: 5,
    site_name: 'RERP',
    site_link: 'https://laraerp.sysable.tech/',
    thumbnail: '/portfolio/images/rerp.png',
    technologies: ['Vue', 'Tailwind Css', 'Pinia']
  }
])
</script>
