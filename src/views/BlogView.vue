<template>
  <div>
    <MenuComponent />
    <ul>
      <li><RouterLink :to="{name: 'post', params: {id:1}}">Libro 1</RouterLink></li>
      <li><RouterLink :to="{name: 'post', params: {id:2}}">Libro 2</RouterLink></li>
      <li><RouterLink :to="{name: 'post', params: {id:3}}">Libro 3</RouterLink></li>
      <li><RouterLink :to="{name: 'post', params: {id:4}}">Libro 4</RouterLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import MenuComponent from '@/components/Menu/MenuComponent.vue'
</script>

<style scoped>

</style>