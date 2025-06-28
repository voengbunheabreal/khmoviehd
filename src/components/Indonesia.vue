<template>

    <div class="bg-gray-900 text-white p-6">
      <h2 class="text-3xl font-bold mb-4 ">ភាពយន្តឥណ្ឌូណេស៊ីកំពុងពេញនិយម</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <div v-for="movie in movies" :key="movie.id" class="relative bg-gray-800 rounded-lg overflow-hidden ml-10mt-2">
          <img :src="movie.image" :alt="movie.title" class="w-full object-cover" />
          <div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm" v-if="movie.type === 'សម្ដែង'">
            សម្ដែង
          </div>
          <div class="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm" v-if="movie.type === 'ថ្មី'">
            ថ្មី
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold">{{ movie.title }}</h3>
            <p class="text-sm text-gray-400 font-bold">⏳ {{ movie.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        movies: [
          { id: 1, title: "ទេវបុត្រណាចា", image: "/Content-imgae-Popular/ទេវបុត្រណាចា.jpg", duration: "1 ម៉ោង 36 នាទី",  },
          { id: 2, title: "ប្រមាញ់ព្រាយ វគ្គ2", image: "/Content-imgae-Popular/ប្រមាញ់ព្រាយ វគ្គ2.jpg", duration: "1 ម៉ោង 40 នាទី",  },
          { id: 3, title: "សំណើចគ្រួសារសេដ្ឋី​លា", image: "/Content-imgae-Popular/សំណើចគ្រួសារសេដ្ឋី​លា.jpg", duration: "1 ម៉ោង 57 នាទី", },
          { id: 4, title: "ពិភពលោកធំធេង", image: "/Content-imgae-Popular/ពិភពលោកធំធេង.jpg", duration: "2 ម៉ោង 0 នាទី", },
          { id: 5, title: "យុទ្ធសិល្ប៍ពស់ស", image: "/Content-imgae-Popular/យុទ្ធសិល្ប៍ពស់ស.jpg", duration: "1 ម៉ោង 30 នាទី",},
          { id: 6, title: "គម្ពីតែងតាំងទេវតា", image: "/Content-imgae-Popular/គម្ពីតែងតាំងទេវតា.jpg", duration: "2 ម៉ោង 10 នាទី",  },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  