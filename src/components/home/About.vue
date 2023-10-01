<template>
  <section class="mt-20" id="about">
    <div class="container space-y-20">
      <div class="flex flex-col gap-16">
        <h2 class="text-3xl font-bold text-black-soft text-center">
          Education &amp; <span class="text-primary">Experience</span>
        </h2>
        <div class="relative flex flex-col justify-center items-center gap-20">
          <div class="h-full w-[1px] bg-gray-100 absolute inset-y-0 left-1/2 -translate-x-1/2" />
          <div
            class="relative w-1/2 border-gray-200"
            :class="item?.align ? 'ml-auto text-left pl-10' : 'mr-auto text-right pr-10'"
            v-for="item in education_experiences"
            :key="item?.id"
          >
            <span
              class="absolute top-0 h-3 laptop:h-6 w-3 laptop:w-6 rounded-full border-2 laptop:border-4 border-white"
              :class="[
                item?.align ? '-left-1.5 laptop:-left-3' : '-right-1.5 laptop:-right-3',
                item?.active ? 'bg-primary' : 'bg-gray-200'
              ]"
            ></span>
            <p
              class="text-base laptop:text-lg font-medium mb-3 laptop:mb-6 leading-0 -mt-1.5"
              :class="[item?.active ? 'text-primary' : 'text-gray-500']"
            >
              {{ item?.duration }}
            </p>
            <p
              class="text-sm font-bold laptop:text-3xl laptop:font-medium text-gray-800 leading-relaxed mb-2"
            >
              {{ item?.designation }}
            </p>
            <p class="text-sm laptop:text-base font-normal text-gray-500">{{ item?.company }}</p>
          </div>
        </div>
      </div>

      <div class="space-y-10">
        <h2 class="text-3xl font-bold text-black-soft text-center">
          <span class="text-primary">Technologies</span> We Use
        </h2>
        <div
          class="flex flex-col desktop:flex-row justify-center items-center -space-y-4 desktop:-space-y-0 desktop:-space-x-4 mt-10"
        >
          <div
            class="shrink-0 text-center flex flex-col gap-1 justify-center items-center border-4 border-white rounded-full p-5"
            :class="[stack?.id === 4 ? 'relative' : '', stack.bg_color]"
            v-for="stack in stacks"
            :key="stack.id"
            :style="{
              height: `${stack.scale * 160}px`,
              width: `${stack.scale * 160}px`,
              'z-index': `${stack.scale}`
            }"
          >
            <img
              :alt="stack.name"
              class="h-auto w-auto shrink-0"
              :src="`/portfolio/images/${stack.img}`"
            />
            <!-- <p class="text-sm font-normal text-white-mute">{{ stack?.name }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const education_experiences = reactive([
  {
    id: 1,
    designation: 'Front-End Developer',
    duration: '2022 - Present',
    company: 'Sysable Technology',
    active: true,
    align: true
  },
  {
    id: 2,
    designation: 'Front-End Developer',
    duration: '2021 - 2022',
    company: 'Mistri Solutions',
    active: false,
    align: false
  },
  {
    id: 3,
    designation: 'Executive Support Eng.',
    duration: '2016 - 2021',
    company: 'Stargate Communications',
    active: false,
    align: true
  },
  {
    id: 4,
    designation: 'Bachelor Of Business Studies (BBA)',
    duration: '2016 - Running',
    company: 'Kabi Nazrul Govt. College',
    active: false,
    align: false
  },
  {
    id: 5,
    designation: 'Higher Secondary Certificate (HSC)',
    duration: '2014 - 2016',
    company: 'Dania University College',
    active: false,
    align: true
  }
])

const stacks = reactive([
  {
    id: 1,
    name: 'TypeScript',
    img: 'ts.png',
    bg_color: 'bg-[#3178c6]',
    scale: 1
  },
  {
    id: 2,
    name: 'JavaScript',
    img: 'js.png',
    bg_color: 'bg-[#f7df1e]',
    scale: 1.1
  },
  {
    id: 3,
    name: 'Git',
    img: 'git.png',
    bg_color: 'bg-[#f05133]',
    scale: 1.2
  },
  {
    id: 4,
    name: 'Vue JS',
    img: 'vue.png',
    bg_color: 'bg-[#41b883]',
    scale: 1.5
  },
  {
    id: 5,
    name: 'React JS',
    img: 'react.png',
    bg_color: 'bg-[#61dafb]',
    scale: 1.2
  },
  {
    id: 6,
    name: 'Tailwind Css',
    img: 'tailwindcss.png',
    bg_color: 'bg-[#38bdf8]',
    scale: 1.1
  },
  {
    id: 7,
    name: 'Bootstrap',
    img: 'bootstrap.png',
    bg_color: 'bg-[#8112fa]',
    scale: 1
  }
])
</script>

<style></style>
