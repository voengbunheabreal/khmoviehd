<template>
  <nav class="bg-black text-white p-4 flex items-center justify-between sticky top-0 z-10">
   <router-link to="/home"><img src="/src/assets/Khmer-Vovie-HD-300-x-80px.png" alt="" class="w-40"></router-link>

    <div class="hidden md:flex space-x-6 text-sm">
      <router-link to="/" class="hover:text-red-500">Home</router-link>
      <router-link to="/chinese" class="hover:text-red-500">Chinese</router-link>
      <router-link to="/thai" class="hover:text-red-500">Thai</router-link>
      <router-link to="/khmer" class="hover:text-red-500">Khmer</router-link>
      <router-link to="/indonesia" class="hover:text-red-500">Indonesia</router-link>
      <router-link to="/contact" class="hover:text-red-500">Contact</router-link>
    </div>

    <div class="flex items-center space-x-4">
      <button class="text-white hover:text-gray-400">🔍</button>
      <button class="text-white hover:text-gray-400">🇰🇭</button>
      <button class="bg-red-600 px-3 py-1 rounded hover:bg-red-700">ចូលគណនី</button>
    </div>
  </nav>
</template>
