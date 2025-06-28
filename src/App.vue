<template>
  <div>
    <Navbar />
    <!-- Only show Slide if not on Contact page -->
    <Slide v-if="$route.name !== 'Contact'" />
    <router-view />
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from "./components/BottomNav.vue";
import Navbar from "./components/Navbar.vue";
import Slide from "./components/silde/silde.vue";

export default {
  name: "App",
  components: {
    Navbar,
    BottomNav,
    Slide
  },
};
</script>