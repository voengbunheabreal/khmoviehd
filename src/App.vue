<template>
    <Navbar />
    <router-view />
    <BottomNav />
  </template>
  
  <script>
    import BottomNav from './components/BottomNav.vue';
    import Navbar from './components/Navbar.vue';
    import Home from './components/Home.vue';
    import Chinese from './components/Chinese.vue';
    import Thai from './components/Thai.vue';
    import Khmer from './components/Khmer.vue';

    
  
  export default {
    components: { Navbar, BottomNav , Home , Chinese , Thai , Khmer },
  };
  </script>
  