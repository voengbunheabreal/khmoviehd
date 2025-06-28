<template>
  <div>
    
    <Content />
    <IndiaMovies />
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import Content from './Content-popular.vue';
import IndiaMovies from './India.vue';
import silde  from "./silde/silde.vue";

export default {
  name: 'HomePage',
  components: {
    Content,
    IndiaMovies,
    silde
  },
  
}
</script>

<style scoped></style>
