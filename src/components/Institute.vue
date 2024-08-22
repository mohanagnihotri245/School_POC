<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="relative bg-white py-16 sm:py-24">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div class="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
            <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            <!-- Testimonial card-->
            <div class="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <img class="absolute inset-0 h-100 w-full object-cover" src="https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/fx3mrksqewcfqliyn5ed" alt="" />
              <div class="absolute inset-0" />
              <div class="absolute inset-0 bg-gradient-to-t" />
              
            </div>
          </div>
        </div>
  
        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <!-- Content area -->
          <div class="pt-12 sm:pt-16 lg:pt-20">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Institute</h2>
            <div class="mt-6 space-y-6 text-gray-500">
              <p class="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
              <p class="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
              <p class="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
            </div>
          </div>
  
          <!-- Stats section -->
          
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  </script>