<template>
  <section id="contact" class="mt-20">
    <div class="container pb-10">
      <h2 class="text-3xl font-bold text-black-soft text-center laptop:text-left">
        Let's Work <span class="text-primary">Together</span>
      </h2>
      <div
        class="grid grid-cols-1 desktop:grid-cols-3 gap-y-10 laptop:pag-y-0 laptop:gap-16 mt-8 relative"
      >
        <div class="w-full bg-gray-50 rounded-lg px-5 py-6 space-y-4">
          <p class="text-base font-normal text-gray-500">
            We value your feedback and are here to assist you. Feel free to reach out to us with any
            questions, inquiries, or requests. We look forward to hearing from you!
          </p>
          <div class="flex gap-4 text-sm laptop:text-base text-gray-700">
            <MapPinIcon class="h-5 w-5 shrink-0 mt-1" />
            <p>Rayerbag, Dhaka, Bangladesh -1362</p>
          </div>
          <div class="flex gap-4 text-sm laptop:text-base text-gray-700 hover:text-primary">
            <EnvelopeIcon class="h-5 w-5 shrink-0 mt-1" />
            <a href="mailto: alamindev.io@gmail.com" class="break-all block flex-1"
              >alamindev.io@gmail.com</a
            >
          </div>
          <div class="flex gap-4 text-sm laptop:text-base text-gray-700 hover:text-primary">
            <PhoneIcon class="h-5 w-5 shrink-0 mt-1" />
            <a href="tel: +8801922866947">+8801922866947</a>
          </div>
        </div>
        <div class="grid col-span-2 laptop:grid-cols-2 gap-8">
          <div class="space-y-1 col-span-1 laptop:col-span-2">
            <label for="name" class="text-sm laptop:text-base font-normal text-gray-700 block">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              class="border-b border-gray-200 focus:border-none focus:outline-none focus:bg-light-gray focus:px-2 focus:rounded-md py-2 translate-all duration-300 text-sm font-light text-gray-800 placeholder:text-gray-400 w-full"
              placeholder="Enter name"
            />
          </div>
          <div class="space-y-1">
            <label for="email" class="text-sm laptop:text-base font-normal text-gray-700 block">
              Email
            </label>
            <input
              type="text"
              id="email"
              class="border-b border-gray-200 focus:border-none focus:outline-none focus:bg-light-gray focus:px-2 focus:rounded-md py-2 translate-all duration-300 text-sm font-light text-gray-800 placeholder:text-gray-400 w-full"
              placeholder="Enter email"
            />
          </div>
          <div class="space-y-1">
            <label for="phone" class="text-sm laptop:text-base font-normal text-gray-700 block">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              class="border-b border-gray-200 focus:border-none focus:outline-none focus:bg-light-gray focus:px-2 focus:rounded-md py-2 translate-all duration-300 text-sm font-light text-gray-800 placeholder:text-gray-400 w-full"
              placeholder="Enter phone"
            />
          </div>

          <div class="col-span-2 space-y-1">
            <label for="message" class="text-sm laptop:text-base font-normal text-gray-700 block">
              Message
            </label>
            <textarea
              id="message"
              class="border-b border-gray-200 focus:border-none focus:outline-none focus:bg-light-gray focus:px-2 focus:rounded-md py-2 translate-all duration-300 text-sm font-light text-gray-800 placeholder:text-gray-400 w-full"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <div>
            <PrimaryLink text="Send" link="/" class="!inline-block" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import PrimaryLink from '../buttons/PrimaryLink.vue'
</script>
