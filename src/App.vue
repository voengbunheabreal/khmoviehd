<template>
  <Navbar />
  <router-view />
  <Content />
  <IndiaMovies />
  
  <BottomNav />
</template>

<script>
import BottomNav from "./components/BottomNav.vue";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Chinese from "./components/Chinese.vue";
import Thai from "./components/Thai.vue";
import Khmer from "./components/Khmer.vue";
import Content from "./components/Content-popular.vue";
import IndiaMovies from "./components/India-Movies.vue";

export default {
  components: { Navbar, BottomNav, Home, Chinese, Thai, Khmer, Content , IndiaMovies },
};
</script>
