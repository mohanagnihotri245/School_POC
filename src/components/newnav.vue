<template>
  <footer class="text-center text-lg-start bg-primary text-white">
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span class="mx-2"><i class="fa fa-phone mx-1"></i>Contact: (+91) 000000000</span>
      <span><i class="fa fa-clock mx-1"></i>Mon-Fri: 10:00-4:00</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
   
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
   
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

</footer>
    <!-- Sticky navigation bar -->
<div class="sticky z-20 top-0">
  <!-- Disclosure component for managing the open state of the menu -->
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <!-- Container for the navigation bar content -->
    <div class="mx-auto max-w-7xl px-1 sm:px-2 lg:px-4">
      <!-- Flex container for the navigation items -->
      <div class="flex h-16 justify-between">
        <!-- Section for logo and navigation links -->
        <div class="flex pl-2 lg:pl-0">
          <!-- Logo container -->
          <div class="flex-shrink-0 flex items-center">
            <img class="h-16 w-auto" src="https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/o4t9d7nqlciqbbah6wcf" alt="download" border="0">
          </div>
          <!-- Navigation links for large screens -->
          <div class="hidden lg:ml-4 lg:flex lg:space-x-4">
            <!-- Routing links for Navigation -->
            <router-link to="/" :class="getLinkClass('/')">Home</router-link>
            <router-link to="/AboutUs" :class="getLinkClass('/AboutUs')"><AboutusDrop/></router-link>
            <span class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
              <AdminDrop/>
            </span>
            <span class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
              <StudentDrop/>
            </span>
            <span class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
              <CourseDrop/>
            </span>
            
            <span class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
              <ExtraDrop/>
            </span>
            <span class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
              <AchieveDrop/>
            </span>
            <span class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
              <TrainingDrop/>
            </span>
            <span class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
              <AlumiDrop/>
            </span>
           
            <router-link to="/ContactUs" :class="getLinkClass('/ContactUs')">Contact Us</router-link>
          </div>
        </div>
            <!-- Search input container -->
            
            <!-- Mobile menu button -->
            <div class="flex items-center lg:hidden">
              <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <!-- Icon for opening the mobile menu -->
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <!-- Icon for closing the mobile menu -->
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>
  
        <!-- Mobile menu panel -->
        <DisclosurePanel class="lg:hidden">
          <div class="space-y-1 pt-2 pb-3">
            <router-link to="/"> 
              <DisclosureButton as="div" :class="getLinkClassMobile('/')"> 
                Home
              </DisclosureButton> 
            </router-link>
            <router-link to="/AboutUs">  
              <DisclosureButton as="div" :class="getLinkClassMobile('/AboutUs')">
                <AboutusDrop/>
              </DisclosureButton> 
            </router-link>
            <DisclosureButton as="div" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
              <AdminDrop/>
              </DisclosureButton>
              <DisclosureButton as="div" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
              <StudentDrop/>
              </DisclosureButton>
              <DisclosureButton as="div" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
              <CourseDrop/>
              </DisclosureButton>
              <DisclosureButton as="div" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
              <ExtraDrop/>
              </DisclosureButton>
              <DisclosureButton as="div" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
              <AchieveDrop/>
              </DisclosureButton>
              <DisclosureButton as="div" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
              <TrainingDrop/>
              </DisclosureButton>
              <DisclosureButton as="div" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
              <AlumiDrop/>
              </DisclosureButton>
              <router-link to="/ContactUs">
              <DisclosureButton as="div" :class="getLinkClassMobile('/ContactUs')">
                Contact Us
              </DisclosureButton>
            </router-link>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
  import { useRoute } from 'vue-router'
  import Dropdown from './AchieveDrop.vue';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import AboutusDrop from './AboutusDrop.vue';
import AdminDrop from './AdminDrop.vue';
import StudentDrop from './StudentDrop.vue';
import Temp from './temp.vue';
import ExtraDrop from './ExtraDrop.vue';
import AchieveDrop from './AchieveDrop.vue';
import TrainingDrop from './TrainingDrop.vue';
import AlumiDrop from './AlumiDrop.vue';
import CourseDrop from './CourseDrop.vue';



  
  const route = useRoute()
  
  // Function to determine the class for navigation links
  const getLinkClass = (path) => {
    return route.path === path
      ? 'inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900'
      : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
  }
  
  // Function to determine the class for mobile navigation links
  const getLinkClassMobile = (path) => {
    return route.path === path
      ? 'block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
      : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800'
  }
  </script>
  