<template>
    <div>
      <!-- Chat Button -->
      <div class="fixed bottom-0 right-0 mb-4 mr-4 z-50">
        <button @click="toggleChatbox" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Chat 
        </button>
      </div>
  
      <!-- Chat Container -->
      <div v-if="isChatboxOpen" class="fixed bottom-16 right-4 w-96 z-50">
        <div class="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div class="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <p class="text-lg font-semibold">ChatBot</p>
            <button @click="toggleChatbox" class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="p-4 h-80 overflow-y-auto" ref="chatbox">
            <div v-for="(message, index) in messages" :key="index" :class="{'mb-2 text-right': message.sender === 'user', 'mb-2': message.sender === 'bot'}">
              <p :class="{'bg-blue-500 text-white': message.sender === 'user', 'bg-gray-200 text-gray-700': message.sender === 'bot'}" class="rounded-lg py-2 px-4 inline-block">
                {{ message.text }}
              </p>
            </div>
          </div>
          <div class="p-4 border-t flex">
            <input v-model="userInput" @keyup.enter="sendMessage" type="text" placeholder="Type a message" class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button @click="sendMessage" class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">Send</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isChatboxOpen = ref(true);
  const userInput = ref('');
  const messages = ref([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  
  const toggleChatbox = () => {
    isChatboxOpen.value = !isChatboxOpen.value;
  };
  
  const sendMessage = () => {
    if (userInput.value.trim() !== '') {
      messages.value.push({ sender: 'user', text: userInput.value });
      userInput.value = '';
      respondToUser();
    }
  };
  
  const respondToUser = () => {
    setTimeout(() => {
      messages.value.push({ sender: 'bot', text: 'This is a response from the chatbot.' });
    }, 500);
  };
  </script>
  
  <style scoped>
  /* Ensure chatbox and button are above other content */
  .z-50 {
    z-index: 50;
  }
  
  /* Remove transparent background */
  .bg-white {
    background-color: #ffffff;
  }
  
  .bg-blue-500 {
    background-color: #3b82f6;
  }
  
  .bg-gray-200 {
    background-color: #e5e7eb;
  }
  
  .bg-blue-600 {
    background-color: #2563eb;
  }
  
  /* Additional styles for chatbox */
  .fixed {
    position: fixed;
  }
  </style>
  