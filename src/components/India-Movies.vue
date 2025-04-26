<template>
    <div class="bg-gray-900 text-white p-6">
      <h2 class="text-3xl font-bold mb-4 ">រឿងឥណ្ឌា</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div v-for="movie in movies" :key="movie.id" class="relative bg-gray-800 rounded-lg overflow-hidden ml-10mt-2">
          <img :src="movie.image" :alt="movie.title" class="w-full h-64 object-cover" />
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
          { id: 1, title: "ភ្នាក់ងាប្រយុទ្ធ ប៉ាថាន់", image: "/Content-image-india/ភ្នាក់ងាប្រយុទ្ធ ប៉ាថាន់.jpg", duration: "1 ម៉ោង 36 នាទី",  },
          { id: 2, title: "កំពូលចោរ កំពូលល្បិច", image: "/Content-image-india/កំពូលចោរ កំពូលល្បិច.jpg", duration: "1 ម៉ោង 40 នាទី",  },
          { id: 3, title: "អ្នកស៊ើបភ្នែកពិការ", image: "/Content-image-india/អ្នកស៊ើបភ្នែកពិការ.jpg", duration: "1 ម៉ោង 57 នាទី", },
          { id: 4, title: "អង្គរ័ក្សមុខស្រស់ ", image: "/Content-image-india/អង្គរ័ក្សមុខស្រស់ .jpg", duration: "2 ម៉ោង 0 នាទី", },
          { id: 5, title: "កំពូលជើងខ្លាំង", image: "/Content-image-india/កំពូលជើងខ្លាំង.jpg", duration: "1 ម៉ោង 30 នាទី",},
          { id: 6, title: "ខ្មោចនាងរ៉ូបី", image: "/Content-image-india/ខ្មោចនាងរ៉ូបី.jpg", duration: "2 ម៉ោង 10 នាទី",  },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  