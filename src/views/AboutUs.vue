
<template>
<!-- Start of template--> 

  <!-- Injecting  Header Component -->
  <Header/>
  <Institute/>
<Society/>
<Mandatory/>
<Approval/>
  
   <!-- Section containing Frequently Asked Questions (FAQ) -->
   <div class="bg-gray-900">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl divide-y-2 divide-gray-700">
        <h2 class="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-700">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                <span class="font-medium text-white">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-300">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
  
   <!-- The gray Line before the footer  -->
   <!-- <div class="flex items-center justify-center h-20 bg-gray-300"></div> -->
        
   <!-- End of template-->
  </template>
  
  <script setup>
// Start of Script

// Components Call
import Header from '@/components/Header.vue';

import { defineComponent, h } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, LifebuoyIcon, NewspaperIcon, PhoneIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import Temp from '@/components/temp.vue';

// Creating Dumby data, can also use json file on a database

// Data used in QnA section (javascript object)

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import Institute from '@/components/Institute.vue';
import Society from '@/components/Society.vue';
import event from '@/components/event.vue'
import Mandatory from '@/components/Mandatory.vue';
import Approval from '@/components/Approval.vue'


  const faqs = [
  {
  
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
   
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
   
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
  
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {

    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
  
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

// End of Script
</script>