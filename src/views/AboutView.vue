<script setup lang="ts">
import MenuComponent from '@/components/Menu/MenuComponent.vue'
import { useCounterStore } from '@/stores/counter';
import { ref, onMounted } from 'vue'
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query'

const store = useCounterStore()


</script>

<template>
  <MenuComponent />
  <div class="about">
    <h1>This is an about page</h1>
    <br>
  </div>
  
  <h1>{{ store.count }}</h1>
  <h1>{{ store.doubleCount }}</h1>
  <button @click="store.increment">increase</button>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
