<template>
  <section id="contact" class="mt-20 py-10 bg-gray-100">
    <div class="container">
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
        <form
          ref="form"
          @submit.prevent="sendEmail"
          class="grid col-span-2 laptop:grid-cols-2 gap-5"
        >
          <div class="space-y-1 col-span-1 laptop:col-span-2">
            <label for="name" class="text-sm laptop:text-base font-normal text-gray-700 block">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              class="border-b border-gray-200 outline-none border border-transparent focus:border-primary focus:outline-none focus:bg-light-gray px-2 focus:rounded-md py-2 translate-all duration-300 text-sm font-light text-gray-800 placeholder:text-gray-400 w-full"
              placeholder="Enter name"
            />
          </div>
          <div class="space-y-1">
            <label for="email" class="text-sm laptop:text-base font-normal text-gray-700 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              class="border-b border-gray-200 outline-none border border-transparent focus:border-primary focus:outline-none focus:bg-light-gray px-2 focus:rounded-md py-2 translate-all duration-300 text-sm font-light text-gray-800 placeholder:text-gray-400 w-full"
              placeholder="Enter email"
            />
          </div>
          <div class="space-y-1">
            <label for="phone" class="text-sm laptop:text-base font-normal text-gray-700 block">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              class="border-b border-gray-200 outline-none border border-transparent focus:border-primary focus:outline-none focus:bg-light-gray px-2 focus:rounded-md py-2 translate-all duration-300 text-sm font-light text-gray-800 placeholder:text-gray-400 w-full"
              placeholder="Enter phone"
            />
          </div>

          <div class="col-span-2 space-y-1">
            <label for="message" class="text-sm laptop:text-base font-normal text-gray-700 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="border-b border-gray-200 outline-none border border-transparent focus:border-primary focus:outline-none focus:bg-light-gray px-2 focus:rounded-md py-2 translate-all duration-300 text-sm font-light text-gray-800 placeholder:text-gray-400 w-full"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="text-sm laptop:text-base font-medium bg-primary px-4 laptop:py-2 laptop:px-6 py-3 rounded-xl text-white flex items-center gap-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useToast } from 'vue-toastification'

const toast = useToast()

const form = ref()

// submit handler
const sendEmail = () => {
  console.log('form', form)
  emailjs.sendForm('service_kv2h6yi', 'template_034nf9j', form.value, '4ZFF-OZSCIy26EVSQ').then(
    (result) => {
      console.log('SUCCESS!', result.text)
      toast.success('Success', {
        timeout: 2000
      })
    },
    (error) => {
      console.log('FAILED...', error.text)
      toast.error(error.text, {
        timeout: 2000
      })
    }
  )
}
</script>
