<script setup>
// Start of Script

// Components Call
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';
import { RouterView } from 'vue-router';
import Scroll from './components/scroll.vue';
import Newnav from './components/newnav.vue';
import QuickLinks from './components/QuickLinks.vue';
import Chatbot from './components/Chatbot.vue';
// End of Script
</script>

<template>
<!-- Start of template--> 

   <!-- Root Directory  -->
<div id="app">
  <!-- Injecting  Navigation Component (Common Component on all Pages)-->
    <!-- <Navigation/> -->
    <Newnav/>
      <Scroll/>
    
      <!-- Injecting  Routing View  Component for managing Asynchronous nature-->
        <router-view/>

    <!-- Injecting  Footing Component (Common Component on all Pages)-->
     <Chatbot/>
     <QuickLinks/>
     <div class="flex items-center justify-center h-20 bg-gray-300"></div>
    <Footer/> 
</div>

<!-- End of template-->
</template>
