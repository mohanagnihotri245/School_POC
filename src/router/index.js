
import Header from '@/components/Header.vue'
import Institute from '@/components/Institute.vue'
import Mandatory from '@/components/Mandatory.vue'
import Society from '@/components/Society.vue'
import AboutUs from '@/views/AboutUs.vue'
import ContactUs from '@/views/ContactUs.vue'
import Home from '@/views/Home.vue'
import Approval from '@/components/Approval.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes=[
  {
    path:'/',
    name: 'Home',
    component: Home
  },
  {
    path:'/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path:'/AboutUs/Vision-Mission',
    name: 'AboutUs1',
    component: Header
  },
  {
    path:'/Society',
    name: 'AboutUs2',
    component: Society
  },
  {
    path:'/Institute',
    name: 'AboutUs3',
    component: Institute
  },
  {
    path:'/mandatory',
    name: 'AboutUs4',
    component: Mandatory
  },
  {
    path:'/affiliation-approval',
    name: 'AboutUs5',
    component: Approval
  },
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
