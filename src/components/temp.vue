<template>
  <Popover class="relative">
    <PopoverButton class="inline-flex items-center gap-x-0.5 text-sm font-semibold leading-6 text-gray-900">
      <span>Courses</span>
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
              <Popover class="relative">
                <PopoverButton class="inline-flex items-center gap-x-0.5 text-sm font-semibold text-gray-900">
                  <span>{{ item.name }}</span>
                  <ChevronDownIcon class="h-4 w-4 ml-1" aria-hidden="true" />
                </PopoverButton>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
                >
                  <PopoverPanel class="absolute z-20 left-full top-0 mt-0 ml-2 w-48 origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="p-2">
                      <a v-for="subItem in item.subItems" :key="subItem.name" :href="subItem.href" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        {{ subItem.name }}
                      </a>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </div>
          </div>
          <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            <a
              v-for="item in callsToAction"
              :key="item.name"
              :href="item.href"
              class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              {{ item.name }}
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/vue/24/outline'

const solutions = [
  { 
    name: 'Diploma', 
    
    icon: ChartPieIcon,
    subItems: [
      { name: 'CSE'},
      { name: 'EE'},
      { name: 'CE'},
      { name: 'ECE'},
    ]
  },
  { 
    name: 'UG', 
    icon: CursorArrowRaysIcon,
    subItems: [
    { name: 'BA/BCom'},
    { name: 'BCA'},
    { name: 'BBA'},
    { name: 'B.Tech'},
    ]
  },
  { 
    name: 'PG', 
    
    icon: FingerPrintIcon,
    subItems: [
    { name: 'MBA'},
    { name: 'MCA'},
    { name: 'MA/MSc'},
    { name: 'M.Tech'},
    ]
  },
  
]

const callsToAction = [
  { name: 'Skill Oriented' },
  // { name: 'View Demo'},
]

</script>
