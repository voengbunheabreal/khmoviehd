<template>
  <div>
    <div class="relative h-64 sm:h-80 md:h-96 lg:h-screen overflow-hidden">
      <div class="absolute inset-0 w-full h-full">
        <img
          :src="currentImage"
          alt="Movie Poster"
          class="object-cover w-full h-full transition-opacity duration-500"
          :class="{ 'opacity-100': imageLoaded, 'opacity-': !imageLoaded }"
        />
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-t from-black/80 to-transparent"
      >
        <h1
          class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:text-left"
        >
          {{ currentTitle }}
        </h1>
        <div
          class="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-4  sm:text-left"
        >
          {{ currentDetails }}
        </div>
        <div
          class="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-4  sm:text-left"
        >
          {{ currentDescription }}
        </div>
        <div class="flex sm:justify-start ">
          <button
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded"
          >
            ទស្សនាភាពយន្ត
          </button>
        </div>
      </div>
      <div
        class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="w-4 h-4 border-2 border-white rounded-full cursor-pointer transition-all duration-300"
          :class="{
            'bg-white': currentImageIndex === index,
            'bg-transparent': currentImageIndex !== index,
          }"
          @click="setImage(index)"
        ></div>
      </div>
    </div>
    <Content />
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import Content from "./Content-popular.vue";

export default {
  setup() {
    const images = ref([
      "/assets/12CMYSK8Zo15.jpg",
      "/assets/uF3slhs26zzZ.jpg",
      "/assets/0uwKKkkhbVSa.jpg",
      ]);

    const descriptions = ref([
      "Description for Image 1. This could be a longer text about the movie or image.",
      "Description for Image 2. More details can go here, perhaps a short synopsis.",
      "Description for Image 3. Even more text can be added for each image.",
    ]);
    const titles = ref([
      "Title for Image 1",
      "Title for Image 2",
      "Title for Image 3",
    ]);
    const details = ref([
      "Details for Image 1. Year, duration, genre, etc.",
      "Details for Image 2. More details here.",
      "Details for Image 3. Even more details.",
    ]);

    const currentImageIndex = ref(0);
    const imageLoaded = ref(false);

    const currentImage = computed(() => images.value[currentImageIndex.value]);
    const currentDescription = computed(
      () => descriptions.value[currentImageIndex.value]
    );
    const currentTitle = computed(() => titles.value[currentImageIndex.value]);
    const currentDetails = computed(
      () => details.value[currentImageIndex.value]
    );

    function setImage(index) {
      imageLoaded.value = false;
      setTimeout(() => {
        currentImageIndex.value = index;
        imageLoaded.value = true;
      }, 500);
    }

    onMounted(() => {
      setInterval(() => {
        imageLoaded.value = false;
        setTimeout(() => {
          currentImageIndex.value =
            (currentImageIndex.value + 1) % images.value.length;
          imageLoaded.value = true;
        }, 500);
      }, 3000);
    });

    return {
      currentImage,
      currentDescription,
      currentTitle,
      currentDetails,
      imageLoaded,
      currentImageIndex,
      images,
      setImage,
    };
  },
};
</script>

<style scoped></style>
