<template>
  <section id="home">
    <div class="bg-gradient-to-r from-cyan-50/40 to-cyan-100/40 pt-20">
      <div class="grid grid-cols-1 laptop:grid-cols-2 items-end gap-8 laptop:gap-20">
        <!-- left side -->
        <div
          class="col-span-1 order-2 laptop:order-1 px-4 laptop:px-10 py-10 flex items-center gap-8 desktop:gap-14"
        >
          <div
            className="flex items-center gap-10 text-slate-200 h-auto"
            :style="{ writingMode: 'vertical-rl' }"
          >
            <h2 class="text-lg desktop:text-3xl font-bold tracking-[10px] laptop:tracking-[15px]">
              GET STARTED
            </h2>
            <ArrowLongDownIcon class="w-10 laptop:w-24 h-14 text-primary" />
          </div>

          <div class="space-y-3 laptop:space-y-6">
            <h1 class="text-black-soft text-3xl laptop:text-5xl font-medium">Al Amin Hossain</h1>
            <div class="space-y-3">
              <p class="text-xl font-normal text-primary">Frontend Developer</p>
              <p class="text-base font-normal text-dark-1">
                As an enthusiastic web developer, I am dedicated to leveraging my expertise in web
                development and maintenance to address the unique requirements of clients.
              </p>
            </div>
            <div class="flex gap-2">
              <PrimaryLink text="Contact me" link="#contact" />
              <SecondaryLink
                text="Download CV"
                link="/files/Al-Amin-Hossain.pdf"
                :icon="ArrowDownTrayIcon"
                download="/files/Al-Amin-Hossain.pdf"
              />
            </div>
          </div>
        </div>

        <!-- right side -->
        <div class="col-span-1 order-1 laptop:order-2">
          <div
            class="h-[400px] w-[345px] laptop:h-[500px] laptop:w-[418px] mx-auto rounded-t-full px-2 pt-2 border-t border-x border-gray-200"
          >
            <img
              src="/images/profile.jpeg"
              class="h-full w-auto max-w-full mx-auto rounded-t-full"
              alt="Al Amin Hossain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowLongDownIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/solid'
import PrimaryLink from '@/components/buttons/PrimaryLink.vue'
import SecondaryLink from '@/components/buttons/SecondaryLink.vue'
</script>
