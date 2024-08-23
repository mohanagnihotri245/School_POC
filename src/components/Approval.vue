<template>
  <div>
    <div class="bg-white py-4 sm:py-6">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto w-full lg:mx-0">
          <h2
            style="color: Gray"
            class="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl text-center"
          >
          Affiliation
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Introduction to the team...
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <li v-for="person in people" :key="person.name">
            <ul role="list" class="mt-3 flex gap-x-3">
              <div class="m-2 space-y-2">
                <div
                  class="group flex flex-col gap-1 rounded-lg p-2 text-gray"
                  tabindex="1"
                >
                  <div style="width:320px;" class="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                      <img :src="person.image" class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                    </div>
                    <!-- <div style="background-color: Gray; width:70%;" class="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
                    
                      <h2 class="text-m font-light text-gray-200">{{ person.role }}</h2>
                    </div> -->
                  </div>
                  <p class="pl-5 text-gray-400 hover:text-gray-500">
                    <a :href="person.linkedin" target="_blank">
                      <span class="sr-only">LinkedIn</span>
                      <svg style="display: inline;" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path 
                          fill-rule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clip-rule="evenodd"
                        />
                      </svg>&nbsp;<span style="font-size: .8em; font-style: italic;">connect with us</span>
                    </a>
                  </p>
                  <div
                    class="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                  >
                    <p style="font-size: .9em;" v-html="person.bio"></p>
                  </div>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
    <div class="text-center">
      <h2>Approval </h2>
     
    </div>
  <div class="slider">
      <div class="slide-track">
        <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="">
         </div>
          <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="">
         </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
         
          role: 'CBSE',
          image: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/rjijqcgg6yamo8idggge',
          linkedin: 'https://linkedin.com',
          bio: 'This is all about Juliet',
        },
        {
          
          role: 'CBSE',
          image: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/rjijqcgg6yamo8idggge',
          linkedin: 'https://linkedin.com',
          bio: 'This is all about Juliet',
        },
     
        {
          role: 'CBSE',
          image: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/rjijqcgg6yamo8idggge',
          linkedin: 'https://linkedin.com',
          bio: 'This is all about Juliet',
        },
      
        {
         
          role: 'CBSE',
          image: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/rjijqcgg6yamo8idggge',
          linkedin: 'https://linkedin.com',
          bio: 'This is all about Juliet',
        },
        {
          
          role: 'CBSE',
          image: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/rjijqcgg6yamo8idggge',
          linkedin: 'https://linkedin.com',
          bio: 'This is all about Juliet',
        },
        {
         
          role: 'CBSE',
          image: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/rjijqcgg6yamo8idggge',
          linkedin: 'https://linkedin.com',
          bio: 'This is all about Juliet',
        },
      ]
    };
  }
}
</script>

<style scoped>
body{
  align-items: center;
  justify-content: center;
}
h2 {
    font-size: 40px;
    margin-bottom: 40px;
    font-weight: 20px;
    margin-top: 30px;
  }
  
  .text-center p {
    padding-top: 10px;
    padding-bottom: 30px;
    font-size: 20px;
  }
  
@keyframes scroll{
  0%{
      transform:translateX(0);
  }
  100%{
      transform: translateX(calc(-250px*7));
  }
}
.slider{
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: auto;
  margin-bottom: 50px;
}
.slider .slide-track{
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px*14);
}
.slider .img{
  height: 500px;
  width: 250px;
}
</style>