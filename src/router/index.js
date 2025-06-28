import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Chinese from '@/components/Chinese.vue';
import Indonesia from "@/components/Indonesia.vue";
import Khmer from "@/components/Khmer.vue";
import Thai from "@/components/Thai.vue";
import India from '@/components/India.vue';
import Contact from "@/components/Contact.vue";



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/chinese', name: 'Chinese', component: Chinese },
  { path: "/indonesia", name: 'Indonesia', component: Indonesia },
  { path: "/khmer",  name: 'khmer', component: Khmer },
  { path: "/thai",  name: 'Thai', component: Thai },
  { path: "/india", name: 'India', component: India },
  { path: "/contact",  name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(), // Use browser history mode
  routes,
});

export default router;
