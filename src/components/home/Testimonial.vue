<template>
  <section id="testimonial" class="mt-10">
    <div class="container">
      <h2 class="text-3xl font-bold text-black-soft text-center">
        Customers <span class="text-primary">Expericen</span>
      </h2>
      <div class="mt-20 relative">
        <div
          class="absolute -top-8 laptop:-top-10 left-10 h-16 laptop:h-20 w-16 laptop:w-20 bg-primary rounded-full flex items-center justify-center"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="h-6 laptop:h-8 w-6 laptop:w-8 text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
            ></path>
          </svg>
        </div>
        <div
          class="pt-16 laptop:pt-20 pb-10 px-10 border border-gray-200 rounded-xl flex flex-col laptop:flex-row gap-6"
        >
          <div class="w-full laptop:w-5/12 shrink-0 space-y-2">
            <h4 class="text-xl font-semibold text-gray-800">
              We care about
              <br /><span class="text-primary">Customers experience too</span>
            </h4>
            <p class="text-sm font-normal text-gray-500">
              Clients are invaluable to businesses, providing financial support, collaboration
              opportunities, and feedback. Cultivating loyal relationships leads to long-term
              success and mutual prosperity.
            </p>
          </div>
          <div
            class="w-full laptop:w-7/12 shrink-0 relative overflow-hidden"
            id="testimonial-slider"
          >
            <Swiper
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false
              }"
              :speed="1000"
              :slidesPerView="1"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }"
              :spaceBetween="20"
              :modules="[Autoplay, Navigation]"
              className="w-full"
            >
              <SwiperSlide :key="index" v-for="(testimonial, index) in testimonials">
                <div className="bg-light-gray rounded-lg p-4 relative">
                  <div className="absolute top-2 left-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="h-8 w-8 text-gray-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                      ></path>
                    </svg>
                  </div>
                  <blockquote
                    className="first-letter:text-2xl first-letter:font-bold indent-8 relative z-10 text-sm lg:text-base font-normal text-gray-700"
                  >
                    {{ testimonial.message }}
                  </blockquote>

                  <div className="flex items-center gap-2 mt-4">
                    <img
                      :src="testimonial.avatar"
                      height="50"
                      width="50"
                      className="h-10 w-10 rounded-full shrink-0"
                      alt="Profile Picture"
                    />
                    <div className="space-y-0.5">
                      <h6 className="text-sm font-semibold text-gray-900">
                        {{ testimonial.name }}
                      </h6>
                      <p className="text-xs font-normal text-gray-500">
                        {{ testimonial.designation }} of
                        <span className="text-primary">{{ testimonial.company }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div class="relative bottom-3 mt-10 z-10 flex items-center justify-center gap-3">
                <button
                  class="swiper-button-prev h-5 w-5 !text-gray-400 shrink-0 hover:!text-primary hover:-translate-x-1 transition-all duration-300 swiper-button-disabled"
                  name="arrow-back-outline"
                  disabled=""
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg></button
                ><button
                  class="swiper-button-next h-5 w-5 !text-gray-400 shrink-0 hover:!text-primary hover:translate-x-1 transition-all duration-300"
                  name="arrow-forward-outline"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonials = reactive([
  {
    message:
      'Working with [Company Name] has been an absolute game-changer for our business. Their expertise and dedication have propelled our success, and their impeccable service has made them an invaluable partner. I highly recommend [Company Name] to anyone looking for exceptional results and a trusted ally in their journey.',
    name: 'John Smith',
    company: 'XYZ',
    designation: 'CEO',
    avatar: '/portfolio/images/default-avatar.jpeg'
  },
  {
    message:
      'Working with [Company Name] has been an absolute game-changer for our business. Their expertise and dedication have propelled our success, and their impeccable service has made them an invaluable partner. I highly recommend [Company Name] to anyone looking for exceptional results and a trusted ally in their journey.',
    name: 'John Smith',
    company: 'XYZ',
    designation: 'CEO',
    avatar: '/portfolio/images/default-avatar.jpeg'
  },
  {
    message:
      'Working with [Company Name] has been an absolute game-changer for our business. Their expertise and dedication have propelled our success, and their impeccable service has made them an invaluable partner. I highly recommend [Company Name] to anyone looking for exceptional results and a trusted ally in their journey.',
    name: 'John Smith',
    company: 'XYZ',
    designation: 'CEO',
    avatar: '/portfolio/images/default-avatar.jpeg'
  },
  {
    message:
      'Working with [Company Name] has been an absolute game-changer for our business. Their expertise and dedication have propelled our success, and their impeccable service has made them an invaluable partner. I highly recommend [Company Name] to anyone looking for exceptional results and a trusted ally in their journey.',
    name: 'John Smith',
    company: 'XYZ',
    designation: 'CEO',
    avatar: '/portfolio/images/default-avatar.jpeg'
  }
])
</script>

<style scoped>
.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
  display: none;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  content: '' !important;
}

.swiper-button-prev {
  left: 40% !important;
  transform: translateX(-40%) !important;
}

.swiper-button-next {
  right: 40% !important;
  transform: translateX(-40%) !important;
}
</style>
