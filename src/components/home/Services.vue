<template>
  <section id="services" class="mt-20">
    <div class="container">
      <div class="space-y-2 text-center">
        <p class="text-base font-semibold text-primary">Services</p>
        <h2 class="text-3xl font-bold text-black-soft">Service Provide For My Clients</h2>
      </div>

      <div class="grid grid-cols-1 laptop:grid-cols-4 gap-x-6 gap-y-16 laptop:gap-y-20 mt-20">
        <div
          class="group relative bg-gray-50 rounded-lg px-6 pt-12 laptop:pt-16 pb-6 text-center space-y-2 hover:bg-primary transition-all duration-300 shadow-[0_0_5px] shadow-black-soft/20"
          v-for="service in services"
          :key="service.id"
        >
          <div
            class="h-20 laptop:h-28 w-20 laptop:w-28 rounded-full group-hover:bg-primary bg-gray-100 border-4 border-white absolute -top-10 laptop:-top-14 left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-300"
          >
            <img
              alt="icon"
              loading="lazy"
              width="100"
              height="100"
              class="h-7 laptop:h-10 w-7 laptop:w-10"
              src="/_next/image?url=%2Fimages%2Fdesign.png&amp;w=256&amp;q=75"
            />
          </div>
          <h4
            class="text-lg laptop:text-xl font-medium text-gray-800 group-hover:text-white transition-all duration-300"
          >
            {{ service?.title }}
          </h4>
          <p
            class="text-sm leading-relaxed font-normal text-gray-600 group-hover:text-white transition-all duration-300 line-clamp-6"
          >
            {{ service?.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const services = reactive([
  {
    id: 1,
    title: 'Web Design',
    description:
      'Crafting Engaging User Experiences: Designing websites that adapt seamlessly to various devices and screen sizes, ensuring your audience receives an optimal experience on desktops, tablets, and smartphones.'
  },
  {
    id: 2,
    title: 'UI Development',
    description:
      'Elevating Digital Aesthetics Creating visually appealing and intuitive user interfaces that captivate users, enhance brand identity, and improve overall usability.'
  },
  {
    id: 3,
    title: 'Frameworks Mastery',
    description:
      'Harnessing the Power of Modern Tools: Proficient in popular frontend frameworks such as React and Angular, enabling the development of feature-rich and dynamic web applications.'
  },
  {
    id: 4,
    title: 'Performance Optimization',
    description:
      'Speeding Up Your Web Presence: Implementing optimization techniques to improve website loading times, performance, and SEO rankings, ensuring a smooth and efficient user experience.'
  }
])
</script>
