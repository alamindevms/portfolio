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
          <div class="col-span-1 overflow-hidden rounded-lg shadow">
            <a href="https://careguru.aaraa.com.bd/" target="_blank">
              <img
                src="/portfolio/images/careguru.png"
                class="w-full h-auto hover:scale-105 transition-all duration-300"
                alt="CareGuru"
              />
            </a>
          </div>
          <div class="col-span-1 overflow-hidden rounded-lg shadow">
            <a href="https://laraerp.sysable.tech/dashboard" target="_blank">
              <img
                src="/portfolio/images/rerp.png"
                class="w-full h-auto hover:scale-105 transition-all duration-300"
                alt="RERP"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PrimaryLink from '../buttons/PrimaryLink.vue'

export default { components: { PrimaryLink } }
</script>
