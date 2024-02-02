<script setup lang="ts">
import router from '@/router';
import { useLoginStore } from '@/stores/loginStore/login';
import Swal from 'sweetalert2';
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const store = useLoginStore();
const isMenuOpen = ref(false)

const toggleMenu = () => {
  console.log("Toggle");
  isMenuOpen.value = !isMenuOpen.value
}
const logout = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Log Out"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Done!",
        text: "Successful session closing",
        icon: "success"
      });
      store.logout();
      router.push('/login');
    }
  });
};
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <button @click="toggleMenu()" data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div id="mega-menu-full" class="items-center justify-between w-full md:flex md:w-auto md:order-1" :class="isMenuOpen?'flex':'hidden'">
              <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                  <li>
                    <RouterLink to="/">Home</RouterLink>
                  </li>
                  <li>
                    <!-- es mejor colocar el name que la url como tal -->
                    <RouterLink :to="{name: 'about'}">About</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/blog">blog</RouterLink>
                  </li>
                  <li>
                    <a class="cursor-pointer" @click="logout">Log Out</a>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>