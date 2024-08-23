<template>
  <Popover class="relative">
    <PopoverButton class="inline-flex items-center gap-x-0.5 text-sm font-semibold leading-6 text-gray-900">
      <span>About Us</span>
      <ChevronDownIcon class="h-5 w-4" aria-hidden="true" />
    </PopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <PopoverPanel class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
        <div class="w-fit max-w-md flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div class="p-2">
            <div
              v-for="item in solutions"
              :key="item.name"
              class="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50"
            >
              <div>
                <!-- Use router-link instead of anchor tag -->
                <router-link
                  :to="item.href"
                  class="font-semibold text-gray-900"
                >
                  {{ item.name }}
                  <span class="absolute inset-0" />
                </router-link>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            <router-link
              v-for="item in callsToAction"
              :key="item.name"
              :to="item.href"
              class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <component
                :is="item.icon"
                class="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const solutions = [
  { name: "About Society", href: "/Society" },
  { name: "About Institute", href: "/Institute" },
  { name: "Vision & Mission", href: "/AboutUs/Vision-Mission" },
  { name: "Mandatory", href: "/mandatory" },
  { name: "Affiliation & Approval", href: "/affiliation-approval" },
];

</script>
