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
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <!-- Flex container for the navigation items -->
          <div class="flex h-16 justify-between">
            <!-- Section for logo and navigation links -->
            <div class="flex px-2 lg:px-0">
              <!-- Logo container -->
              <div class="flex-shrink-0 flex items-center">
                <img class="h-16 w-auto" src="https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/o4t9d7nqlciqbbah6wcf" alt="download" border="0">
              </div>
              <!-- Navigation links for large screens -->
              <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
                <!-- Routing links for Navigation -->
                <router-link to="/" :class="getLinkClass('/')">Home</router-link>
                <router-link to="/AboutUs" :class="getLinkClass('/AboutUs')">About Us</router-link>
                <router-link to="/ContactUs" :class="getLinkClass('/ContactUs')">Contact Us</router-link>
                <span class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                  <Dropdown/>
                </span>
                <!-- Service heading without routing link -->
        <span class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton>
          Services
        </MenuButton>
      </div>
  
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account settings</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
            </MenuItem>
            <form method="POST" action="#">
              <MenuItem v-slot="{ active }">
                <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Sign out</button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </transition>
    </Menu>
                </span>
              </div>
            </div>
            <!-- Search input container -->
            <div class="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div class="w-full max-w-lg lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input id="search" name="search" class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Search" type="search" />
                </div>
              </div>
            </div>
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
                About Us
              </DisclosureButton> 
            </router-link>
            <router-link to="/ContactUs">
              <DisclosureButton as="div" :class="getLinkClassMobile('/ContactUs')">
                Contact Us
              </DisclosureButton>
            </router-link>
            <DisclosureButton as="div">
              <Temp/>
              </DisclosureButton>
            <!-- Service heading without routing link -->
            <DisclosureButton as="div" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800">
               <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton>
          Services
        </MenuButton>
      </div>
  
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account settings</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
            </MenuItem>
            <form method="POST" action="#">
              <MenuItem v-slot="{ active }">
                <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Sign out</button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </transition>
    </Menu>
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
  import { useRoute } from 'vue-router'
  import Dropdown from './Dropdown.vue';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'


  
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
  